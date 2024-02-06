"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./Upload.module.scss";
import Button from "../common/Button/Button";
import { fileUpload } from "@/FireBaseApi/FileUpload";
import ProgressBar from "../ProgressBar";

export const UploadFiles = () => {
  const [isFileVisible, setIsFileVisible] = useState(false);
  const [file, setFile] = useState({});
  const [progress, setProgress] = useState(0);
  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress);
  };
  return (
    <div className={styles.uploadMain}>
      <Button
        onClick={() => setIsFileVisible(!isFileVisible)}
        title="Add a File"
        btnClass="btn-primary"
      />
      {isFileVisible && (
        <input
          onChange={(event) => uploadFile(event)}
          type="file"
          className="file-input w-full max-w-xs"
        />
      )}
      <Button title="Create a Folder" btnClass="btn-primary" />
      {progress === 0 || progress === 100 ? (
        <></>
      ) : (
        <ProgressBar progress={progress} />
      )}
      {/* <ProgressBar/> */}
    </div>
  );
};
