const express = require('express');
const compression = require('compression');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const axios = require('axios');

const dbName = process.env.MONGO_DATABASE;

const dbConnUrl = "mongodb+srv://" + process.env.MONGO_USERNAME + ":" + process.env.MONGO_PASSWORD
    + "@" + process.env.MONGO_SERVER + "/" + dbName + "?retryWrites=true&w=majority";

const codeCompletionUrl = process.env.CODE_COMPLETION_URL;
const codeSummarizationUrl = process.env.CODE_SUMMARIZATION_URL;

MongoClient.connect(dbConnUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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
    });

    app.post('/api/codeCompletion', (req, res) => {
        axios.post(codeCompletionUrl, req.body.prompt, {
            headers: {
                'Content-type': 'text/plain',
                'Accept': 'text/plain'
            }
        })
            .then((value => {
                if (value.status === 200) {
                    const completion = value.data.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
                    res.status(200).send({completion: completion});
                } else {
                    res.status(500).send();
                }
            }))
            .catch(err => {
                console.error(err);
                res.status(500).send();
            });
    });

    app.post('/api/codeSummarization', (req, res) => {
        axios.post(codeSummarizationUrl, {in_code: req.body.code}, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((value => {
                if (value.status === 200) {
                    res.status(200).send({summarization: value.data.summary});
                } else {
                    res.status(500).send();
                }
            }))
            .catch(err => {
                console.error(err);
                res.status(500).send();
            });
    })

    app.listen(port, () => console.log(`Express server listening at port ${port}`))

})
.catch(console.error);
