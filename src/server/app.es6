import express      from 'express';
import path         from 'path';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import http         from 'http';

import { initializeDb } from './database';
import api from './api';

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + '/../client'));


initializeDb(function() {
    app.use('/', api());
    app.server.listen(3000, () => {
        console.log('Cooking shelf server is listening on port 3000!');
    });
},
err => {
    console.log(err);
    return;
});

export default app;