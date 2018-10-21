# aws-load-balance-node-servers-on-ecs

## What I want to achieve

Use AWS service to design a web server infrastructure where a has a external facing URI/endpoint and forwards incoming HTTP request to 2 Node.js web servers. The two Node servers are expected to run in containers. Once the user visits the URI, the web page shows how many requests are processed by each server. It can be as simple as follows:

```
Web server 1 IP:    19999 requests processed
Web server 2 IP:    33333 requests processed
```

## TODO's

I haven't been able to find the right CloudWatch metrics to query the count of requests processed by each server. I only found the average and sum of requests.

## Steps I did

1. **AWS**: Sign in to Console
2. **ECS**: Set up cluster of two instances (region: us-west-2, type: t2.micro)
3. **Node.js**: Run Node http server on instances (customer port 3000, server1.js & server2.js)
4. **ELB**: Create Application Load Balancer and Target Group (listens on HTTP port 80)
5. **Verifiy**: Visit Load Balancer's DNS address and see if it routes to either server alternatively
6. **CloudWatch**: Define application metrics to be monitored (RequestCountPerTarget vs. RequestCount)

## Demo

Visit load balancer DNS @ [http://ecs-load-balancer-1166260154.us-west-2.elb.amazonaws.com/](http://ecs-load-balancer-1166260154.us-west-2.elb.amazonaws.com/)

## Screenshots

### step 2

![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/blob/master/screenshots/ecs-cluster-2-instances.PNG "step2")

### step 3

![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/blob/master/screenshots/node-server1.PNG "step3.1")
![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/blob/master/screenshots/node-server2.PNG "step3.2")

### step 4

![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/blob/master/screenshots/ecs-load-balancer.PNG "step4.1")
![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/blob/master/screenshots/ecs-target-group-2-targets.PNG "step4.2")

### step 5

![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/blob/master/screenshots/alb-to-server1.PNG "step5.1")
![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/blob/master/screenshots/alb-to-server2.PNG "step5.2")

### step 6

![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/blob/master/screenshots/aws-cloud-watch.PNG "step6")

## References

* Setting Up Node.js on an Amazon EC2 Instance
[https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)

* Launching an Amazon ECS Container Instance
[https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html)

* Creating an Application Load Balancer
[https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-application-load-balancer.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-application-load-balancer.html)


## High-Level Diagrams

* EC2 Container Service
[https://github.com/awslabs/amazon-ecs-nodejs-microservices/tree/master/2-containerized](https://github.com/awslabs/amazon-ecs-nodejs-microservices/tree/master/2-containerized)

* AWS APPLICATION LOAD BALANCER (ALB) 
[https://www.bogotobogo.com/DevOps/AWS/aws-ELB-ALB-Application-Load-Balancer-ECS.php](https://www.bogotobogo.com/DevOps/AWS/aws-ELB-ALB-Application-Load-Balancer-ECS.php)

* What is Amazon Elastic Container Service?
[https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)