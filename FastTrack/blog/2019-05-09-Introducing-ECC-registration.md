---
author: Benjamin Gallois
authorTitle: Fast Track creator
authorURL: https://github.com/bgallois
authorImageURL: https://avatars0.githubusercontent.com/u/23381534?s=400&u=d95b3af191c247daa425285a0b1847e2326ca7dc&v=4
title: Introducing ECC registration
---

Fast Track is now integrating a new method of registration: the so-called ECC registration. This method was developed by <a href="http://xanthippi.ceid.upatras.gr/people/evangelidis/george_files/PAMI_2008.pdf">Georgios D. Evangelidis and Emmanouil Z. Psarakis</a>. It consists of maximizing the Enhanced Correlation Coefficient function to find the parameters that described the best transformation between the two images. This is done by solving iteratively a sequence of nonlinear optimization problems.

This method has several advantages:
- Invariant with respect to photometric distortion, ie, in contrast, and brightness changes.
- The optimization problem solution is linear, ie, the computing time is acceptable.
- This method performs well in noisy conditions.

For the moment, only one mode of registration is integrated into Fast Track. The euclidian mode can correct the translation and rotation of the image. For example, this mode can correct small camera vibrations.

Currently in testing, this registration mode will be available in the 4.8.0 version. You can test this feature in the nightly release or in the dev branch on the GitLab.

