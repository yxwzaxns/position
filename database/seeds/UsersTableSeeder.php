<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('users')->insert([
          'name' => 'aong',
          'email' => 'yxwzaxns@gmail.com',
          'password' => bcrypt('1234'),
      ]);
    }
}
