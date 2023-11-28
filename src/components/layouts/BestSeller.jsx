import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'
import image1 from '../../assets/best1.png'
import image2 from '../../assets/best2.png'
import BestSellerCard from '../BestSellerCard'

const BestSeller = () => {
  return (
    <section className="bg-bestSellingBgColor pt-[36px] pb-[191px]">
        <Container>
            <Flex classname="justify-between">
                <div>
                    <Heading className="font-frank font-bold text-header1FontSize text-white max-w-[437px]" text="Best Seller Product" as="h1"/>
                    <Paragraph className="font-frank font-bold text-2xl text-white max-w-[437px] mt-[43px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."/>
                    <Button className="bg-black border-none hover:bg-black py-[24px] px-[86px] mt-[40px] text-white" text="Learn MORE"/>
                </div>
                <BestSellerCard src={image1} text="Sweater Shirt" oldPrice="$45.99" newPrice="$35.99"/>
                <BestSellerCard src={image2} text="Pants fashion" oldPrice="$55" newPrice="$44.99"/>
            </Flex>
        </Container>
    </section>
  )
}

export default BestSeller
