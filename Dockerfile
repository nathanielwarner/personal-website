FROM node:16
RUN npm install -g @angular/cli
COPY ./ng-frontend/package*.json /application/ng-frontend/
RUN cd /application/ng-frontend && npm install
COPY ./ng-frontend /application/ng-frontend/
RUN cd /application/ng-frontend && ng build --configuration=production
COPY ./express-server/package*.json /application/express-server/
RUN cd /application/express-server && npm install
COPY ./express-server /application/express-server/
EXPOSE 3000
CMD ["/bin/bash", "-c", "cd /application/express-server && npm start"]
