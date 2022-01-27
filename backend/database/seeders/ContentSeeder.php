<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Post;
use Carbon\Carbon;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $userId = User::insertGetId([
            'name' => 'Benjamin Franklin',
            'email' => 'benjaminfranklin@gmail.com',
            'password' => Hash::make('password'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        Post::insert([
            'user_id' => $userId,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'post' => 'Tell me and I forget, teach me and I may remember, involve me and I learn.',
        ]);

        $userId = User::insertGetId([
            'name' => 'Albert Einstein',
            'email' => 'alberteinstein@gmail.com',
            'password' => Hash::make('password'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        Post::insert([
            'user_id' => $userId,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'post' => 'Wisdom is not a product of schooling but of the lifelong attempt to acquire it.',
        ]);
        Post::insert([
            'user_id' => $userId,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'post' => 'Any fool can know. The point is to understand.',
        ]);

        $userId = User::insertGetId([
            'name' => 'Aristotle',
            'email' => 'aristotle@gmail.com',
            'password' => Hash::make('password'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        Post::insert([
            'user_id' => $userId,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'post' => 'Those who know, do. Those that understand, teach.',
        ]);

        $userId = User::insertGetId([
            'name' => 'Mahatma Gandhi',
            'email' => 'mahatmagandhi@gmail.com',
            'password' => Hash::make('password'),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        Post::insert([
            'user_id' => $userId,
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'post' => 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        ]);
    }
}
