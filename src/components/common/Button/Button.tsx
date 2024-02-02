"use client"
import { ButtonProps } from '@/interfaces'

export default function Button ({btnClass,title,onClick}:ButtonProps)  {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>{title}</button>
  )
}
