<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use App\Models\Post;
use App\Providers\RouteServiceProvider;

class SimpleTest extends TestCase
{
    /**
     *
     * @return void
     */
    public function test_guest_can_list_posts()
    {

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->get('/api/post');
        $response->assertStatus(200)
            ->assertJsonStructure([[
                'id',
                'post',
                'user_id',
                'created_at',
                'updated_at',
            ]]);
    }

    /**
     *
     * @return void
     */
    public function test_user_login_and_navigate()
    {
        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->postJson('/login', ['email' => 'benjaminfranklin@gmail.com', 'password' => 'secret123']);

        $this->assertAuthenticated();

        $response->assertStatus(200)
            ->assertJson([
                'two_factor' => false,
            ]);

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->get('/api/user');
        $response->assertStatus(200)
            ->assertJsonStructure([
                'id',
                'name',
                'email',
                'created_at',
                'updated_at',
            ]);

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->postJson('/api/post', [
            'post' => 'no random post text with random numbers ' . rand(1111, 99999)
        ]);
        $postIdTest = $response->json()['id'];
        $response->assertStatus(201);

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->get('/api/post');
        $response->assertStatus(200)
            ->assertJsonStructure([[
                'id',
                'post',
                'user_id',
                'created_at',
                'updated_at',
            ]]);

        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->postJson('/logout');
        $response->assertStatus(204);
sleep(10);
        Post::destroy($postIdTest);
    }

    /**
     *
     * @return void
     */
    public function test_guest_cant_see_profile()
    {
        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->get('/api/user');
        $response->assertStatus(401);
        $response->assertJson([
            'message' => "Unauthenticated.",
        ]);
    }

    /**
     *
     * @return void
     */
    public function test_guest_cant_post()
    {
        $response = $this->withHeaders([
            'Accept' => 'application/json'
        ])->postJson('/api/post', [
            'post' => 'no random post text with random numbers ' . rand(1111, 99999)
        ]);
        $response->assertStatus(401);
        $response->assertJson([
            'message' => "Unauthenticated.",
        ]);
    }
}
