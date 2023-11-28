import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`${className} font-poppins font-semibold text-2xl py-2.5 px-7 border border-buttonBorderColor rounded shadow-md hover:bg-secondaryColor`}>{text}</button>
  )
}

export default Button
