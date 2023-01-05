// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJOyIjNT5fkkJS6Up2DFZTHwEp8rMkfnM",
  authDomain: "nbzz-91837.firebaseapp.com",
  projectId: "nbzz-91837",
  storageBucket: "nbzz-91837.appspot.com",
  messagingSenderId: "942271522151",
  appId: "1:942271522151:web:0e122e3a2af5a43dce3bc2",
  measurementId: "G-SWBL8PCYGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage()


export const generateUrl = async (docRef) => {
  const sampleRef = ref(storage, docRef)
  return getDownloadURL(sampleRef).then(url => url)
}
