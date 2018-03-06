<center>
  <h1>Multi-Modal Geometric Learning for Grasping and Manipulation</h1>
  <p><a target="_blank" href="http://www.cs.columbia.edu/~jvarley/">Jacob Varley <span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a>, <a target="_blank" href="http://davidwa.tkins.me">David Watkins-Valls <span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a>, and <a target="_blank" href="http://www.cs.columbia.edu/~allen/">Peter Allen <span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a><br>
  </p><p>
  </p><p style="color:#aaa; margin-bottom: 20px">Columbia University Robotics Group</p>
</center>

### Abstract

This work provides an architecture that incorporates depth and tactile information to create rich and accurate 3D models useful for robotic manipulation tasks. This is accomplished through the use of a 3D convolutional neural network (CNN).  Offline, the network is provided with both depth and tactile information and trained to predict the object's geometry, thus filling in regions of occlusion.  At runtime, the network is provided a partial view of an object and tactile information is acquired to augment the captured depth information. The network can then reason about the object's geometry by utilizing both the collected tactile and depth information. We demonstrate that even small amounts of additional tactile information can be incredibly helpful in reasoning about object geometry. This is particularly true when information from depth alone fails to produce an accurate geometric prediction.  Our method is benchmarked against and outperforms other visual-tactile approaches to general geometric reasoning.  We also provide experimental results comparing grasping success with our method.

<img src="_images/TrainingDataFull" alt="Training Data Example" class="inline"/>

### Completion Examples

We created a database of training examples, completions of those examples, and grasps planned on the objects. Link coming soon. 

### Video

<iframe width="854" height="480" src="https://www.youtube.com/embed/R98JEqEps_U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Downloads

#### Source code + Trained Model (Keras 2.0)

- ROS workspace with setup instructions: Coming soon
- Trained Model: Coming soon

#### Training data

- 726 pointclouds for each of 590 objects, as well as the 428,340 corresponding 40<sup>3</sup> aligned x,y training example pairs from the Grasp Database: Coming soon
- 726 pointclouds for 18 objects, as well as the corresponding 40<sup>3</sup> aligned x,y training example pairs from the YCB Dataset: Coming soon
- Combined grasp_database and ycb as binvox files rather than .pcd. Much smaller download: Coming Soon

#### Ground Truth Meshes
The ground truth meshes are not ours to distribute. To get them, please register at: 
- Grasp Database: [http://grasp-database.dkappler.de/](http://grasp-database.dkappler.de/)
- YCB Database: [http://rll.eecs.berkeley.edu/ycb/](http://rll.eecs.berkeley.edu/ycb/)

#### Citation
This work was submitted to IROS 2018. [submission.pdf](_files/submission.pdf)

