// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTEDID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig); // initializeApp(firebaseConfig) 함수는 Firebase와 우리의 앱을 연결하고, Firebase 서비스를 사용할 준비를 하는 역할.

////////// firebase 사용하기 위해 app 내보내기(export)
export default app;


// firebase를 사용하는 이유?
// Firebase는 우리가 로그인하고 회원가입하는 기능을 아주 쉽게 만들 수 있게 도와줘요. 
// 예를 들어, 1. 이메일과 비밀번호로 로그인하거나, 
//          2. Google 계정으로 로그인할 수 있게 해줘요.
