// Sign / Login
// 로그인 페이지

import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [main, setMain] = useState();

  // Enter 키 누르면 onSubmit 되는 함수
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  // button 누르면 submit 실행됨
  const onSubmit = (data) => {
    if (data.id === "tester" && data.pw === "tester123@") {
      // 입력창에 로그인 조건이 맞을 시 링크로 가야함
      setMain("/Main");
    } else {
      Swal.fire({
        icon: "warning",
        html: `아이디 또는 비밀번호가 일치하지 않습니다.`,
        confirmButtonText: "확인",
        confirmButtonColor: " rgb(48, 133, 214)",
        allowOutsideClick: false, //Background click X
      });
    }
  };

  return (
    <>
      <div className="Login" style={{ height: "100%" }}>
        <span className="Title">Seotjuu's Blog Login</span>

        <form
          onSubmit={handleSubmit(onSubmit)} // 신호 받는 함수
          onKeyPress={onCheckEnter(onSubmit)} // 엔터키 입력 받는 함수
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
        </form>
      </div>
    </>
  );
}
