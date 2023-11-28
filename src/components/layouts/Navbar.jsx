import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import List from '../List'
import logo from '../../assets/logo.png';
import Button from '../Button'

const Navbar = () => {
  return (
    <nav className='bg-primaryColor'>
        <Container>          
            <Flex classname="py-12 items-center">
              <div className="w-1/4">
                <Image src={logo}/>
              </div>
              <div className="w-1/2">
                <ul>
                  <Flex classname="justify-evenly">
                    <List href="#" text="Men"/>
                    <List href="#" text="Women"/>
                    <List href="#" text="Kids"/>
                    <List href="#" text="Collection"/>
                    <List href="#" text="Trends"/>
                  </Flex>
                </ul>
              </div>
              <div className="w-1/4 text-right">
                <Button text="Login"/>
                <Button className="ml-[10px]" text="Sign up"/>
              </div>
            </Flex>      
        </Container>
    </nav>
  )
}

export default Navbar
