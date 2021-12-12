// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBmkAu2bPEQEJGayG7CM4Je0Uk1eSoLM68",
    authDomain: "practice-d4117.firebaseapp.com",
    databaseURL: "https://practice-d4117-default-rtdb.firebaseio.com",
    projectId: "practice-d4117",
    storageBucket: "practice-d4117.appspot.com",
    messagingSenderId: "378751432865",
    appId: "1:378751432865:web:345711e42c55ca5fbe58e0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}