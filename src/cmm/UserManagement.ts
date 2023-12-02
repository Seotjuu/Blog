import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// 현재 로그인한 유저 확인하는 함수
export const CheckUser = () => {
  return auth.currentUser;
};

// sign up
export const SignupUser = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
  }

  return "유저 회원가입 완료";
};
