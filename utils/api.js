import { async } from "@firebase/util";
import {
  doc,
  setDoc,
  Timestamp,
  addDoc,
  collection,
  getDoc,
  query,
  onSnapshot,
  limit,
  getDocs,
  startAfter,
  startAt,
  orderBy,
  where,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../config/firebase";

let pageperLimit = 50;
const modelName = {
  ONE_TIME_BOOKING: "One_time_wash",
  SUBSCRIPTION_BOOKING: "subscription_wash",
  ASSIGNED_ORDER: "assigned_order",
  PARTNERS: "partners",
    PINCODE:"pincode",
};
const { ONE_TIME_BOOKING, SUBSCRIPTION_BOOKING, ASSIGNED_ORDER, PARTNERS, PINCODE } =
  modelName;

const allOrders = async (page, collectionName) => {
  let arr = [];
  // console.log(collectionName)
  const colref = collection(db, collectionName);
  if (page === 0) {
    let q = query(colref, limit(pageperLimit), orderBy("timestamp", "desc"));
    const documentSnapshots = await getDocs(q);
    documentSnapshots.docs.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });
    return arr;
  } else if (page > 0) {
    let q = query(colref, limit(page * pageperLimit));
    const documentSnapshots = await getDocs(q);
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1];
    const next = query(colref, startAfter(lastVisible), limit(pageperLimit));
    next = await getDocs(next);

    next.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });

    return arr;
  }
};


const assignOrder = async () => {
  const colref = collection(db, ASSIGNED_ORDER);
  const initialState = {
    date: "24/11/2001",
    remarks: "He is the best guy i ever meet",
    assignto: "ANKUR Thakur",
    time: "2:53",
    timestamp: "123",
  };
  let data = await addDoc(colref, initialState);
};

const getFilterText = async (text, collectionName) => {
  let brr = [];
  const colref = collection(db, collectionName);

  let q = query(colref, where("orderNo", "==", parseInt(text)));
  let val = await getDocs(q);

  // console.log(val);
  // console.log(val.docs[0]);
  val.docs.forEach((doc) => {
    brr.push(doc.data());
  });
  // console.log(brr);
  return brr;
  // const documentSnapshots = await getDocs(q);
  // documentSnapshots.docs.forEach((doc) => {
  //   brr.push({ ...doc.data(), id: doc.id });
  // });
  // console.log("brr", brr);
  // console.log(text, collectionName);
};

const addPartner = async (labourData) => {
  const colref = collection(db, PARTNERS);
  let data = await addDoc(colref, labourData);
  console.log(data);
};

const getLabours = async () => {
  const q = query(collection(db, PARTNERS));
  let arr = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    arr.push({ ...doc.data(), id: doc.id });
  });
return arr;
};

const deleteDocument = async(collection, id)=>{
  let dlt = await deleteDoc(doc(db, collection, id));
  return toast.success("Successfully Deleted")
}


const savePincode =async (pinData) => {
  const colref = collection(db, PINCODE);
  let data = await addDoc(colref, pinData);
  return data;
}

export { allOrders, assignOrder, addPartner, getFilterText, getLabours, deleteDocument, savePincode };