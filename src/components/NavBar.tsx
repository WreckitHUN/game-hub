import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/gamehub.webp"


const NavBar = () => {
  return (
    <HStack>
        <Image m={2} src={logo} boxSize="60px"/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar