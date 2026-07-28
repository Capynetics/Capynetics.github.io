---
layout: new_post
title:  "Quick and dirty ATX bench power supply"
author: Johnata Brayan
image: assets/2022-03-05-Quick-and-dirty-ATX-bench-power-supply/2022-03-05-Quick-and-dirty-ATX-bench-power-supply.jpeg
date:   2022-03-05 
categories: General
---

In this post, I am sharing a quick and practical build I made for a bench power supply using some old parts I had lying around. The idea was simple: make something useful without overthinking it. I started by building the voltage regulation circuit according to the LM317 datasheet and then added a couple of voltmeters so the output would be easier to monitor.

{:refdef: style="text-align: center;"}
![Image]({{ site.baseurl }}/assets/2022-03-05-Quick-and-dirty-ATX-bench-power-supply/QD_PS_circuit.png)
{: refdef}
{:refdef: style="text-align: center;"}
*Circuit I developed based on the datasheet*
{: refdef}

{:refdef: style="text-align: center;"}
![Image]({{ site.baseurl }}/assets/2022-03-05-Quick-and-dirty-ATX-bench-power-supply/Testing_the_voltage_regulating_circuit.png)
{: refdef}
{:refdef: style="text-align: center;"}
*Testing the voltage regulating circuit*
{: refdef}

Once the circuit was working properly, I tried to fit everything inside the original ATX power supply case. That part was a little awkward because the heat sink I used for the regulators turned out to be much larger than I expected.

{:refdef: style="text-align: center;"}
![Image]({{ site.baseurl }}/assets/2022-03-05-Quick-and-dirty-ATX-bench-power-supply/Assembly_process1.png)
{: refdef}
{:refdef: style="text-align: center;"}
*Assembly process 1*
{: refdef}

{:refdef: style="text-align: center;"}
![Image]({{ site.baseurl }}/assets/2022-03-05-Quick-and-dirty-ATX-bench-power-supply/Assembly_process2.png)
{: refdef}
{:refdef: style="text-align: center;"}
*Assembly process 2*
{: refdef}

In the end, this bench power supply is a very practical DIY solution for small electronics projects. It is inexpensive, easy to build, and works well when you need an adjustable output for light-to-moderate loads. That said, it is not a high-power or highly efficient supply, since the LM317 will dissipate a lot of heat when the output voltage is set far below the ATX input. For that reason, it is best suited for hobby use, prototyping, and occasional bench testing rather than heavy loads or long-duration high-current operation. With proper heatsinking, fusing, and safe enclosure of the ATX unit, it is a solid and useful project.
