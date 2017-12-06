<?php

namespace App\Http\Controllers\Api\ChuckNorris\Jokes;

use App\Http\Controllers\ApiController;
use Illuminate\Http\Exceptions\HttpResponseException;

class CategoriesRequestHandler extends ApiController
{
    public function __invoke()
    {
        // Prepare options
        $options = [
            'method' => 'get',
            'url' => 'https://api.chucknorris.io/jokes/categories',
            'headers' => ['Content-Type' => 'application/json']
        ];

        try {
            $data = $this->request($options);

            return $this->response($data, 200, 'OK');
        } catch (HttpResponseException $ex) {
            throw $ex;
        }
    }
}
