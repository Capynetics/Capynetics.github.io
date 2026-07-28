---
layout: new_post
title:  "Watering my plants with Arduino"
author: Johnata Brayan
image: assets/2022-03-24-Watering-my-plants-with-Arduino/2022-03-24-Watering-my-plants-with-Arduino.png
date:   2022-03-24
categories: General
---

## Introduction

My mom loves plants. Everywhere she goes she finds a way of making a garden out of thin air. So I should not have been surprised when a small forest appeared in my apartment as the weeks she stayed with me went by during the year. She has now left. I know she would feel disappointed if she did not find her plants next time she comes to pay me a visit, so in the meantime, I am an involuntary gardener. So, it is "automating boring tasks with Arduino time".

In this short post, I will share how I made a watering system for my mom's plants with Arduino, and how you can make one too.

## Hardware and assembly

For watering my plants with Arduino I started by gathering the necessary pieces. The project pieces are pretty straightforward. The Arduino is the brains of the project. In order to keep time, I am using a DS3231 real-time module. This way I can water the plants every day at the same time. To control water flow I am using a simple solenoid valve. To activate the solenoid valve I made an improvised relay module with a relay I had laying around. For debugging purposes, I added an LCD screen that states both the current time and valve activation time. The project was powered up by an old phone charger. The whole thing was embedded into a robust plastic box with an appropriate cutout for the display.

{:refdef: style="text-align: center;"}
![Image]({{ site.baseurl }}/assets/2022-03-24-Watering-my-plants-with-Arduino/watering_Project_diagram.png)
{: refdef}
{:refdef: style="text-align: center;"}
*Project diagram*
{: refdef}

After assembling the control box and verifying that it operated correctly, I moved all of the plants to the laundry room. There, I arranged them on a shelf and installed a water distribution tube that ran around the entire room. The flow of water through this tube was controlled by the solenoid valve described in the previous section.

Water was delivered from the main tube to each plant through very thin plastic tubing connected to the distribution line. Every plant had its own dedicated tube, with the end tied into a small knot to regulate the flow rate and allow water to drip gently into the pot. A short Blender animation illustrating the complete setup is shown below.

<div style="text-align: center;">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/k8tQSi8_C4E"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

## Programing the Arduino

The developed code is down below. Again, it is pretty straightforward. I just had some problems because both the screen and the DS3231 modules use I2C to communicate with the Arduino and some libraries were just not working well together. Thankfully, this [LCD library](https://github.com/fmalpartida/New-LiquidCrystal) and this [RTC library](https://github.com/rodan/ds3231) worked fine.

```cpp
#include <Wire.h>
#include <DS3231.h>
#include <LiquidCrystal_I2C.h>

DS3231 rtc(SDA, SCL);
LiquidCrystal_I2C lcd(0x27, 2, 1, 0, 4, 5, 6, 7, 3, POSITIVE);
Time t;

void setup()
{
  lcd.begin(16, 2);
  rtc.begin();
  pinMode(12, OUTPUT);
  digitalWrite(12, LOW);
  Serial.begin(9600);
}

int horaa = 18;
int minutoa = 0;

void loop()
{
  t = rtc.getTime();

  lcd.setBacklight(HIGH);

  lcd.setCursor(0, 0);
  lcd.print("hora: ");
  lcd.print(rtc.getTimeStr());

  lcd.setCursor(0, 1);
  lcd.print("alvo: ");
  lcd.print(horaa);
  lcd.print(":");

  if (minutoa < 10)
    lcd.print("0");

  lcd.print(minutoa);
  lcd.print(":00");

  if (t.hour == horaa && t.min == minutoa) {
    digitalWrite(12, HIGH);
  }

  if (t.hour == horaa && t.min == minutoa + 1) {
    digitalWrite(12, LOW);
  }

  delay(1000);
  lcd.clear();
}
```

## Final result

Finally, after some common problems with faulty wiring and bugs in the code, everything was working fine. You can see the assembly process and the final system working in the video next. If you like Arduino projects, maybe you will like my other stuff like this [Terminator sunnies](https://capynetics.github.io/general/2019/07/19/Terminator-sunnies.html) or this [XBOX controller hack](https://capynetics.github.io/general/2019/02/06/Hacking-an-Xbox-controller-to-build-an-immersive-VR-experience.html).

<div style="text-align: center;">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/XR52tPJNHFk"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>
