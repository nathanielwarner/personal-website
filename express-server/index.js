const express = require('express');
const compression = require('compression');

const port = 3000;
const app_folder = 'ng-dist';

const app = express();
app.use(compression());


app.get('*.*', express.static(app_folder, {maxAge: '1y'}));

app.all('*', (req, res) => res.status(200).sendFile(`/`, {root: app_folder}));

app.listen(port, () => console.log(`Example app listening at localhost:${port}`))
