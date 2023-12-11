import React from 'react'

export const Task = (props) => {
  return (
    <div className='text-center w-full flex-auto'>

        <h1>{props.taskTitle}</h1>

        <p>{props.taskDetails}</p>
    </div>
  )
}
