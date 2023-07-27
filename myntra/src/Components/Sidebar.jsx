import { Box, Flex, IconButton, Image, Menu, MenuButton, MenuList, MenuItem, Button, useDisclosure } from '@chakra-ui/react';
import { HStack, Input, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, PopoverFooter, ButtonGroup, PopoverHeader, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import { BsImage } from 'react-icons/bs'
import { FaHome, FaUser, FaVideo } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
const Sidebar = () => {

    const dispatch = useDispatch()
    const token = JSON.parse(localStorage.getItem("fashionmantratoken")) || null
    const navigate = useNavigate()
     const handleLogin = ()=>{
        navigate("/login")
     }
     const handleLogOut = ()=>{
         localStorage.setItem("fashionmantra",null)
         window.location.refresh() 
      } 
    return (
        <Box width="100%" className='background_color' height="100%">
            <Box
                display="flex"
                flexDirection="column"
                width="100%"
                alignItems="center"
                height="20%"
                justifyContent="space-between"
            >
                <Menu color="gray.900" width="100%">
                    <MenuButton as={Link} mx={2} fontWeight="bold">
                        Men
                    </MenuButton>
                    <MenuList bg="gray.900" width="100%">
                        <MenuItem _hover={{ bg: 'gray.700' }} py={2} px={4} >
                            <Link href="/men/clothing">Clothing</Link>
                        </MenuItem>
                        <MenuItem _hover={{ bg: 'gray.700' }} py={2} px={4} >
                            <Link href="/men/shoes">Shoes</Link>
                        </MenuItem>
                        <MenuItem _hover={{ bg: 'gray.700' }} py={2} px={4} >
                            <Link href="/men/accessories">Accessories</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Link} mx={2} fontWeight="bold">
                        Women
                    </MenuButton>
                    <MenuList bg="gray.900" width="100%">
                        <MenuItem _hover={{ bg: 'gray.700' }} py={2} px={4} >
                            <Link href="/women/clothing">Clothing</Link>
                        </MenuItem>
                        <MenuItem _hover={{ bg: 'gray.700' }} py={2} px={4} >
                            <Link href="/women/shoes">Shoes</Link>
                        </MenuItem>
                        <MenuItem _hover={{ bg: 'gray.700' }} py={2} px={4} >
                            <Link href="/women/accessories">Accessories</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Link} mx={2} fontWeight="bold">
                        Kids
                    </MenuButton>
                    <MenuList bg="gray.900" width="100%">
                        <MenuItem _hover={{ bg: 'gray.700' }} py={2} px={4} >
                            <Link href="/kids/clothing">Clothing</Link>
                        </MenuItem>
                        <MenuItem _hover={{ bg: 'gray.700' }} py={2} px={4} >
                            <Link href="/kids/shoes">Shoes</Link>
                        </MenuItem>
                        <MenuItem _hover={{ bg: 'gray.700' }} py={2} px={4} >
                            <Link href="/kids/accessories">Accessories</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box display="flex"flexDirection="column" alignItems="center" width="100%" marginTop="5%">
               <Box witdh="100%">{token ? <Button onClick={handleLogOut}>Log Out</Button> : <Button onClick={handleLogin}>Log In</Button>}</Box> 
               <Box marginTop="5%" width="10%" display="flex" alignItems="center" just ><Link href="/cart"><AiOutlineShoppingCart size="100%" /></Link></Box>
            </Box>
        </Box>
    )
}

export default Sidebar
