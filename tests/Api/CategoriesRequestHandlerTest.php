<?php

namespace Tests\Api;

use Tests\TestCase;

class CategoriesRequestHandlerTest extends TestCase
{
    public function testResponseStatusOk()
    {
        $response = $this->get('/api/chucknorris/jokes/categories');
        $response->assertStatus(200);
    }
}
