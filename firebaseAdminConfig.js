const admin = require('firebase-admin');
const serviceAccount = require('./vue-udvikling-firebase-adminsdk-kh938-8d41de8eba.json'); // Adjust the path as needed

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://vue-udvikling-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.firestore();
module.exports = { db };