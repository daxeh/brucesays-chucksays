<?php

namespace App\Http\Controllers\Api\ChuckNorris\Jokes;

use App\Http\Controllers\ApiController;

class SearchRequestHandler extends ApiController
{
    /**
     * @param \Request $request
     * @return $this
     */
    public function __invoke(\Request $request)
    {
        $request->validate([
            'query' => 'required|max:255'
        ]);

        return $this->response(['data' => ['a', 'b', 'c']]);
    }
}
