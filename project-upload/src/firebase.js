import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDoOO-YECQfGJabMuOLWTcsao4wHsvDXnM",
    authDomain: "project-upload-app.firebaseapp.com",
    projectId: "project-upload-app",
    storageBucket: "project-upload-app.appspot.com",
    messagingSenderId: "246954751553",
    appId: "1:246954751553:web:eaa8787a17e3243e3238c0",
    measurementId: "G-QZ0HM9G50N"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;
