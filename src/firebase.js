import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCERbERBxGzq-G6RHl7qC_79SFzM3WcqrE",
    authDomain: "habit-tracker-81599.firebaseapp.com",
    projectId: "habit-tracker-81599",
    storageBucket: "habit-tracker-81599.firebasestorage.app",
    messagingSenderId: "332922034728",
    appId: "1:332922034728:web:a0b8070aaaf5650d77331d",
    measurementId: "G-GZ4MMLE55T"
  };

const app = initializeApp(firebaseConfig);
export default app;
