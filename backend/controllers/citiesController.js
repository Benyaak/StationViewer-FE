const database = require('../firebaseAdmin');

let citiesRef = database.collection('cities');

const controller = {
  find: async (req, res) => {
    let cities = await citiesRef.get();
    cities.forEach(async city => {
      await citiesRef.doc(city.id).collection('stations').get().then((snapshot) => {
        if (snapshot.empty) {
          console.log('No stations');
          return;
        }

        snapshot.forEach((station) => {
          console.log('City ID: ', city.id);
          console.log(station.id, '=>', station.data());
        });
      });
    });

    res.status(200);
  },
  create: async (req, res) => {

    citiesRef.doc(req.body.cityDocumentId).set({
      cityId: req.body.cityId,
      cityName: req.body.cityName,
    });

    citiesRef.doc(req.body.cityDocumentId)
      .collection('stations')
      .doc(req.body.stationDocumentId)
      .set({
        stationName: req.body.stationName,
        stationPrices: req.body.stationPrices
      });

    res.status(200).send({ message: 'City and Station Added' });
  },
  editCity: async (req, res) => {
    let cityRef = citiesRef.doc(req.params.cityId);

    let transaction = database.runTransaction((t) => {
      return t.get(cityRef).then((city) => {
        if (city.id) {
          let newCityId = req.body.cityId;
          t.update(cityRef, { id: newCityId });
        }
      });
    })
      .then((result) => {
        res.status(200).send({ message: 'City ID updated' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'City ID did not update' });
      });
  },
  editCityStation: async (req, res) => {
    let cityRef = citiesRef.doc(req.params.cityId);
    let stationRef = cityRef.collection('stations').doc(req.params.stationId);
    let transaction = database.runTransaction((t) => {
      return t.get(stationRef).then((station) => {
        if (station.data().stationName && req.body.stationName) {
          let newStationName = req.body.stationName;
          t.update(stationRef, { stationName: newStationName });
        }

        if (station.data().stationPrices && req.body.stationPrices) {
          let newStationPrices = req.body.stationPrices;
          t.update(stationRef, { stationPrices: newStationPrices });
        }
      });
    })
      .then((result) => {
        console.log('Updated');
        res.status(200).send({ message: 'Station Updated' });
      })
      .catch((err) => {
        console.log('Error Updating', err);
        res.status(500).send({ message: 'Station did not update!' });
      })
  },
  delete: async (req, res) => {
    let cities = await citiesRef.get();
    cities.forEach(async () => {
      await citiesRef.doc(req.params.cityId).collection('stations').listDocuments().then((snapshot) => {
        snapshot.map((val) => {
          val.delete();
        })
      })
    });
    citiesRef.doc(req.params.cityId).delete();
    res.status(200).send({ message: 'Stations for ' + req.params.id + ' have just been deleted!' });
  }
};

module.exports = controller;