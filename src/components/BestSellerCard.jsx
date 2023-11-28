import React from 'react'
import Flex from './Flex'
import Heading from './Heading'
import Image from './Image'
import Paragraph from './Paragraph'

const BestSellerCard = ({src, text, oldPrice, newPrice}) => {
  return (
    <>
        <Flex classname="flex-col">
            <Image src={src}/>
            <div className="bg-white py-[14px] pl-[22px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="123" height="21" viewBox="0 0 123 21" fill="none">
                    <path d="M9.37422 0.243042L11.4315 7.21422H18.0888L12.7029 11.5226L14.7601 18.4938L9.37422 14.1854L3.98832 18.4938L6.04555 11.5226L0.659653 7.21422H7.31699L9.37422 0.243042Z" fill="#FFAF37"/>
                    <path d="M35.4536 0.243042L37.5108 7.21422H44.1681L38.7822 11.5226L40.8395 18.4938L35.4536 14.1854L30.0677 18.4938L32.1249 11.5226L26.739 7.21422H33.3963L35.4536 0.243042Z" fill="#FFAF37"/>
                    <path d="M61.5332 0.243042L63.5904 7.21422H70.2477L64.8618 11.5226L66.9191 18.4938L61.5332 14.1854L56.1473 18.4938L58.2045 11.5226L52.8186 7.21422H59.4759L61.5332 0.243042Z" fill="#FFAF37"/>
                    <path d="M87.6125 0.243042L89.6697 7.21422H96.3271L90.9412 11.5226L92.9984 18.4938L87.6125 14.1854L82.2266 18.4938L84.2838 11.5226L78.8979 7.21422H85.5553L87.6125 0.243042Z" fill="#FFAF37"/>
                    <path d="M113.692 0.243042L115.749 7.21422H122.406L117.021 11.5226L119.078 18.4938L113.692 14.1854L108.306 18.4938L110.363 11.5226L104.977 7.21422H111.635L113.692 0.243042Z" fill="#FFAF37"/>
                </svg>
                <Heading className="font-poppins font-semibold text-[22px]" text={text} as="h6"/>
                <Flex>
                    <Paragraph className="font-poppins font-normal text-2xl text-[#C4C4C4] mr-[30px]" text={oldPrice}/>                
                    <Paragraph  className="font-poppins font-normal text-2xl text-black" text={newPrice}/>                
                </Flex>
            </div>
        </Flex>
    </>
  )
}

export default BestSellerCard
