# aws-load-balance-node-servers-on-ecs

## What I want to achieve

Use AWS service to design a web server infrastructure where a has a external facing URI/endpoint and forwards incoming HTTP request to 2 Node.js web servers. The two Node servers are expected to run in containers. Once the user visits the URI, the web page shows how many requests are processed by each server. It can be as simple as follows:

```
Web server 1 IP:    19999 requests processed
Web server 2 IP:    33333 requests processed
```

## Steps I did

1. **AWS**: Sign in to Console
2. **ECS**: Set up cluster of two instances (region: us-west-2, type: t2.micro)
3. **Node.js**: Run Node http server on instances (customer port 3000, server1.js & server2.js)
4. **ELB**: Create Application Load Balancer and Target Group (listens on HTTP port 80)
5. **Verifiy**: Visit Load Balancer's DNS Name and see if it routes to either server alternatively
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

## Important Notes

## High-Level Diagrams