import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

type User = {
  email: string,
  password: string,
}
export const UserSignup = async ({email, password}:User) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const UserLogin = async ({email, password}:User) => {
  await signInWithEmailAndPassword(auth, email, password);
};
// 로그아웃
export const firebaseLogout = async () => {
  return await signOut(auth);
};