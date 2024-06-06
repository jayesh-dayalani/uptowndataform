// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr_e6tSKTx3kUaTt4VSW-Yl9MB8jAd0CI",
  authDomain: "uptown-e18f2.firebaseapp.com",
  projectId: "uptown-e18f2",
  storageBucket: "uptown-e18f2.appspot.com",
  messagingSenderId: "215634717165",
  appId: "1:215634717165:web:3cad47469b0fed4b96dfe4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hiii");

  set(ref(db, "user/" + document.getElementById("name").value), {
    name: document.getElementById("name").value,
    dob: document.getElementById("dob").value,
    number: document.getElementById("num").value,
  });

  console.log("login done");
  console.log({
    name: document.getElementById("name").value,
    dob: document.getElementById("dob").value,
    number: document.getElementById("num").value,
  });
  setTimeout(() => {
    window.location = "./card.html";
  }, 500);

  //   const usersRef = ref(db, "user");

  //   // Listen for changes to the users node
  //   onValue(usersRef, (snapshot) => {
  //     const users = snapshot.val();
  //     if (users) {
  //       // Loop through each user and log their details
  //       Object.keys(users).forEach((userId) => {
  //         const user = users[userId];
  //         console.log(`User ID: ${userId}`);
  //         console.log(`Username: ${user.username}`);
  //         console.log(`Email: ${user.email}`);
  //         console.log(`Phone Number: ${user.phone}`);
  //         console.log("----------------------");
  //       });
  //     } else {
  //       console.log("No users found");
  //     }
  //   });
});
