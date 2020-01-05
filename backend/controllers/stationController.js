const _ = require('lodash');
const database = require('../firebaseAdmin');

const controller = {
    find: async (req, res) => {
        database.collection('stations').get()
            .then((snapshot) => {
                snapshot.forEach((station) => {
                    // TODO: Return all the objects
                    res.status(200);
                    console.log(station.id, '=>', station.data());
                });
            })
            .catch((err) => {
                res.status(404).send()
                console.log('Error getting documents', err);
            });
    },
    create: async (req, res) => {
        let documentRef = database.collection('stations').doc();
        let setStation = documentRef.set({
            // TODO: Get document length
            stationId: Math.round(Math.random()) + 1,
            stationLocationId: req.body.stationLocationId,
            stationName: req.body.stationName,
            stationPrices: req.body.stationPrices
        });
        res.status(200).send({ message: "Station added" });
    },
    edit: async (req, res) => {
        let stationRef = database.collection('stations').doc(req.params.id);

        let transaction = database.runTransaction(t => {
            return t.get(stationRef).then((station) => {
                if (station.data().stationPrices) {
                    let newStationPrices = req.body.stationPrices;
                    t.update(stationRef, { stationPrices: newStationPrices });
                }
            });
        }).then((result) => {
            console.log('Updated');
            res.status(200).send({ message: "Station Updated" });
        }).catch((err) => {
            console.log('Error Updating');
            res.status(500).send({ message: JSON.stringify(err)});
        });
    },
    delete: async (req, res) => {
        let documentRef = database.collection('stations').doc(req.params.id).delete();
        res.status(200).send({ message: 'Station Deleted' });
    }
}

module.exports = controller;

