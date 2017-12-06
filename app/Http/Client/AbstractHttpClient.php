<?php

namespace App\Http\Client;

use App\AbstractHandler;
use Http\Client\HttpClient;

abstract class AbstractHttpClient extends AbstractHandler
{
    /**
     * @var HttpClient implementation
     */
    protected $client;

    /**
     * The setter method that specifies the client to be used
     * for making http requests.
     *
     * @param HttpClient $client implementation
     * @return $this
     */
    abstract public function setHttpClient(HttpClient $client);

    /**
     * Get the client instance for making http requests.
     *
     * @return HttpClient
     */
    public function getHttpClient()
    {
        return $this->client;
    }
}
