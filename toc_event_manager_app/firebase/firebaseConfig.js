import * as firebase from 'firebase';
import '@firebase/firestore'; //firestore setup

const firebaseConfig = {
    apiKey: "AIzaSyAIKdG4Kwr1uhoJVA-1S1SH7MtEPZ2TNnc",
    authDomain: "toceventmanagerapp.firebaseapp.com",
    databaseURL: "https://toceventmanagerapp.firebaseio.com",
    projectId: "toceventmanagerapp",
    storageBucket: "",
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default db