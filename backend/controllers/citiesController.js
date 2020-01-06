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
    citiesRef.doc(req.body.stationCity)
      .collection('stations')
      .doc()
      .set({
        stationName: req.body.stationName,
        stationPrices: req.body.stationPrices,
        stationCity: req.body.stationCity
      });
    console.log("City with Station Created");
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
    let cityRef = citiesRef.doc(req.params.cityName);
    let stationRef = cityRef.collection('stations').where('stationName', '==', req.params.stationName).get();
    stationRef.then((querySnapshot) => {
      querySnapshot.forEach((station) => {
        cityRef.collection('stations').doc(station.id).update({
          stationCity: req.body.stationCity,
          stationName: req.body.stationCity,
          stationPrices: req.body.stationPrices
        });
      });
    });
    res.status(200).send({ message: 'Updated!' });
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
    res.status(200).send({ message: 'Stations for have just been deleted!' });
  },
  deleteStationFromCity: async (req, res) => {
    await database.collection('cities').doc(req.params.cityId).collection('stations').doc(req.params.stationId).delete();

    res.status(200).send({ message: 'Station Deleted' });
  }
};

module.exports = controller;