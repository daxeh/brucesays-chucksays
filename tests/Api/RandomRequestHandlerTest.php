<?php

namespace Tests\Api;

use Tests\TestCase;

class RandomRequestHandlerTest extends TestCase
{
    public function testResponseStatusOk()
    {
        $response = $this->get('/api/chucknorris/jokes/random');
        $response->assertStatus(200);
    }
}
