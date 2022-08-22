import React from 'react'

export const Button = (props) => {
  return (
    <button onClick={props.onClick} className='btn'style={{backgroundColor:props.color}} >{props.text}

    </button>
  )
}
