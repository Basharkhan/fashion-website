import React from 'react'

const List = ({text, href, className}) => {
  return (
    <li><a href={href} className={`${className} font-poppins font-semibold text-2xl text-black`}>{text}</a></li>
  )
}

export default List
