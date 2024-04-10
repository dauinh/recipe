// import { Link as ReactRouterLink } from 'react-router-dom'
import { Box, Link as ChakraLink, Flex, Link, LinkProps } from '@chakra-ui/react'
import { CalendarIcon, Search2Icon } from '@chakra-ui/icons'

function Footer() {
  return (
    // <ChakraLink as={ReactRouterLink} to='/'>
    //     Home
    // </ChakraLink>
    <Flex direction='row' bg='red.100' justify='space-between' h='4rem' align='center' padding='0 2rem' pos='sticky' bottom='0'>
      <Link><Search2Icon /></Link>
      <Link><CalendarIcon /></Link>
      <Link>Cart</Link>
      <Link>Profile</Link>
    </Flex>
  )
}

export default Footer
