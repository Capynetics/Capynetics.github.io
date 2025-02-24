---
layout: new_post
title:  "Quick and dirty ATX bench power supply"
image: assets/2022-03-05-Quick-and-dirty-ATX-bench-power-supply.jpeg
date:   2022-03-05 
categories: General
---

In this small post, I show you the steps I took in building my own quick and dirty ATX bench power supply with some old components I had laying around. First of all, I built the voltage regulating circuit according to the [datasheet](https://www.ti.com/lit/ds/symlink/lm317.pdf?ts=1646459350494&ref_url=https%253A%252F%252Fwww.google.com%252F) of the LM317 I intended to use. Then I added the voltmeters as visual indicators.

{:refdef: style="text-align: center;"}
![Image]({{ site.baseurl }}/assets/Testing_the_voltage_regulating_circuit.png)
{: refdef}
{:refdef: style="text-align: center;"}
*Testing the voltage regulating circuit*
{: refdef}

Once everything was working as expected I tried to make it all fit inside the ATX power supply original carcass. This was a bit hard because I had used a ridiculously big heat sink for the voltage regulators.

{:refdef: style="text-align: center;"}
![Image]({{ site.baseurl }}/assets/Assembly_process1.png)
{: refdef}
{:refdef: style="text-align: center;"}
*Assembly process 1*
{: refdef}

{:refdef: style="text-align: center;"}
![Image]({{ site.baseurl }}/assets/Assembly_process2.png)
{: refdef}
{:refdef: style="text-align: center;"}
*Assembly process 2*
{: refdef}

The final result, as you can see in the featured image of this article up top, wasn't beautiful. Nonetheless, I have been using it for quite some time now and my quick and dirty ATX bench power supply works just fine.
