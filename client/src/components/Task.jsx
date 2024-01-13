import React from "react";

export const Task = (props) => {
  return (

    <div className="text-center box-border border rounded-xl w-full h-full border-red-950 ">
      <h1 className="text-2xl">{props.taskTitle}</h1>
      <input type="radio" />
      <p className="t text-center p-5">{props.taskDetails}</p>
      <label htmlFor=""> Urgency : {props.urgency}</label>
    </div>
  );
};
