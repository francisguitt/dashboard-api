// import admin from 'firebase-admin';

// // Verifica se estamos no ambiente de desenvolvimento
// if (process.env.NODE_ENV === 'development') {
//     const devServiceAccount = require('./dev-serviceAccountKey.json');
//     admin.initializeApp({
//         credential: admin.credential.cert(devServiceAccount)
//     });
// } else {
//     admin.initializeApp();
// }


import admin from 'firebase-admin';
import secret from '../keys/servicesAcountKey.json' assert{type: "json"};
admin.initializeApp({
    credential: admin.credential.cert(secret)
});
export default admin;