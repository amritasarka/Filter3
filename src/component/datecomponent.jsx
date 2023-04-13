import React from "react";
import date from "./datecomponent.module.css";

const Datecomponent = ({value1,value2,onChange1,onChange2}) => {
 

  return (
    <>
      <div className={date.datepicker}>
        <label for="from-date">From:</label>
        <input type="date" id="from-date" name="from-date" defaultValue={value1} onChange={onChange1}/>
        <label for="to-date">To:</label>
        <input type="date" id="to-date" name="to-date" defaultValue={value2} onChange={onChange2}/>
      </div>
    </>
  );
};

export default Datecomponent;
