"use client";
import { onSnapshot, collection } from "firebase/firestore";
import { database } from "@/firebaseConfig";
import { useEffect, useState } from "react";

let files = collection(database, "files");

export const fetchFiles = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    return onSnapshot(files, (response) => {
      console.log(
        response.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          };
        }),
      );
    });
  }, []);

  return { fileList };
};
