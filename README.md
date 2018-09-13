---
layout: default
---

<center>
  <!-- <h1>Multi-Modal Geometric Learning for Grasping and Manipulation</h1> -->
  <p><a target="_blank" href="http://www.cs.columbia.edu/~jvarley/">Jacob Varley<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a>, <a target="_blank" href="http://davidwa.tkins.me">David Watkins-Valls<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a>, and <a target="_blank" href="http://www.cs.columbia.edu/~allen/">Peter Allen<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a><br>
  </p><p>
  </p><p style="color:#aaa; margin-bottom: 20px">Columbia Robotics Lab</p>
</center>

<hr />

### Abstract

This work provides an architecture that incorporates depth and tactile information to create rich and accurate 3D models useful for robotic manipulation tasks. This is accomplished through the use of a 3D convolutional neural network (CNN).  Offline, the network is provided with both depth and tactile information and trained to predict the object's geometry, thus filling in regions of occlusion.  At runtime, the network is provided a partial view of an object and tactile information is acquired to augment the captured depth information. The network can then reason about the object's geometry by utilizing both the collected tactile and depth information. We demonstrate that even small amounts of additional tactile information can be incredibly helpful in reasoning about object geometry. This is particularly true when information from depth alone fails to produce an accurate geometric prediction.  Our method is benchmarked against and outperforms other visual-tactile approaches to general geometric reasoning.  We also provide experimental results comparing grasping success with our method.

<img src="{{ '/assets/images/TrainingDataFull.png?v=' | append: site.github.build_revision | relative_url }}" alt="Training Data Example" class="inline"/>

<hr />

### Completion Examples

We created a database of training examples and completions of those examples. See completions [here]({{ site.url }}/completions_view/). 

<hr />

### Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/mz3gVnn18PU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<hr />

### Downloads

#### Source code + Trained Model (Keras 2.0)

- ROS workspace with setup instructions: [https://github.com/CRLab/pc_scene_completion_ws](https://github.com/CRLab/pc_scene_completion_ws)
- Trained Model: [here](https://drive.google.com/file/d/158XCw3Me8X1dtHNT3ASkb9qRpNfO0vLt/view?usp=sharing)

#### Training data

- 726 pointclouds for each of 608 objects, as well as the 428,340 corresponding 40<sup>3</sup> aligned x,y training example pairs from the Grasp and YCB Databases. [here](https://drive.google.com/open?id=1NJX6wSDQBHkJZwX4l-JyfZyatb6bsePX)


#### Ground Truth Meshes
The ground truth meshes are not ours to distribute. To get them, please register at: 
- Grasp Database: [http://grasp-database.dkappler.de/](http://grasp-database.dkappler.de/)
- YCB Database: [http://rll.eecs.berkeley.edu/ycb/](http://rll.eecs.berkeley.edu/ycb/)

<hr />

### Citation
This work was submitted to IROS 2018. Arxiv link [here](https://arxiv.org/abs/1803.07671)

