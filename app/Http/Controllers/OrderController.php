<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order; // Certifique-se de importar o modelo Order

class OrderController extends Controller
{
    public function store(Request $request)
    {
        // Criar um novo pedido
        $order = new Order();
        $order->user_id = auth()->id();  // ou $order->user()->associate(auth()->user());
        $order->total = 100.00; // exemplo de valor total, você pode pegar esse valor do $request
        $order->save();

        return response()->json([
            'message' => 'Pedido criado com sucesso!',
            'order' => $order
        ], 201);
    }
}
