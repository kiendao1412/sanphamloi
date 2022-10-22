
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBRCYPU5OQCFn8pgl5e1B_Kmn5Kw1NMzaw",
    authDomain: "sanphamloi-89689.firebaseapp.com",
    databaseURL: "https://sanphamloi-89689-default-rtdb.firebaseio.com",
    projectId: "sanphamloi-89689",
    storageBucket: "sanphamloi-89689.appspot.com",
    messagingSenderId: "75607111391",
    appId: "1:75607111391:web:29c05d043384f89ec4db6a",
    measurementId: "G-49D6765K3E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
