// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnjgZK_pqYrgMnoit8q7tinqFpnB0HYNo",
  authDomain: "react-miniproject-bfb6e.firebaseapp.com",
  projectId: "react-miniproject-bfb6e",
  storageBucket: "react-miniproject-bfb6e.appspot.com",
  messagingSenderId: "504418088615",
  appId: "1:504418088615:web:335b2f9c8554067da70d82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

////////// firebase 사용하기 위해 app 내보내기(export)
export default app;


// firebase를 사용하는 이유?
// Firebase는 우리가 로그인하고 회원가입하는 기능을 아주 쉽게 만들 수 있게 도와줘요. 
// 예를 들어, 1. 이메일과 비밀번호로 로그인하거나, 
//          2. Google 계정으로 로그인할 수 있게 해줘요.