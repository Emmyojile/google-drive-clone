import React from 'react'
import styles from "./Upload.module.scss"
import Button from '../common/Button/Button'

export const UploadFiles = () => {
  return (
    <div className={styles.uploadMain}>
      <Button title='Add a File' btnClass='btn-primary'/>
      <Button title='Create a Folder' btnClass='btn-primary'/>
    </div>
  )
}
