const { Client } = require('pg');
const _ = require('lodash');

class PGClient {
    constructor() {
        var connectionString = "postgres://postgres@localhost:5432/auction";
        this.pgClient = new Client(connectionString);
        this.pgClient.connect();
    }

    insertIntoTable(query, values) {
        const me = this;
        try {
            let res = me.pgClient.query(query, values);
            return res;
        } catch (err) {
            throw err;
        }
    }

    async insertNewSport(name, data) {
        const me = this;
        try {
            let date = new Date();
            let query = 'INSERT INTO sports (name, data, created_date, modified_date) VALUES ($1, $2, $3, $4)';
            let values = [name, data, date, date];
            await me.pgClient.query(query, values);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async getSportByName(name) {
        const me = this;
        try {
            let result = await me.pgClient.query('select data from sports where name = $1', [name]);
            return (_.get(result, 'rows.0.data', {}));
        } catch (err) {
            throw err;
        }
    }
}

module.exports = PGClient;