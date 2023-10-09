import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAChtZCaVAY6E6jFSKy9DJO4FfNPFTaREs",
    authDomain: "kenguru-preprod.firebaseapp.com",
    projectId: "kenguru-preprod",
    storageBucket: "kenguru-preprod.appspot.com",
    messagingSenderId: "87801813408",
    appId: "1:87801813408:web:e92be73991b561764b2cc5"
};
  

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;