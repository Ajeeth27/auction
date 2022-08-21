let SportsService = require('../services/sports-service');

class routeHandler {
    constructor () {
        this.sportsService = new SportsService();
    }

    async addSport(req, res) {
        const me = this;
        try {
            let payload = req.body;
            let result = await me.sportsService.addSport(payload);
            return result;
        } catch (err) {
            return err;
        }
    }

    async getSportByName (req, res) {
        const me = this;
        try {
            let {name} = req.params;
            let result = await me.sportsService.getSportByName(name);
            return result;
        } catch (err) {
            return err;
        }
    }

}

let RouteHandler = new routeHandler();
module.exports = RouteHandler;