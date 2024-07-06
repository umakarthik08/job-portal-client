import React from 'react'

const Button = ({onClickHandler,value,title}) => {
  return (
    <button onClick={onClickHandler} value={value} className='px-2 mr-1 py-1 border text-base hover:bg-blue-600 hover:text-white'>
        {title}
    </button>
  )
}

export default Button