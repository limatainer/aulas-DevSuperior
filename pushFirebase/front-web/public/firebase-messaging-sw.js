/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');

// https://github.com/react-boilerplate/react-boilerplate/issues/2952
const firebaseConfig = {
  apiKey: "AIzaSyCyBrr4byaDrsvWNAMeg6E7JLSWxq-IZnw",
  authDomain: "pushnotifications-devsup.firebaseapp.com",
  projectId: "pushnotifications-devsup",
  storageBucket: "pushnotifications-devsup.appspot.com",
  messagingSenderId: "427584975585",
  appId: "1:427584975585:web:79eb0351bdb66da64dbda0"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(
  function (payload) {
    console.log('sw bg message event: ', payload);
  });