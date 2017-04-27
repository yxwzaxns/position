@extends('layouts.home')

<style>
    img {
        max-width: 100%; /* This rule is very important, please do not ignore this! */
    }
</style>
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    <img id="image" src="{{ asset('images/map.png') }}">
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
