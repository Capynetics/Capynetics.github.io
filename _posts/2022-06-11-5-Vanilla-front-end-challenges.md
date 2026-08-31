---
layout: new_post
title:  "5 Vanilla front-end challenges"
author: Johnata Brayan
image: /home/user/Capynetics.github.io/_posts/2026-09-01-My-new-tool-for-visualising-path-finding-algorithms.md
date:   2022-06-11
categories: General
---

## Introduction

We live in a world where web development frameworks seem to appear and disappear faster than the seasons change. Even if you are using something modern today, you will probably need to refresh your fundamentals at some point. That is why it is always a good idea to revisit the basics, especially if you are just starting out. These five small challenges are a fun way to do exactly that, and I am challenging you to try them without leaning on a framework.

I am sure you could solve these with a single line of code using whatever library or tool you are used to, but that would miss the point. The goal here is to get back to plain HTML, CSS, and JavaScript and see how much you can do with the fundamentals. I also added my own simple implementations so you can compare approaches if you want.

## Madlibs

If you are not familiar with Mad Libs, it is a simple word game where you fill in blanks with words like verbs, adjectives, or nouns and then see them inserted into a story. The results are usually hilarious. For this challenge, the idea is to build a small interactive web app where the user enters the words and sees them replaced in the text automatically. The example below shows one possible approach.

<iframe width="100%" height="1000" src="//jsfiddle.net/eulomelo/2j503ptc/42/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest="" frameborder="0"></iframe>

## Simple calculator

This one is a classic for a reason. Building a calculator is one of those beginner exercises that feels almost too simple, but it still teaches a lot about structure, events, and user interaction. The example below is a basic four-operation calculator, but if you want a bigger challenge, you could turn it into a scientific calculator or even a graphing one.

<iframe width="100%" height="300" src="//jsfiddle.net/eulomelo/dLbqn1rv/124/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest="" frameborder="0"></iframe>

## Simple Clock

This challenge is not very flashy, but it is useful. Working with time and dates is one of those things that always ends up being more annoying than expected, which makes it a great exercise. If you want to make it more interesting, you can add a calendar, an alarm, or even a small agenda view.

<figure><iframe width="100%" height="300" src="//jsfiddle.net/eulomelo/6zqt8ko5/68/embedded/result/" allowfullscreen="allowfullscreen"></iframe></figure>

## Reading and interpreting  files

In this challenge, you read a text file with fictional soccer match data and then print the partial and final standings of a championship. The files begin with three numbers representing the number of teams, rounds, and games per round, followed by the team names. After that, the rounds are listed, each with the result of the matches in a simple format, and the file ends with a list of dates to search for. The example below shows what the input looks like.

{% highlight bash %}
4;3;2
Atlético-MG
Cruzeiro
Grêmio
Internacional
RODADA 1
25/10/2016;Internacional;0;Atlético-MG;2
26/10/2016;Cruzeiro;1;Grêmio;0
2RODADA 2
01/11/2016;Internacional;1;Grêmio;1
02/11/2016;Cruzeiro;2;Atlético-MG;2
RODADA 3
08/11/2016;Internacional;1;Cruzeiro;4
09/11/2016;Atlético-MG;2;Grêmio;0
26/10/2016
02/11/2016
{% endhighlight %}

Your program should print the results in a clear format: after each round, show the round number and the leaderboard with points, wins, goal difference, and goals scored for each team. Then print the results for each search query. If more than one match happens on the same day, each one should be listed on its own line. The leaderboard should be sorted by points, wins, goal difference, and goals scored in that order.

{% highlight bash %}
1
Atlético-MG 3 1 2 2
Cruzeiro 3 1 1 1
Grêmio 0 0 -1 0
Internacional 0 0 -2 0
2
Atlético-MG 4 1 2 4
Cruzeiro 4 1 1 3
Grêmio 1 0 -1 1
Internacional 1 0 -2 1
3
Cruzeiro 7 2 4 7
Atlético-MG 7 2 4 6
Grêmio 1 0 -3 1
Internacional 1 0 -5 2
26/10/2016;Cruzeiro;1;Grêmio;0
02/11/2016;Cruzeiro;2;Atlético-MG;2
{% endhighlight %}

The test cases are available on my [GitHub](https://github.com/Capynetics/Soccer-Games-Dataset). My implementation was intentionally simple and somewhat naive, and that is fine. You could spend much more time improving the sorting logic or the data handling if you want, and I would encourage that. As with the other challenges, the example implementation below should give you some ideas.

<figure><iframe width="100%" height="300" src="//jsfiddle.net/eulomelo/Luvwzg6y/316/embedded/result/" allowfullscreen="allowfullscreen"></iframe></figure>

## Maze generator

The final challenge is to generate a maze using Unicode characters. Try not to use HTML canvas, because that would make it too easy. Feel free to choose whatever maze-generation algorithm you like, and add a character that can be moved through the labyrinth.

<figure><iframe width="100%" height="700" src="//jsfiddle.net/eulomelo/20p6bqz9/219/embedded/result/" allowfullscreen="allowfullscreen"></iframe></figure>

## Conclusion

These challenges are simple on the surface, but they are great for sharpening the fundamentals and building confidence with plain web technologies. If you try even one of them, you will probably learn something useful that carries over to larger projects.

