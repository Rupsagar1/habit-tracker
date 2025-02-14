import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

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

// Function to update the completion status of a habit
export const toggleHabitCompletion = async (habitId, completed) => {
  const habitRef = doc(db, "habits", habitId);
  try {
    await updateDoc(habitRef, {
      completed: !completed,
    });
    console.log("Habit completion updated!");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

// Function to delete a habit from Firestore
export const deleteHabit = async (habitId) => {
  const habitRef = doc(db, "habits", habitId);
  try {
    await deleteDoc(habitRef);
    console.log("Habit deleted!");
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};

export default app;
