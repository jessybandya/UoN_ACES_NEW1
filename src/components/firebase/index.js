import firebase from 'firebase';
// import { ENV } from '../../env';
const config = {
  // apiKey: ENV.apiKey,
  // authDomain: ENV.authDomain,
  // projectId: ENV.projectId,
  // storageBucket: ENV.storageBucket,
  // messagingSenderId: ENV.messagingSenderId,
  // appId: ENV.appId,
  // measurementId: ENV.measurementId

  apiKey: "AIzaSyDLXSPti08D9lynzBA8e9pfBz7R5PiYxXM",
  authDomain: "odero-85bdb.firebaseapp.com",
  projectId: "odero-85bdb",
  storageBucket: "odero-85bdb.appspot.com",
  messagingSenderId: "437962805696",
  appId: "1:437962805696:web:2ed9b8f9eddbc1a1637825",
  measurementId: "G-RR75VG7ELL",
};

firebase.initializeApp(config);

export default firebase;
const provider = new firebase.auth.GoogleAuthProvider();

  const auth1 = firebase.auth();
   const db = firebase.firestore();
   const storage = firebase.storage();
  // export default {auth, db, storage};
  export  {db};
  export  {auth1};
  export  {storage, provider};


firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()








