import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Heading from '../Heading'
import fashionImage from '../../assets/fashion.png'
import Paragraph from '../Paragraph'

const BestFashion = () => {
  return (
      <section className="mt-[236px] relative mb-[335px]">
        <Container classname="relative">
          <Flex>
            <div className="z-20">
              <Image src={fashionImage}/>
            </div>
            <div className='mx-auto'>
              <Heading className="font-frank font-bold text-header1FontSize text-black max-w-[437px] mt-[70px]" text="Best Fashion Since 2010" as="h1"/>
              <Paragraph className="font-poppins font-semibold text-2xl max-w-[443px] mt-[63px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."/>              
            </div>
          </Flex>
          <Flex classname="justify-between bg-primaryColor p-[70px] w-[793px] absolute right-[60px] mt-[-70px] z-10">
            <div>
              <Heading className="font-podkova font-bold text-header1FontSize text-black" text="2010" as="h1"/>
              <Paragraph className="font-poppins font-medium text-lg mt-7" text="Founded"/>
            </div>  
            <div>
              <Heading className="font-podkova font-bold text-header1FontSize text-black" text="5000+" as="h1"/>
              <Paragraph className="font-poppins font-medium text-lg mt-7" text="Product Sold"/>
            </div>
            <div>
              <Heading className="font-podkova font-bold text-header1FontSize text-black" text="4500+" as="h1"/>
              <Paragraph className="font-poppins font-medium text-lg mt-7" text="Best Reviews"/>
            </div>              
          </Flex>
        </Container>
      </section>
  )
}

export default BestFashion
