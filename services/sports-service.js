// const _ = require('lodash');

const pgClient = require('../clients/pg-client');
class sportService {

    constructor () {
        this.PGClient = new pgClient();
    }
    
    async addSport (payload) {
        const me = this;
        try {
            let name = payload.name;
            await me.PGClient.insertNewSport(name, payload);
            return payload;
        } catch (err) {
            return err;
        }
    }

    async getSportByName (name) {
        const me = this;
        try {
            let res = await me.PGClient.getSportByName(name);
            return res;
        } catch (err) {
            throw err;
        }
    }

    async getAllSports () {
        const me = this;
        try {
            let res = await me.PGClient.getAllSports();
            return res;
        } catch (err) {
            throw err;
        }
    }

    updateSport (payload) {

    } 

    deleteSport (id) {
        return;
    }

}

module.exports = sportService;
