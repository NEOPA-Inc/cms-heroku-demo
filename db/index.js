const parseDbUrl = require("parse-database-url");
var pgp = require("pg-promise")({});
var express = require('express');
var app = express();

let db;
let dbConfig;
let config = require('../config.json')[app.get('env')];

if(app.get('env') == 'production') {
	dbConfig = parseDbUrl(process.env.DATABASE_URL);
} else {
	dbConfig = parseDbUrl(config.postgres.url);
}
console.log('db info: %o', dbConfig);
db = pgp({
	host: dbConfig.host,
	port: dbConfig.port,
	database: dbConfig.database,
	user: dbConfig.user,
	password: dbConfig.password,
	ssl: true,
	connectionTimeoutMillis: 10000,
	idleTimeoutMillis: 20000,
	max: 10,
	min: 1
});

module.exports = {
    /**
     * 記事データを取得する
     * @returns info list
     */
    getAll() {
        return db.any('SELECT * FROM information__c ORDER BY id DESC');
    }
}