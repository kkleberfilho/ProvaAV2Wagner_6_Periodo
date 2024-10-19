<?php

// database/seeders/ProductSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        Product::create([
            'name' => 'Produto 1',
            'description' => 'Descrição do Produto 1',
            'price' => 29.99,
        ]);

        Product::create([
            'name' => 'Produto 2',
            'description' => 'Descrição do Produto 2',
            'price' => 49.99,
        ]);

        Product::create([
            'name' => 'Produto 3',
            'description' => 'Descrição do Produto 3',
            'price' => 99.99,
        ]);
    }
}
