<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => $request->user(),
            "notification" => $request->session()->get("notification"),
            "menu" => [
                "menu_title" => $this->getMenu()['menu_title'],
                "menu_link" => $this->getMenu()['menu_link'],
            ],
            "today" => today()->translatedFormat("l, d F Y") . " - " . date('H:i:s'),
        ];
    }

    public function getMenu()
    {
        $menu = [
            "menu_title" => [],
            "menu_link" => [],
        ];

        if (Auth::check()) {
            foreach (getMenuTitle() as $menu_title) {
                array_push($menu["menu_title"], $menu_title);
                foreach (getMenuLink($menu_title->slug) as $menu_link) {
                    array_push($menu["menu_link"], $menu_link);
                }
            }
        }

        return $menu;
    }
}
