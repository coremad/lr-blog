<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;
use App\Models\Comment;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 50; $i++) {
            $article = Article::create([
                'title' => $faker->realText(rand(10, 64)),
                'content' => $faker->realText(rand(256, 2048)),
            ]);
            $com_num = rand(0, 27) - 20;
            if ($article->id && $com_num > 1) {
                for ($ci = 0; $ci < $com_num; $ci++) {
                    $comment = Comment::create([
                        'article_id' => $article->id,
                        'author_name' => $faker->name(),
                        'content' => $faker->realText(rand(10, 256)),
                    ]);
                }
            }
        }
    }
}
