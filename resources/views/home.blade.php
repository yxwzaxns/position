@extends('layouts.home')

<style>
    img {
        max-width: 100%; /* This rule is very important, please do not ignore this! */
    }
</style>
@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-md-2">
            <div class="panel panel-default">
                <div class="panel-heading">Options</div>
                <div class="panel-body">
                    <table class="table" id="table">
                        <tr>
                            <th>k</th>
                            <th>v</th>
                        </tr>
                        <tr>
                            <td>x</td>
                            <td class="v">2</td>
                        </tr>
                        <tr>
                            <td>y</td>
                            <td class="v">2</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td class="v">2</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td class="v">2</td>
                        </tr>
                        <tr>
                            <td>rotate</td>
                            <td class="v">2</td>
                        </tr>
                        <tr>
                            <td>scaleX</td>
                            <td class="v">2</td>
                        </tr>
                        <tr>
                            <td>scaleY</td>
                            <td class="v">2</td>
                        </tr>
                        <tr>
                            <td>rate</td>
                            <td class="v">2</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    <img id="image" src="{{ asset('images/room.png') }}">
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="panel panel-default">
                <div class="panel-heading">Floor</div>
                <div class="panel-body">
                    <div class="list-group">
                        <a href="#" class="list-group-item disabled">
                            Cras justo odio
                        </a>
                        <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
                        <a href="#" class="list-group-item">Morbi leo risus</a>
                        <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                        <a href="#" class="list-group-item">Vestibulum at eros</a>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">Moving</div>

                        <div class="bin">
                            <div>
                                <button type="button" class="btn btn-default btn-lg demo" id="up">
                                    <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
                                </button>
                                <button type="button" class="btn btn-default btn-lg demo1" id="big">
                                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                                </button>
                            </div>


                            <div class="horzi">
                                <button type="button" class="btn btn-default btn-lg" id="left">
                                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                </button>
                                <button type="button" class="btn btn-default btn-lg" id="reset">
                                    <span class="glyphicon glyphicon-screenshot" aria-hidden="true"></span>
                                </button>
                                <button type="button" class="btn btn-default btn-lg" id="right">
                                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                </button>
                            </div>

                            <div class="">
                                <button type="button" class="btn btn-default btn-lg demo" id="down">
                                    <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                                </button>
                                <button type="button" class="btn btn-default btn-lg demo2" id="small">
                                    <span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                        {{--<img src="{{ asset('images/arrows.svg') }}" alt="">--}}

                        {{--<div class="btn-group " role="group">--}}
                            {{--<button type="button" class="btn btn-default">Up</button>--}}
                        {{--</div>--}}
                        {{--<br>--}}
                        {{--<div class="btn-group" role="group">--}}
                            {{--<button type="button" class="btn btn-default">Left</button>--}}
                            {{--<button type="button" class="btn btn-default">Reset</button>--}}
                            {{--<button type="button" class="btn btn-default">Right</button>--}}
                        {{--</div>--}}
                        {{--<br>--}}
                        {{--<div class="btn-group" role="group">--}}
                            {{--<button type="button" class="btn btn-default">Down</button>--}}
                        {{--</div>--}}
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
