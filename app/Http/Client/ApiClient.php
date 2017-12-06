<?php

namespace App\Http\Client;

use App\Exceptions\MissingOptionException;
use Http\Client\HttpClient as HttpClientInterface;
use Http\Client\Common\HttpMethodsClient as HttpClient;
use Http\Client\Common\HttpMethodsClient;
use Http\Discovery\HttpClientDiscovery;
use Http\Discovery\MessageFactoryDiscovery;

class ApiClient extends AbstractHttpClient
{
    /** @var  HttpClient */
    protected $client;

    /**
     * @param HttpClientInterface $client
     * @return $this
     * @throws UnsupportedClientException
     */
    public function setHttpClient(HttpClientInterface $client = null)
    {
        // None given, then defaults to wrapper client that provides
        // HTTP method get() and post()
        if (!$client) {
            $client = new HttpMethodsClient(
                HttpClientDiscovery::find(),
                MessageFactoryDiscovery::find()
            );
        }

        if (!$client instanceof HttpMethodsClient) {
            throw new UnsupportedClientException('Expecting client to be instance of HttpMethodsClient');
        }

        $this->client = $client;

        return $this;
    }

    /**
     * @example
     *  ```
     *  $client->handle([
     *      'method' => 'GET',
     *      'url' => 'www.example.com',
     *      'headers' => ['Content-Type' => 'application/json'],
     *  ]);
     *  ```
     * @param array $options
     * @return \Psr\Http\Message\ResponseInterface $response
     * @throws MissingOptionException
     */
    public function handle($options = [])
    {
        if (!array_key_exists('method', $options) || !array_key_exists('url', $options)) {
            throw new MissingOptionException('Requires both method and url options');
        }

        if (!$this->client) {
            $this->setHttpClient();
        }

        $headers = [];

        if (array_key_exists('headers', $options)) {
            $headers = $options['headers'];
        }

        $response = null;

        switch (strtoupper($options['method'])) {
            case 'GET':
                $response = $this->client->get($options['url'], $options['headers']);
                break;
            case 'POST':
                $response = $this->client->post(
                    $options['url'],
                    $headers,
                    $options['body']
                );
                break;
        }

        return $response;
    }
}
