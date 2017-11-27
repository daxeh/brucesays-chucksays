<?php
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*
|--------------------------------------------------------------------------
|  Jokes API Routes
|--------------------------------------------------------------------------
|
|  Retrieve a random Chuck joke
|  Retrieve joke that matches given id
|  Retrieves a list of available categories
|
|  All responses have the common schema structure;
|   {
|       "type": "Joke",
|       "paylaod": {
|           ...
|       }
|   }
 */

/**
 * Retrieve a random Chuck joke
 * GET /jokes
 * Response 200
 *  {
 *
 *      "reactions": {
 *          "total_count": 6,
 *          "+1": 2,
 *          "-1": 1,
 *          "laugh": 2,
 *          "rofl": 1,
 *          "facepalm": 0
 *      }
 *  }
 * `reactions` object: provides a breakdown of reaction counts
 */

/**
 * GET /jokes/categories: Retrieves a list of available categories
 * Response 200
 *  {
 *  }
 *
 * GET /joke/{id}: Retrieve a joke that matches given id.
 * Response 200
 *  {
 *  }
 *
 */
