[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/4finance/micro-infra-view?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# micro-infra-view
View to micro-infra-spring collaborators.

##Docker :
You can either fetch pre-build image from docker hub via 

```docker pull nklmish/4finance-micro-infra-view```

Or build docker image locally(useful for development purpose)

```docker build -t nklmish/4finance-micro-infra-view .```

Once docker image is installed locally, we need to deploy it on docker by executing

```docker run -i -t -d -p 3000:3000 nklmish/4finance-micro-infra-view```

Depending on docker installation, we can find **dockerIpAddress** using one of the following commands:

1. Linux : ```docker inspect <containerId>```
2. Boot2docker : ```boot2docker ip```
3. Docker Toolbox : ```docker-machine ip <machine>```

Open browser and type **dockerIpAddress:3000** (Note: replace dockerIpAddress with actual IP address allocated to docker ) 

## Manual Installation:
You can install everything locally on your machine by executing the following commands

```
npm install --global gulp # if needed
npm install --global bower # if needed

bower install

npm update

gulp serve
```

![](https://cloud.githubusercontent.com/assets/1497967/9237550/db33299a-414b-11e5-8911-37a99d48ad15.png)
