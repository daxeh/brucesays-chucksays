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
|  ChuckNorris API Routes
|--------------------------------------------------------------------------
|
|  Retrieve a random Chuck joke
|  Retrieve joke that matches given id
|  Retrieves a list of available categories
|
|  All responses have the common schema structure;
|   {
|       "name": "ChuckNorris",
|       "paylaod": [
|
|       ]
|   }
 */

/**
 * ChuckNorris group
 *
 * GET /api/chucknorris/
 */
Route::prefix('chucknorris')->group(function () {
    /**
     * Display all available api routes
     */
    Route::get('/', function () {
        $routes = [];
        foreach (Route::getRoutes()->getIterator() as $route) {
            if (strpos($route->uri, 'api/chucknorris') !== false) {
                $routes[] = $route->uri;
            }
        }
        return view('api', ['data' => $routes]);
    });

    // Chuck Norris API
    $baseNamespace = 'Api\ChuckNorris';

    /**
     * Retrieve a random Chuck Norris joke
     * GET /api/chucknorris/jokes/random
     * Response 200 payload
     *  {
     *      "id": "1"
     *      "category": ["movie"]
     *      "value": "He kicks"
     *  }
     */
    Route::get('/jokes/random', $baseNamespace . '\Jokes\RandomRequestHandler')->name('jokes.get');

    /**
     * Free text search.
     * GET /api/chucknorris/jokes/search?query={query}
     * Response 200 payload
     *  {
     *      "total": 1,
     *          "result": [{
     *              "id": "1"
     *              "category": ["movie"]
     *              "value": "He kicks"
     *          }]
     *  }
     */
    Route::get('/jokes/search?query={query}', $baseNamespace . '\Jokes\SearchRequestHandler')->name('jokes.search');

    /**
     * GET available categories
     * GET /jokes/categories
     * Response 200 payload
     * [
     *  "explicit",
     *  "movie"
     * ]
     */
     Route::get('/jokes/categories', $baseNamespace . '\Jokes\CategoriesRequestHandler')->name('jokes.category');


    /**
     * Get reactions for matching id
     * GET /reactions/{id}
     * Response 200
     *  {
     *      "type": "joke",
     *      "paylaod": {
     *          "total_count": 6,
     *          "+1": 2,
     *          "-1": 1,
     *          "laugh": 2,
     *          "rofl": 1,
     *          "facepalm": 0
     *      }
     *  }
     */
    // Route::get('reactions/{id}', 'ReactionStats');
});
