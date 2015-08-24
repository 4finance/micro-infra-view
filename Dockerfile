FROM    centos:centos6

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

# Install Node.js and npm
RUN     yum install -y npm

# Bundle app source
COPY . /micro-infra-view

RUN yum install -y git tar bzip2
RUN cd /micro-infra-view;touch .npmignore; npm install bower -g --save-dev; npm install gulp -g --save-dev; bower install -y --allow-root;npm install;

RUN cd /micro-infra-view; gulp serve
