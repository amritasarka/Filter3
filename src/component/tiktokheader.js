import React from 'react'
import t from "./filterbutton.module.css";

const Tiktokheader = (props) => {
  return (
    <div className={t.tiktokheader}>
      
    {props.item.map((item) => (
      <div className={t.tiktokheaderchild}>{item}</div>
    ))}
   
  </div>
  )
}

export default Tiktokheader

