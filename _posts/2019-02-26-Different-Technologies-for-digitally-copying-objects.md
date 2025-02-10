---
layout: post
title:  "Different Technologies for digitally copying objects"
date:   2019-02-26 
categories: General
---
Every day the line between real and digital gets thinner. Virtual reality, augmented reality, and 3D printing are greatly responsible for this change. In these brave new world, it is necessary, and also useful, to be able to digitize objects and to easily edit, share and replicate them. In this article, I will go through 3 technologies that I generally use when faced with such a challenge and that are very low cost. This is not going to be an in-depth tutorial about any of them, but a fast look and subsequent discussion about recommended uses and good practices.

# Digitally copying objects with 3d modeling

If the object you need to copy has a simple geometry and/or is neither too small or too untextured for photogrammetry or 3D scanning I strongly suggest you simply look at it and model it in a 3D modeling software. It may look difficult at first, but 3D modeling is much easier to learn than it looks. There are countless methods and softwares to achieve the intended result. I personally recommend Autodesk’s Fusion 360 and parametric modeling. I will illustrate the processes with the following example: One of the pieces of my chess board got lost and I needed a new one. The piece was very small, making 3D scanning difficult, and had no texture, making photogrammetry hard, but had a very simple geometry, so I simply 3D modeled a new one based on one of the non-missing pieces, as shown below.

{:refdef: style="text-align: center;"} 
![Image]({{ site.baseurl }}/assets/horse.gif) 
{: refdef}

{:refdef: style="text-align: center;"}
*3D modeling horse*
{: refdef}

As seen above, with only some commands and photographic reference I was able to quickly create a good enough copy of the piece. The 3D model was then exported to stereolithographic format and 3D printed. You can see and download the file below.

<div class="sketchfab-embed-wrapper"> <iframe title="Chess Horse" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/fafa037f76aa4a749f87c678aa769321/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/chess-horse-fafa037f76aa4a749f87c678aa769321?utm_medium=embed&utm_campaign=share-popup&utm_content=fafa037f76aa4a749f87c678aa769321" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Chess Horse </a> by <a href="https://sketchfab.com/setpointcapybara?utm_medium=embed&utm_campaign=share-popup&utm_content=fafa037f76aa4a749f87c678aa769321" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> setpointcapybara </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=fafa037f76aa4a749f87c678aa769321" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>

# Digitally copying objects with photogrammetry

If the object you are trying to copy has a geometry too complicated to be hand-copied in a 3D modeling software and you have no access to a 3D scanner a good technique I would recommend is photogrammetry. In this realm I recommend Meshroom. But remember, in order to photogrammetry to work properly you need an object that has a very textured surface. Things like stone or wooden structures are perfect. If you need to copy a shiny metallic or untextured object (like a human face) I wouldn’t recommend this technique. To exemplify this I will show how I used photogrammetry to digitally copy a statue in my university. This statue is a perfect example, it is big, has a rough surface and the pictures were taken on a cloudy day (avoiding hard shadows).

{:refdef: style="text-align: center;"} 
![Image]({{ site.baseurl }}/assets/venus.gif) 
{: refdef}

{:refdef: style="text-align: center;"}
*Going around Venus*
{: refdef}

After taking the pictures I uploaded them to the easy to use Meshroom interface. The only parameter I changed from the default options was “Max points” in the “Mesh” node (from 5000000 to 1000000). The whole reconstruction process took 3 hours on my computer, even with my NVIDIA GeForce GTX 950. Down below you can see the resulted file.

<div class="sketchfab-embed-wrapper"> <iframe title="Venus UFMG" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/70770c2f744541e0b350b9a591faf4ed/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/venus-ufmg-70770c2f744541e0b350b9a591faf4ed?utm_medium=embed&utm_campaign=share-popup&utm_content=70770c2f744541e0b350b9a591faf4ed" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Venus UFMG </a> by <a href="https://sketchfab.com/setpointcapybara?utm_medium=embed&utm_campaign=share-popup&utm_content=70770c2f744541e0b350b9a591faf4ed" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> setpointcapybara </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=70770c2f744541e0b350b9a591faf4ed" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>

# Digitally copying objects with 3d Scanning

3D scanners are very expensive. But if you are on a budget the XBOX 360 Kinect is a good substitute. It is a fairly capable 3D scanner when used with the Skanect software. You only need the proper adaptor, so you can plug the Kinect to Windows through USB. I use it every time I can scan something at home with complex or bio-inspired geometry. As a demonstration, I will copy a human bust. The process is quite simple, you plug the sensor to your PC, activate the software and then walk around the subject trying to catch as much detail as possible. Down below you can see the UI.

{:refdef: style="text-align: center;"} ![Image]({{ site.baseurl }}/assets/ScaningProcess.png) {: refdef}
{:refdef: style="text-align: center;"}
Scaning process
{: refdef}

Make sure you have enough space to walk around the subject and the sensor wire is not going to be a problem while you walk. It is also good to remember that this technique does not work well in shiny metallic surfaces. The whole process took about 15 minutes. You can see and download the resulted file below.

<div class="sketchfab-embed-wrapper"> <iframe title="Betty" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/d3fa90b3c49447279573c23b4b885034/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/betty-d3fa90b3c49447279573c23b4b885034?utm_medium=embed&utm_campaign=share-popup&utm_content=d3fa90b3c49447279573c23b4b885034" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Betty </a> by <a href="https://sketchfab.com/setpointcapybara?utm_medium=embed&utm_campaign=share-popup&utm_content=d3fa90b3c49447279573c23b4b885034" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> setpointcapybara </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d3fa90b3c49447279573c23b4b885034" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>

# Conclusion

A good summary of the technologies would be:

 - 3D Modeling is a good choice when the subject is simple enough or the other two options aren’t available.
 - Photogrammetry is a good choice to medium complex objects with rough surfaces when a 3D scanner is not available and time/processing power is not a problem.
 - 3D Scanning is a good choice to complex non-shiny objects of medium size.
 - Another good addition to the softwares and techniques demonstrated in this article are MeshLab and Autodesk’s Netfabb to post-process the resulted meshes.

Down below you can see a timelapse of the examples in this article being 3D printed.

<div style="text-align: center;">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/lEigBOboq-Q?si=Ow91ME5sdeZdyKcr"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

