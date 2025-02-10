---
layout: post
title:  "5 Vanilla front-end challenges"
date:   2022-06-11
categories: General
---

We live in a day and age where web development frameworks come and go as easily as the seasons. No matter what you are using today, in 5 years' time (or even less) you will need to update yourself. So, it is always a good idea to brush up on the basics. And if you are a beginner, it is even better. These 5 small challenges are ideas I came up with to do just that, and now I challenge you.

I am sure you can solve all of the next challenges with only one line of code using whatever framework, library, or API you are used to, but that is not the point here. Don't cheat. Try doing the next challenges using only vanilla HTML, CSS, and Javascript. Beyond the challenges' explanations, I added my own naive implementation. Good luck!

## Madlibs

If you don't know what a Madlibs is, it is a game where you choose randomly words based on their grammatical function (verbs, adjectives, nouns, etc) and then add them to a previously written text with the appropriate spaces. The end result is always comical.

In this challenge, I suggest you do an interactive web app where the user can input the words and see them substituted in the text automatically. Down below is an example of what it all could look like.

<iframe width="100%" height="1000" src="//jsfiddle.net/eulomelo/2j503ptc/42/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest="" frameborder="0"></iframe>

## Simple calculator

This challenge is so silly I am adding it here just because it is iconic. Making a calculator in whatever programming language you may be getting acquainted with is, in my humble opinion, almost like writing "hello world" on the screen. As you can see below, I just made one of those simple 4 operation calculators, but if you want a bigger challenge you can try making a scientific calculator, or even a graphing one.

<iframe width="100%" height="300" src="//jsfiddle.net/eulomelo/dLbqn1rv/124/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest="" frameborder="0"></iframe>

## Simple Clock

Again, nothing complicated to see here. I only added this challenge to the list because dealing with time is generally an annoying task. That said, you can always make it harder by adding other functionalities, like a calendar, an alarm, or even an agenda.

<figure><iframe width="100%" height="300" src="//jsfiddle.net/eulomelo/6zqt8ko5/68/embedded/result/" allowfullscreen="allowfullscreen"></iframe></figure>

## Reading and interpreting  files

In this challenge, you are responsible for reading a text file with fictitious data about soccer games and then printing the partial and final results of the championship. The files all start with three numbers stating the number of teams, rounds, and games per round (in that order), followed by a list with the names of the teams. Then the rounds are presented, first stating the number of it ("RODADA 1" meaning round 1 and so on), then the result of the matches in the shape: "(DD/MM/YY);team1;goalsOfTeam1;team2;goalsOfTeam2". Finally, the file finishes with a list of dates that should be searched and return the result of the match on that date. You can see an input example below.

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

Your program must write the solution to the screen in the following format: At the end of each round, the
round number must be printed in a line followed by the leaderboard with the points, victories, goal difference, and goals scored by each team. Finally, the results for each search performed must be listed. When more than one game takes place on the same day, the same pattern shown below must be followed, with each game appearing in a row. Do not forget to sort the leaderboard according to points, victories, goal difference, and goals scored in that order.

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

The test cases can be found on my [GitHub](https://github.com/Capynetics/Soccer-Games-Dataset). Again, I need to state that my implementation was naive. You can spend much more time than I did thinking about more optimized sorting algorithms or ways of retrieving stored information. Actually, I encourage it. As with all the previous challenges, down below you can check my implementation and get some ideas.

<figure><iframe width="100%" height="300" src="//jsfiddle.net/eulomelo/Luvwzg6y/316/embedded/result/" allowfullscreen="allowfullscreen"></iframe></figure>

## Maze generator

The final challenge is generating a maze with Unicode characters. Do not use HTML canvas, it would make things too easy. Feel free to choose whatever maze-generating algorithm you prefer. Also, add a "character" that can be controlled through the labyrinth.

<figure><iframe width="100%" height="700" src="//jsfiddle.net/eulomelo/20p6bqz9/219/embedded/result/" allowfullscreen="allowfullscreen"></iframe></figure>
