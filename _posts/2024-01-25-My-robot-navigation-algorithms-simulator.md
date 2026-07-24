---
layout: new_post
title:  "My robot navigation algorithms simulator"
author: Johnata Brayan
image: assets/2024-01-25-My-robot-navigation-algorithms-simulator/2024-01-25-My-robot-navigation-algorithms-simulator.png
date:   2024-01-25
categories: General
---

If you are curious about mobile robots, I recommend taking a look at my [online path-planning algorithms simulator](https://capynetics.github.io/assets/2024-01-25-My-robot-navigation-algorithms-simulator/pathsim/). It lets you test a few classic path-planning algorithms in different scenarios and see how they behave in practice. The available algorithms are:

- bug0
- bug1
- bug2
- wavefront
- RRT

After choosing an algorithm from the first dropdown and a scene from the second, you can click and drag the robot (the white ball) and the target (the red ball) to the positions you want. Once everything is set up, just press start and watch the robot try to reach the target using the selected algorithm.

For more information on the algorithm used in the simulator, I suggest the excellent book [Principles of Robot Motion](https://www.amazon.com.br/Principles-Robot-Motion-Algorithms-Implementations/dp/0262033275).

This website was the final project for a mobile robotics class I took during my electrical engineering degree, and it was a fun way to bring together the theory I had been learning. If you also want to see the robotics simulator I developed for my final-year thesis, you can check it out [here](https://uaibot.github.io/).