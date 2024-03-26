
import { Property } from "@/components/types/typeProperty"
import { db } from "@/utils/firebase/firebaseSdk"
import { collection, getDocs } from "firebase/firestore"




export const getPropertys = async () => {
    const snap= await getDocs(collection(db, "property"))
    const dataProperty:Property[] = snap.docs.map((item) => item.data() as Property)
    return dataProperty
  }