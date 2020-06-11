const express = require('express');
const compression = require('compression');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const dbName = process.env.MONGO_DATABASE;

const dbConnUrl = "mongodb+srv://" + process.env.MONGO_USERNAME + ":" + process.env.MONGO_PASSWORD
    + "@" + process.env.MONGO_SERVER + "/" + dbName + "?retryWrites=true&w=majority";

MongoClient.connect(dbConnUrl, {
    useNewUrlParser: true
}).then(client => {
    console.log("Connected to db");
    const db = client.db(dbName);

    const contSubColl = db.collection('contact-submissions');

    const port = 3000;
    const app_folder = '../ng-frontend/dist/ng-frontend';

    const app = express();
    app.use(compression());
    app.use(bodyParser.json());

    app.get('*.*', express.static(app_folder, {maxAge: '1y'}));

    app.get('*', (req, res) =>
        res.status(200).sendFile(`/`, {root: app_folder})
    );

    app.post('/api/contactSubmission', (req, res) => {
        contSubColl.insertOne(req.body)
            .then(result => {
                res.status(200).send(result);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    })

    app.listen(port, () => console.log(`Express server listening at localhost:${port}`))

})
.catch(console.error);