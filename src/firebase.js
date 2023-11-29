// root 내에 firebase 연동
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAmZw_eirEEPd7ousfSGoBae4znVzTzZ98",
    authDomain: "seotjuu-blog.firebaseapp.com",
    projectId: "seotjuu-blog",
    storageBucket: "seotjuu-blog.appspot.com",
    messagingSenderId: "689078411397",
    appId: "1:689078411397:web:26a2724f190094ab0b89ec",
    measurementId: "G-XQD7PNY6F2"
  };
  
const app = initializeApp(firebaseConfig);
// firestore 객체 생성
const db = getFirestore(app);
// firestore export
export {db}