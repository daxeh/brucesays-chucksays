<?php

namespace App\Http\Controllers;

use App\Http\Client\ApiClient;

class ApiController extends Controller
{
    /** @var  ApiClient */
    protected $apiClient;

    public function __construct(ApiClient $apiClient)
    {
        $this->apiClient = $apiClient;
    }

    /**
     * Returns response view with default HTTP response headers.
     *
     * @param array $data resource data
     * @param int $status status code, defaults to 200
     * @param string $msg status msg
     */
    public function response($data = [], $status = 200, $msg = '')
    {
        $res = [
            'status' => $status,
            'msg' => $status > 200 && $status < 300 ? 'OK' : $msg,
            'data' => $data
        ];

        return \Response::view('api', $res)->header('Content-Type', 'application/json');
    }

    /**
     * Make request with configuration
     * @param $options
     * @return array $data
     * @throws \HttpResponseException
     */
    public function request($options)
    {
        $response = $this->apiClient->setHttpClient()->handle($options);

        switch ($response->getStatusCode()) {
            case 200:
                $data = json_decode($response->getBody(), true);
                return $data;
            default:
                throw new \HttpResponseException($response);
        }
    }
}
