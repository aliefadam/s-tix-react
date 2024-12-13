<?php

namespace App\Http\Middleware;

use App\Models\Visitor;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LogVisitor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->session()->has('visitor_logged')) {
            Visitor::create([
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'visited_at' => now(),
            ]);
            $request->session()->put('visitor_logged', true);
        }
        return $next($request);
    }
}
