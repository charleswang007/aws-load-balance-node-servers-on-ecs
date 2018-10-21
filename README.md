# aws-load-balance-node-servers-on-ecs

## What I want to achieve

Use AWS service to design a web server infrastructure where a has a external facing URI/endpoint and forwards incoming HTTP request to 2 Node.js web servers. The two Node servers are expected to run in containers. Once the user visits the URI, the web page shows how many requests are processed by each server. It can be as simple as follows:

```
Web server 1 IP:    19999 requests processed
Web server 2 IP:    33333 requests processed
```

## Steps I did

1. AWS: Sign in to Console
2. ECS: Set up cluster of two instances
3. Node.js: Run Node http server on instances (customer port 3000)
4. ELB: Create Application Load Balancer and Target Group
5. Verifiy: Visit Load Balancer's DNS Name and see if it routes to either server correctly
6. CloudWatch: Define application metrics to be monitored

## Screenshots

### step 2

![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/screenshots/ecs-cluster-2-instances.png "step2")

### step 3

![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/screenshots/node-server1.png "step3.1")
![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/screenshots/node-server2.png "step3.2")

### step 4

![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/screenshots/ecs-load-balancer.png "step4.1")
![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/screenshots/ecs-target-group-2-targets.png "step4.2")

### step 5

![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/screenshots/alb-to-server1.png "step5.1")
![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/screenshots/alb-to-server2.png "step5.2")

### step 6

![alt text](https://github.com/charleswang007/aws-load-balance-node-servers-on-ecs/screenshots/aws-cloud-watch.png "step6")

## High-Level Diagrams