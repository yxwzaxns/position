<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        DB::table('users')->insert([
            'name' => 'aong',
            'email' => 'yxwzaxns@gmail.com',
            'password' => bcrypt('1234'),
        ]);
    }
}
