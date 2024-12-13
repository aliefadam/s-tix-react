<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menus = [
            [
                "type" => "title",
                "name" => "Menu",
                "slug" => "menu",
                "role" => json_encode(["super-admin", "vendor"]),
            ],
            [
                "type" => "link",
                "name" => "dashboard",
                "url" => "admin.dashboard",
                "icon" => "fa-regular fa-house",
                "slug_id" => "menu",
                "role" => json_encode(["super-admin", "vendor"]),
            ],
            [
                "type" => "link",
                "name" => "vendor",
                "url" => "admin.vendor.index",
                "icon" => "fa-regular fa-users",
                "slug_id" => "menu",
                "role" => json_encode(["super-admin"]),
            ],
            [
                "type" => "link",
                "name" => "users",
                "url" => "admin.users.index",
                "icon" => "fa-regular fa-users",
                "slug_id" => "menu",
                "role" => json_encode(["super-admin"]),
            ],
            [
                "type" => "title",
                "name" => "Event",
                "slug" => "event",
                "role" => json_encode(["vendor"]),
            ],
            [
                "type" => "link",
                "name" => "event",
                "url" => "admin.event.index",
                "icon" => "fa-regular fa-calendar-days",
                "slug_id" => "event",
                "role" => json_encode(["vendor"]),
            ],
            [
                "type" => "link",
                "name" => "voucher",
                "url" => "admin.voucher.index",
                "icon" => "fa-regular fa-ticket",
                "slug_id" => "event",
                "role" => json_encode(["vendor"]),
            ],
            // [
            //     "type" => "title",
            //     "name" => "User",
            //     "slug" => "user",
            //     "role" => json_encode(["super-admin"]),
            // ],
            [
                "type" => "title",
                "name" => "Transaction",
                "slug" => "transaction",
                "role" => json_encode(["vendor", "super-admin"]),
            ],
            [
                "type" => "link",
                "name" => "transaction",
                "url" => "admin.transaction.index",
                "icon" => "fa-regular fa-cart-shopping",
                "slug_id" => "transaction",
                "role" => json_encode(["vendor", "super-admin"]),
            ],
            [
                "type" => "title",
                "name" => "Settings",
                "slug" => "settings",
                "role" => json_encode(["super-admin"]),
            ],
            [
                "type" => "link",
                "name" => "website",
                "url" => "admin.website.index",
                "icon" => "fa-regular fa-globe",
                "slug_id" => "settings",
                "role" => json_encode(["super-admin"]),
            ],
        ];

        foreach ($menus as $menu) {
            Menu::create($menu);
        }
    }
}
