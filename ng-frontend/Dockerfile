FROM node:12
RUN npm install -g @angular/cli
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
CMD ["ng", "build", "--watch"]

