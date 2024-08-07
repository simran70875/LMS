import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAbblZkU1cAnVoDTM3Nm2fbLLy1U_YviRE",
  authDomain: "lmss-67dda.firebaseapp.com",
  projectId: "lmss-67dda",
  storageBucket: "lmss-67dda.appspot.com",
  messagingSenderId: "1075231845121",
  appId: "1:1075231845121:web:6e8ac180719568d6bac900",
  // measurementId: "G-LWKG4F4F77",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


