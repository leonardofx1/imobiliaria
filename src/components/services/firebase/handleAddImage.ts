import { db, storage } from "@/utils/firebase/firebaseSdk";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";



export const handleAddImage = (data , params) => {

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
    })}
