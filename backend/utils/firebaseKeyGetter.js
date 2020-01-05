const database = require('../firebaseAdmin');

const firebaseKeyGetter = {
    getUserKey : async (id) => {
        // const snapshot = await database.ref('users').once('value');
        // const users = _.toArray(snapshot.val())
        const users = [];
        await database.collection('users').get().then((snapshot) => {
            snapshot.forEach((user) => {
                users.push(user.data());
            });
        });
        const user = users.find(user => Number(user.id) === Number(id));
        const userIndex = users.indexOf(user);
        const userKeys = Object.keys(snapshot.val());
        return userKeys[userIndex];
    }
}

module.exports = firebaseKeyGetter
