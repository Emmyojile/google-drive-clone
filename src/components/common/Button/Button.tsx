"use client"
import { ButtonProps } from '@/interfaces'
import styles from "./Button.module.scss"

export default function Button ({btnClass,title,onClick}:ButtonProps)  {
  return (
    <button onClick={onClick} className={`btn ${btnClass} ${styles.commonBtn}`}>{title}</button>
  )
}
