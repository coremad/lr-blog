<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> lite blog(no gui no cry) </title>
    <link href="{{mix('css/lite.css')}}" rel="stylesheet" type="text/css">
</head>

<body>
<div id="header">
    <h2 style="text-align: center"> Laravel and React lite blog </h2>
</div>
<div id="root"></div>
<div id="footer">
    <br />
    This is The End (footer)
</div>
<script src="{{mix('js/lite.js')}}"></script>
</body>
</html>
