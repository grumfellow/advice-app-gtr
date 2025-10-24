// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC8i6009Q7MF8jKBk88-akVRUVhhuBVHSU",
    authDomain: "advice-ad042.firebaseapp.com",
    projectId: "advice-ad042"
  };

import { getApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
const app = getApp(); // use the app already initialized in index.html
const auth = getAuth(app);

const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const statusEl = document.getElementById("status");

document.getElementById("signup").onclick = async () => {
  await createUserWithEmailAndPassword(auth, emailEl.value, passwordEl.value);
};

document.getElementById("login").onclick = async () => {
  await signInWithEmailAndPassword(auth, emailEl.value, passwordEl.value);
};

document.getElementById("logout").onclick = async () => {
  await signOut(auth);
};

onAuthStateChanged(auth, user => {
  if (user) {
    statusEl.textContent = `Logged in as ${user.email}`;
  } else {
    statusEl.textContent = "Logged out";
  }
});
