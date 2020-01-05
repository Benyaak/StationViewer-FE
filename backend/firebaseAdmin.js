const admin = require('firebase-admin');
const serviceAccount = require("./proiect-tic-261309-firebase-adminsdk-azkgl-797a32713b.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://proiect-tic-261309.firebaseio.com"
  });

module.exports = admin.firestore();