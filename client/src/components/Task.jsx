import React from "react";

export const Task = (props) => {
  return (
    <div className="text-center ">
      <h1 className="text-2xl">{props.taskTitle}</h1>
      <input type="radio" />
      <p className="t text-justify p-5">{props.taskDetails}</p>
    </div>
  );
};
