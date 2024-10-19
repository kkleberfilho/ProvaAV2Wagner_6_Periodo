<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        $email = 'john@example.com';

        // Verificar se o usuário já existe
        $user = User::where('email', $email)->first();

        if (!$user) {
            User::create([
                'name' => 'John Doe',
                'email' => $email,
                'password' => Hash::make('password123'),
            ]);
        }

        $email2 = 'jane@example.com';

        $user2 = User::where('email', $email2)->first();

        if (!$user2) {
            User::create([
                'name' => 'Jane Doe',
                'email' => $email2,
                'password' => Hash::make('password123'),
            ]);
        }
    }
}
