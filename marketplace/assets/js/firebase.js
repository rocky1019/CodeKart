// Import Firebase modules (CDN ES Modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// ✅ Your Firebase project config (centralized here)
const firebaseConfig = {
  apiKey: "AIzaSyDIt727HxMoAk8jMwhLH2-zcLXGmBdj_Ys",
  authDomain: "codekart-5652e.firebaseapp.com",
  projectId: "codekart-5652e",
  storageBucket: "codekart-5652e.firebasestorage.app",
  messagingSenderId: "430655059434",
  appId: "1:430655059434:web:290df76af0c7bf8c882e93"
};

// ✅ Initialize Firebase once
const app = initializeApp(firebaseConfig);

// ✅ Export services for reuse
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
