# Personal Website

This is the code for my personal website. It uses the MEAN stack
(Mongo, Express, Angular, Node.js), and is currently deployed on DigitalOcean App Platform.
Check it out at https://nathanielwarner.net

## Front-end
The front-end for the application, contained in `ng-frontend`,
 is designed with Angular.
There is a component for each of the pages, with sub-components
for certain pages. (For example, the "single experience" component
which serves as a template that is reused on the "Experience" page.)

Services are used to communicate with the back-end, for example
to submit the contact form.

Currently, the most interactive page is the Code Completion demo
(based on a machine learning model),
which makes a request to the back-end, so that the model does
not need to be downloaded by the client.

The front-end components are compiled and minified before being
served to users by the back-end.

## Back-end
The back-end, contained in `express-server`, utilizes Express
to serve the application and respond to user-generated requests.
Those requests currently take two forms:
- Code Completion and Summarization demo requests: Upon receiving the request, 
the backend makes a request to the [code completion service](https://github.com/nathanielwarner/transformer_lang_model) or
the [code summarization service](https://github.com/nathanielwarner/code_summarization_transformer), which run the respective models.
- Contact form submissions: These are saved in a Mongo database.

## Running Locally
Copy `.env.example` to `.env`, and modify values as needed.
### With Docker
```
docker build .
docker run -p 3000:3000 --env-file .env <image_id>
```

### Without Docker
You'll need [nodenv](https://github.com/nodenv/nodenv) installed, or you can manually install
the correct version of Node.js as specified in `.node-version`.
```
cd ng-frontend
npm install
npm run build
cd ../express-server
npm install
<ENV_VARS_FROM_.ENV> npm start
```
