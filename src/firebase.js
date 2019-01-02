import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB_EC4kekLVlRJS5Xq3uZXgZEd9_x36PvA",
    authDomain: "gcstarter01.firebaseapp.com",
    databaseURL: "https://gcstarter01.firebaseio.com",
    projectId: "gcstarter01",
    storageBucket: "gcstarter01.appspot.com",
    messagingSenderId: "826368275004"
}

const fire =  firebase.initializeApp(config);

export default fire;