import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import banner from '../../assets/banner.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'

const Banner = () => {
  return (
    <section className='bg-primaryColor pt-[117px] pb-[133px]'>
      <Container>
        <Flex classname="justify-between">
            <div className="">
                <Heading className="font-poppins text-black text-header1FontSize font-semibold max-w-[556px]" text="Find The Best Fashion Style For You" as="h1"/>
                <Paragraph className="font-poppins text-bannerParagraphFontSize text-black font-normal max-w-[530px] pt-[38px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."/>
                <Button className="bg-black text-2xl text-white uppercase border-none hover:bg-black mt-[100px] py-[25px] px-[91px]" text="Shop Now"/>
            </div>
            <div className="">
                <Image src={banner}/>
            </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Banner
