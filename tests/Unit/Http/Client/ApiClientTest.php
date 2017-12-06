<?php

namespace Tests\Unit\Http\Client;

use Tests\TestCase;
use Http\Client\Common\BatchClient;
use Psr\Http\Message\ResponseInterface;
use App\Http\Client\ApiClient;
use Http\Discovery\HttpClientDiscovery;

class ApiClientTest extends TestCase
{
    /** @var  ApiClient */
    protected $client;

    /** @var  string */
    protected $url;

    public function setup()
    {
        $this->client = new ApiClient();
        $this->url = 'http://www.google.com';
    }

    public function testCanExecuteHttpMethodGet()
    {
        $options = [
            'method' => 'get',
            'headers' => [],
            'url' => $this->url
        ];

        /** @var ResponseInterface $response */
        $response = $this->client->setHttpClient()->handle($options);
        $this->assertNotNull($response);
        $this->assertEquals(302, $response->getStatusCode());
    }

    public function testCanExecuteHttpMethodPost()
    {
        $options = [
            'method' => 'post',
            'url' => $this->url,
            'headers' => [],
            'body' => '{}'
        ];

        /** @var ResponseInterface $response */
        $response = $this->client->setHttpClient()->handle($options);
        $this->assertNotNull($response);
        $this->assertEquals(405, $response->getStatusCode());
    }

    /**
     * @expectedException \App\Http\Client\UnsupportedClientException
     * @expectedExceptionMessage Expecting client to be instance of HttpMethodsClient
     */
    public function testCanRaiseUnsupportedClientException()
    {
        $client = new BatchClient(
            HttpClientDiscovery::find()
        );

        $this->client->setHttpClient($client);
    }

    /**
     * @expectedException \App\Exceptions\MissingOptionException
     */
    public function testCanRaiseMissingOptionsException()
    {
        $this->client->setHttpClient()->handle([]);
    }
}
