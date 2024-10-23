import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtpDRUmoiVfY8SRu-ov6H6SSXk1lZrej8",
  authDomain: "first-vue-app-ff313.firebaseapp.com",
  projectId: "first-vue-app-ff313",
  storageBucket: "first-vue-app-ff313.appspot.com",
  messagingSenderId: "162404925931",
  appId: "1:162404925931:web:7a80f921e6ef91743759ae"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
