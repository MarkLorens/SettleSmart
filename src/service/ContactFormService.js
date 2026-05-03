import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const createContactFrom = async (contactForm) => {
  return addDoc(collection(db, "ContactForms"), {
    ...contactForm,
    createdAt: serverTimestamp(),
  });
};
