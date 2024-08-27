FROM public.ecr.aws/amazonlinux/amazonlinux:2023

# Change default to userid 2000
ARG UID=2000

#Update dnf repos
RUN dnf -y update

#Install SSH
RUN dnf -y install -y openssh-server
RUN dnf -y install openssh-clients

#Install Vim
RUN dnf -y install -y vim

#Install gcc-c++
RUN dnf -y install gcc-c++ make

#Install tar and gzip
RUN dnf -y install tar
RUN dnf -y install gzip

# Add docker-compose-wait tool to support waiting for MYSQL for continuous integration tests
ENV WAIT_VERSION 2.7.3
RUN curl -SL -o /wait https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait
RUN chmod +x /wait

# Make EFS directory for bulk actions and workdir using root
RUN mkdir -p /var/www/app

# Create nodeuser
RUN useradd -u $UID -s /bin/false -m nodeuser

# Set folder permissions
RUN chown nodeuser:nodeuser /var/www/app

# Set remainder of install as nodeuser
USER nodeuser

# Install NVM to manage Node
# NVM environment variables set and lock NODE LTS major version
ENV NVM_DIR /home/nodeuser/.nvm
ENV NODE_VERSION 20.16.0
RUN mkdir /home/nodeuser/.nvm

# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install NODE and NPM
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install global NPM packages
RUN npm install -g nodemon
RUN npm install -g mocha

# Set Working Directory
WORKDIR /var/www/app

# Copy app folder
COPY --chown=nodeuser:nodeuser . .

# Remove dev and prod envars
RUN rm .env
RUN rm .env.development
RUN rm .env.production
RUN rm build/production/secrets/production-parameters.json

#Install new modules
RUN npm install

#Set terminal options
ENV ENV="/home/nodeuser/.bashrc"
RUN echo 'export PS1="\[\e[0;32m\][${COMPOSE_PROJECT_NAME}] \w\$\[\e[0m\] "' >> /home/nodeuser/.bashrc
