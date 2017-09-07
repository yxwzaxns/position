<?php

use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return Response::json(array(
//       'user' => $request->user()
//     ));
// });
Route::get('/user', function (Request $request) {
    return Response::json(array(
      'user' => $request->user()
    ));
})->middleware('auth:api');
// Route::group(['prefix' => 'api/v1', 'middleware' => 'auth:api'], function () {
//     	Route::post('/user', function(Request $request){
//             return Response::json(array(
//               'user' => $request->user()
//             ));
//       } );
// 	});
// Route::get('/v1/location/{name}/{id}','HomeController@getRealLocation');
// Route::get('/v1/location/{name}/{id}', function ($name = null, $id = null){
// // var_dump('a');exit;
//     // $location = HomeController::getRealLocation();
//     return Response::json(array(
//             'error' => false,
//             'status_code' => 200,
//             'data' => $location,
//         ));
// });
Route::get('/v1/location/{name}/{id}', function ($name = null, $id = null){
  if ($id == null || $name == null ) {
    return Response::json(array(
      'status_code' => 500
    ));
  }else{
    switch ($id) {
      case '1':
        $location = array(
          rand(0,1298 - 45 * 2),rand(40,729 - 40 * 2)
        );
        break;
      case '2':
        $location = array(
          rand(0,793),rand(0,667)
        );
        break;
      default:
        # code...
        break;
    }
  };
  return Response::json(array(
          'error' => false,
          'status_code' => 200,
          'data' => $location,
      ));
});
Route::get('/v1/map_info/{map_name?}', function($map_name = null) {
    if ($map_name == null) {
        $products = App\Product::all(array('id', 'name', 'price'));
    } else {
        // $products = App\Product::find($id, array('id', 'name', 'price'));
        $map_info = array(
            'map_name' => $map_name,
            'floors' => 2,
            'floor_info' => [
              [
                'floor' => 1,
                'name' => 'room',
                'map_size' => [1298,729],
                'origin_point' => [45,40],
                'physicsSize' => '12x5.9m',
                'map_url' => '/images/room.png',
                'map_areas' => [
                  ['door',[30,720]],
                  ['platform',[30,360]]
                ]
              ],
              [
                'floor' => 2,
                'name' => 'lib',
                'map_size' => [793,667],
                'origin_point' => [10,10],
                'physicsSize' => '30x30m',
                'map_url' => '/images/lib.png',
                'map_areas' => [
                  ['A1', [100,100]],
                  ['A2', [100,200]],
                  ['502', [700,200]],
                  ['510',[500,400]],
                  ['center',[400,400]],
                  ['513',[400,700]]
                ]
              ]
            ]
        );
    }
    return Response::json(array(
            'error' => false,
            'status_code' => 200,
            'map_info' => $map_info,
        ));
});
