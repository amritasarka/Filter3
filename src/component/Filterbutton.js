import React from 'react'
import style from "./filterbutton.module.css"

const Filterbutton = ({onClick}) => {
  return (
   <button className={style.filterbutton} onClick={onClick}>Filter</button>
  )
}

export default Filterbutton