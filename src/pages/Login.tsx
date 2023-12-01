import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [main, setMain] = useState();

  const getTest = async () => {
    // document에 대한 참조 생성
    const docRef = doc(db, "user", "user");
    // 참조에 대한 Snapshot 쿼리
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  };

  return (
    <>
      <div className="Login" style={{ height: "100%" }}>
        <span className="Title">Seotjuu's Blog Login</span>

        <form
        >
          <input type="text" placeholder="tester" {...register("id")} />
          <input type="password" placeholder="tester123@" {...register("pw")} />
          <Link to="/Main">
            <button
              type="submit" // 버튼을 누르면 조건 없이 Main 링크 이동
            >
              로그인
            </button>
          </Link>

          <button onClick={()=>{
            getTest();
          }}>
            DB 접속
          </button>
        </form>
      </div>
    </>
  );
}
