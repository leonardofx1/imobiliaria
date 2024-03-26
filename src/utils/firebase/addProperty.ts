import { useRouter } from "next/navigation"
import { db } from "./firebaseSdk";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { PropertyType } from "@/components/Form";

function useCreateProperty() {
   const router = useRouter()
  const createProperty = async (propertyData: PropertyType) => {
  
  
    const docRef = collection(db, "property");
    const addProperty = await addDoc(docRef, propertyData);
    const toUpdateDoc = doc(db, "property", addProperty.id);
    const res = await updateDoc(toUpdateDoc, { id: addProperty.id });

    router.push(`/admin/config/addImage/${addProperty.id}`);

}
return{createProperty}
}

export default useCreateProperty
