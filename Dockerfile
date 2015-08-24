FROM    centos:centos6

MAINTAINER NklMish "nkl.msr@gmail.com"

RUN yum install -y epel-release

# Bundle app source
COPY . /micro-infra-view

RUN yum install -y  npm git tar bzip2
RUN cd /micro-infra-view;touch .npmignore; npm install bower -g --save-dev; npm install gulp -g --save-dev; bower install -y --allow-root;npm install;

EXPOSE 3000
EXPOSE 3001

WORKDIR "/micro-infra-view"
#ENTRYPOINT ["gulp serve:dist"]
CMD ["gulp", "serve"]
