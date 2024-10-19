<?php

// database/seeders/CategorySeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run()
    {
        Category::create(['name' => 'Categoria 1']);
        Category::create(['name' => 'Categoria 2']);
        Category::create(['name' => 'Categoria 3']);
    }
}
