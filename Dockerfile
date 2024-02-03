FROM node:16
COPY ./ng-frontend /application/ng-frontend/
RUN cd /application/ng-frontend && npm install && npm run build-prod
COPY ./express-server /application/express-server/
RUN cd /application/express-server && npm install
EXPOSE 3000
CMD ["/bin/bash", "-c", "cd /application/express-server && npm start"]
