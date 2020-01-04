const _ = require('lodash');
// const firebaseKeyGetter = require('../utils/firebaseKeyGetter');
const database = require('../config/firebase');

const controller = {
    findAll: async (req, res) => {
        const snapshot = await database.ref(`stations`).once('value');
        const stations = _.toArray(snapshot.val())

        res.status(200).send(stations ? stations : [])
    }
}

module.exports = controller;

