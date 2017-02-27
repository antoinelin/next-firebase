import * as firebase from 'firebase'

// Keep multiple time declaration error far far away of this project
// ----------------------------------------------------------------o
try {
  // Initialize database
  firebase.initializeApp({
    apiKey: 'FEREFErfereZRFE343_FERZEfrzrf43FE',
    authDomain: 'your-url.firebaseapp.com',
    databaseURL: 'https://your-url.firebaseio.com',
    storageBucket: 'your-url.appspot.com',
    messagingSenderId: '1111111111',
  })
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

// Export database
const FirebaseSample = firebase.database()

export default FirebaseSample
