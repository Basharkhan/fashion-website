import React from 'react'
import Image from './Image'
import Heading from './Heading'

const NewCollectionCard = ({src, text}) => {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={src} className="max-h-[402px]"/>
      <Heading className="font-poppins font-normal text-2xl text-black absolute top-0 text-center mt-[300px] px-[110px] py-2 bg-white shadow-lg border rounded-[20px]" text={text} as="h6"/>  
    </div>
  )
}

export default NewCollectionCard
