<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up():void
    {
//      Comment (поля: id, article_id, author_name, content, created_at)
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('article_id')->unsigned()->index()->nullable();
            $table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');
            $table->string('author_name');
            $table->text('content');
//            $table->timestamp('created_at', precision: 0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down():void
    {
        Schema::dropIfExists('comments');
    }
}
