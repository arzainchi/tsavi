<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            "name" => "Administrator",
            "access" => json_encode([
                "user" => [
                    "create" => true,
                    "update" => true,
                    "delete" => true,
                    "view" => true,
                ],
                "roles" => [
                    "create" => true,
                    "update" => true,
                    "delete" => true,
                    "view" => true,
                ],
                "parent" => [
                    "create" => true,
                    "update" => true,
                    "delete" => true,
                    "view" => true,
                ],
                "student" => [
                    "create" => true,
                    "update" => true,
                    "delete" => true,
                    "view" => true,
                ],
                "tentor" => [
                    "create" => true,
                    "update" => true,
                    "delete" => true,
                    "view" => true,
                ],
                "presence" => [
                    "create" => true,
                    "update" => true,
                    "delete" => true,
                    "view" => true,
                ],
                "invoice" => [
                    "create" => true,
                    "update" => true,
                    "delete" => true,
                    "view" => true,
                ],
            ]),
        ]);
    }
}
