

import admin from 'firebase-admin';
// import secret from '../keys/servicesAcountKey.json' assert{type: "json"};
import {key} from '../keys/private_key.js'



admin.initializeApp({
    credential: admin.credential.cert(key)
});
export default admin;