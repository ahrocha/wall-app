<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use App\Providers\RouteServiceProvider;

class AuthenticationTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_user_can_login()
    {
        $response = $this->postJson('/login', ['email' => 'ahrocha@gmail.com', 'password' => 'secret123']);

        $this->assertAuthenticated();

        $response->assertStatus(200)
        ->assertJson([
            'two_factor' => false,
        ]);

        $response = $this->get('/api/user');
        $response->assertStatus(200)
        ->assertJsonStructure([
                'id',
                'name',
                'email',
                'created_at',
                'updated_at',
        ]);

        $response = $this->post('/logout');
        $response->assertStatus(302);
        
        $response = $this->get('/api/user');
        $response->assertStatus(401);

    }
}
