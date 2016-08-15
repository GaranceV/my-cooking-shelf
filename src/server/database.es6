import config from './db_config';

const MongoClient = require('mongodb').MongoClient;
export let db;

export function initializeDb(callback, error) {
    MongoClient
    .connect('mongodb://' + config.username + ':' + config.password 
                        + '@' + config.address, (err, database) => {
        if (err) {
            error(err);
        }
        db = database;
        callback();
    });
}