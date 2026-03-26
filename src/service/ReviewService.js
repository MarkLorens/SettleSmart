import { db } from "../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const getApprovedReviews = async () => {
  const q = query(collection(db, "Reviews"), where("approval", "==", true));

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
