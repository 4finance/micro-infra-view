FROM    centos:centos7

MAINTAINER NklMish "nkl.msr@gmail.com"

RUN yum install -y epel-release

# Bundle app source
COPY . /micro-infra-view

RUN yum install -y  npm git tar bzip2
RUN cd /micro-infra-view; touch .npmignore; npm install bower gulp -g; bower install -y --allow-root; npm install;

EXPOSE 3000
EXPOSE 3001

WORKDIR "/micro-infra-view"
CMD ["gulp", "serve"]
