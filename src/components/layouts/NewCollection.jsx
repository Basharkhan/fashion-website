import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import collection1 from '../../assets/collection1.png'
import collection2 from '../../assets/collection2.png'
import collection3 from '../../assets/collection3.png'
import NewCollectionCard from '../NewCollectionCard'

const NewCollection = () => {
  return (
    <section>
        <Container>
            <Heading className="font-frank text-header1FontSize text-black font-bold text-center mt-[217px] mb-[62px]" text="New Collection" as="h2"/>
                <Flex classname="justify-between">
                    <NewCollectionCard src={collection1} text="Sweater"/>
                    <NewCollectionCard src={collection2} text="Jeans"/>
                    <NewCollectionCard src={collection3} text="Baskets"/>
                </Flex>
        </Container>
    </section>
  )
}

export default NewCollection
