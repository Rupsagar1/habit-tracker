import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCERbERBxGzq-G6RHl7qC_79SFzM3WcqrE",
  authDomain: "habit-tracker-81599.firebaseapp.com",
  projectId: "habit-tracker-81599",
  storageBucket: "habit-tracker-81599.firebasestorage.app",
  messagingSenderId: "332922034728",
  appId: "1:332922034728:web:a0b8070aaaf5650d77331d",
  measurementId: "G-GZ4MMLE55T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

// Function to add a new habit to Firestore
export const addHabit = async (habit) => {
  try {
    const docRef = await addDoc(collection(db, "habits"), {
      habit: habit,
      completed: false,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Function to retrieve habits from Firestore
export const getHabits = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "habits"));
    const habits = [];
    querySnapshot.forEach((doc) => {
      habits.push({ id: doc.id, ...doc.data() });
    });
    return habits;
  } catch (e) {
    console.error("Error fetching habits: ", e);
    return [];
  }
};

export default app;
