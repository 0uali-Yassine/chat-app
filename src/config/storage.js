import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

const uploadfile = async file =>{
    const storage = getStorage();
    const date= new Date();
    const storageRef = ref(storage, `image/${date+file.name}`);

    return new Promise((resolve,reject)=>{
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            
          }, 
          (error) => {
            reject('somthing wron '+error.code);
          }, 
          () => {
            
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
            });
          }
        );
    });
}

export default uploadfile;