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
3. ELB: Create Application Load Balancer
4. CloudWatch: Define application metrics to be monitored

## Screenshots

## High-Level Diagrams