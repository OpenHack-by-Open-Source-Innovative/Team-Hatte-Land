# Team-Hatte-Land : Parking Lot Space Detection Model

## Introduction
* Main Objective is to train and evaluate an object detection model to highlight the free vs. occupied parking spaces in a parking lot. 

* The trained model can be hosted in a server where it is used to run inference on a snapshot of a parking lot captured by a surveillance camera. 

* A visitor is able to check the availability of spaces in a particular parking lot through a mobile app which connects to the hosted server to receive current status of the parking lot : available space count & an image highlighting the available spaces.

### High level diagram
![High-level-diag](Diagrams\overview.png)

### Sequence diagram
![Seq-diag](Diagrams\sequence-diagram.png)

## Methodology
[Tensorflow Object Detection Api](https://github.com/tensorflow/models/tree/master/research/object_detection) is used to train a SSD-MobileNet-v2 model for a public dataset available at [Roboflow](https://universe.roboflow.com/new-workspace-kls82/parking-detection-c6ljm). The dataset consists of 10000 images of size 416 x 416 and it is split as 70% for training, 20% validation and 10% for testing. A cosine decay learning rate schedular is applied for training statring from base learning rate 0.01.

## Results

| Metric | @IoU | For-Area | For-MaxDets | Value |
|--------|------|----------|-------------|-------|
| Average Precision | 0.50 : 0.95 | all | 100 | 0.380 |
| Average Precision | 0.50 | all | 100 | 0.760 |
| Average Precision | 0.75 | all | 100 | 0.463 |
| Average Precision | 0.50 : 0.95 |small | 100 | -1.000 |
| Average Precision | 0.50 : 0.95 |medium | 100 | 0.358 |
| Average Precision | 0.50 : 0.95 |large | 100 | 0.650 |
| Average Recall | 0.50 : 0.95 | all | 1 | 0.350 |
| Average Recall | 0.50 : 0.95 | all | 10 | 0.483 |
| Average Recall | 0.50 : 0.95 | all | 100 | 0.483 |
| Average Recall | 0.50 : 0.95 | small | 100 | -1.000 |
| Average Recall | 0.50 : 0.95 | medium | 100 | 0.375 |
| Average Recall | 0.50 : 0.95 | large | 100 | 0.700 |

## Samples

![alt1](Server\Predictions\Pred1.png)

![alt1](Server\Predictions\Pred2.png)

![alt1](Server\Predictions\Pred3.png)