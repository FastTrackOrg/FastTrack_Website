---
author: Benjamin Gallois
authorTitle: Fast Track creator
authorURL: https://github.com/bgallois
authorImageURL: https://avatars0.githubusercontent.com/u/23381534?s=400&u=d95b3af191c247daa425285a0b1847e2326ca7dc&v=4
title: Introducing feature based registration
---

Fast Track is now integration feature-based registration alongside the other registration methods.
Feature-based registration consists of finding stable points in an image, these points are called key points and their descriptors. Then the same key points are found in the second image. From these key points, a homography is computed between the two images and the transformation is applied to all the pixels of the image to register.

## Feature automatic detection
Fast Track used an automatic algorithm to find the key points and the descriptors (~500) in the two images. This algorithm is called ORB feature detector and was brought up by Ethan Rublee, Vincent Rabaud, Kurt Konolige and Gary R. Bradski in 2011.

 ## Feature matching
The key points are matched pairwise between the two images using the Hamming distance. The Hamming distance measures the minimum number of errors that could transform one feature descriptor in another one.

##  Compute the homography
The homography is computed between the matching key points. It is possible that more than 30% of the features matched are incorrect. To reduce errors when finding the homography, Fast Track used Random Sample Consensus RANSAC estimation technic brought up by Fischler and Bolles in 1981.

This new registration method will be available in the 4.8 Fast Track release. It can be tested in the nightly build and on the dev branch on GitLab.

