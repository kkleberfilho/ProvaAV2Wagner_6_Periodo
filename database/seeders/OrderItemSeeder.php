<?php
// database/seeders/OrderItemSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\OrderItem;

class OrderItemSeeder extends Seeder
{
    public function run()
    {
        OrderItem::create([
            'order_id' => 1,
            'product_id' => 1,
            'quantity' => 1,
            'price' => 29.99,
        ]);

        OrderItem::create([
            'order_id' => 1,
            'product_id' => 2,
            'quantity' => 2,
            'price' => 49.99,
        ]);

        OrderItem::create([
            'order_id' => 2,
            'product_id' => 3,
            'quantity' => 1,
            'price' => 99.99,
        ]);
    }
}
