// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmxbl5FpXrO3BgArYMQQil5aAfDqWWYhg",
  authDomain: "webplataformaeduc.firebaseapp.com",
  projectId: "webplataformaeduc",
  storageBucket: "webplataformaeduc.firebasestorage.app",
  messagingSenderId: "897392936033",
  appId: "1:897392936033:web:02e8b731dd06f1479b9620",
  measurementId: "G-YT86SNRWWJ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc };
