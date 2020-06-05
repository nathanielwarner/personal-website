FROM node:12
RUN npm install -g @angular/cli
WORKDIR /application/ng-frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN ng build --configuration=production
