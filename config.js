import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCJ2bfOhp6-qLq2s3k8Moy3EdO4dolQZYc",
    authDomain: "school-attendance-app-38970.firebaseapp.com",
    databaseURL: "https://school-attendance-app-38970-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-38970",
    storageBucket: "school-attendance-app-38970.appspot.com",
    messagingSenderId: "309577166398",
    appId: "1:309577166398:web:ce49b7bd23363a4bfc2b6f"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();

 

  