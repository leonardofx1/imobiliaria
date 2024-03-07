import { db, storage } from '@/utils/firebase/firebaseSdk';
import { getDownloadURL,  ref, uploadBytesResumable } from "firebase/storage";

import { PropertyType } from '@/components/Form'; 
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router';



export const useFireBase  = ({params})=> {

    const handleAddImage = (data) => {

    const files = data.image;
  
    const uploadPromises = Array.from(files).map((file) => {

      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      return new Promise((resolve, reject) => {
        uploadTask.on('state_changed', 
          (snapshot) => {
            console.log(snapshot, 'progresso');
          }, 
          (error) => {
            console.error(error);
            reject(error);
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

              resolve(downloadURL); 
            });
          }
        );
      });
    });
    
    Promise.all(uploadPromises).then((downloadURLs) => {
      // Atualiza o documento com todas as URLs de download
      updateDoc(doc(db, 'property', params.imagePropertyId), { imageUrls: downloadURLs });
    });

  }
  const handleCreateProperty = async(propertyData:PropertyType) => {

    const docRef = collection(db, "property");
    const addProperty = await addDoc(docRef, propertyData);
    const toUpdateDoc = doc(db, "property", addProperty.id);
    const res = await updateDoc(toUpdateDoc, { id: addProperty.id });
    const router = useRouter();
    router.push(`/admin/config/addImage/${addProperty.id}`);
  }
  return{handleAddImage}
}