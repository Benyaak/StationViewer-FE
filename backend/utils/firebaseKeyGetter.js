const database = require('../config/firebase')
const _ = require('lodash');

const firebaseKeyGetter = {
    getUserKey : async (id) => {
        const snapshot = await database.ref('users').once('value');
        const users = _.toArray(snapshot.val())
        const user = users.find(user => Number(user.id) === Number(id));
        const userIndex = users.indexOf(user);
        const userKeys = Object.keys(snapshot.val());
        return userKeys[userIndex]
    },

    getstationKey : async (userKey, idStation) => {
        const snapshot = await database.ref(`users/${userKey}/stations`).once('value')
        const movies = _.toArray(snapshot.val())

        const station = movies.find(station => Number(station.id) === Number(idStation));
        const stationIndex = stations.indexOf(station);

        const stationKeys = Object.keys(snapshot.val());


        return stationKeys[stationIndex]
    }
}

module.exports = firebaseKeyGetter
