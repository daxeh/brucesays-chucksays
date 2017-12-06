<?php

namespace App\Http\Controllers\Api\ChuckNorris\Jokes;

use App\Http\Client\ApiClient;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Exceptions\HttpResponseException;

class RandomRequestHandler extends ApiController
{
    /** @var  ApiClient */
    protected $apiClient;

    /**
     * Single action controller invoking method
     * @return $this
     */
    public function __invoke()
    {
        // Prepare options
        $options = [
            'method' => 'get',
            'url' => 'https://api.chucknorris.io/jokes/random',
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
