<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));
if (file_exists($maintenance = __DIR__ . env("MAINTENANCE_DIR", '/../storage/framework/maintenance.php'))) {
    require $maintenance;
}
require __DIR__ . env("AUTOLOAD_DIR", '/../vendor/autoload.php');
(require_once __DIR__ . env("APP_DIR", '/../bootstrap/app.php'))
    ->handleRequest(Request::capture());
