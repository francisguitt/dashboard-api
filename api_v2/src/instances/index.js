

import admin from 'firebase-admin';

// import secret from '../keys/servicesAcountKey.json' assert{type: "json"};
import secret from '../keys/servicesAcountKey.json' ;

admin.initializeApp({
    credential: admin.credential.cert(secret)
});
export default admin;