import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCDL5cPPnRneJj0f0T6ZCwQjOV3nid83fY",
    authDomain: "proyectocodermariani.firebaseapp.com",
    projectId: "proyectocodermariani",
    storageBucket: "proyectocodermariani.appspot.com",
    messagingSenderId: "686729666115",
    appId: "1:686729666115:web:66186214eb01ae1af53ef6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);