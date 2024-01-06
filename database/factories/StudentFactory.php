<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'parent_id' => \App\Models\StudentParent::all()->random()->id,
            'name' => $this->faker->name(),
            'gender' => $this->faker->randomElement(['Laki-Laki', 'Perempuan']),
        ];
    }
}
