<?php

// database/seeders/OrderSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Order;

class OrderSeeder extends Seeder
{
    public function run()
    {
        // Assume que você tenha usuários criados anteriormente
        Order::create([
            'user_id' => 1,
            'total' => 129.97,
        ]);

        Order::create([
            'user_id' => 2,
            'total' => 59.99,
        ]);
    }
}
