// import { storage } from "@/firebaseConfig";
// import { ref, getDownloadURL,uploadBytesResumable } from "firebase/storage";

// export const fileUpload = (file: any) => {
//     const storageRef = ref(storage, `files/${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, file); 
//     uploadTask.on(
//         "state_changed", (snapshot) => {
//             const progress = Math.round(
//                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//             );
//             console.log(progress)
//         }, (error) => {
//             alert(error)
//         },
//         () => {
//             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                 console.log(downloadURL)
//             })
//         }
//     )
// }
import { storage } from "@/firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable, cors } from "firebase/storage";

export const fileUpload = (file: any) => {
  const storageRef = ref(storage, `files/${file.name}`);

  const uploadTask = uploadBytesResumable(storageRef, file, {
    contentType: file.type,
    customMetadata: {
      // Optional metadata
    },
    resumable: false, // Adjust this if needed
    onUploadProgress: (snapshot) => {
      // ... your progress handling
    },
    metadata: {
      // Optional metadata
    },
    gzip: true, // Optional compression
    cors: cors({
      origin: "http://localhost:3000",
      method: "POST",
      maxAge: 3600,
    }),
  });

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      console.log(progress);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log(downloadURL);
      });
    }
  );
};
