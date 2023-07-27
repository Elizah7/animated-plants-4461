

import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import addmenproductaction from "../Redux/Auth/Admin/AdminProduct/AddMenData/addmendataaction"

import ProductDetails from './ProdDetails'
import { getmenData } from '../Redux/Auth/Admin/AdminProduct/MenProduct/getmendataaction'

import deletemenaction from '../Redux/Auth/Admin/AdminProduct/AddMenData/deletemenaction'
import { addmenamount, reducemenamount } from '../Redux/Auth/Admin/AdminProduct/AddMenData/menamount'
import ProductForm from './AddProd'


const Mendata = () => {
    const data = useSelector((store => store.menreducer.prod))
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getmenData())

    }, [])
    const addamount =(e,id,count,value)=>{
        e.preventDefault()

        console.log(value,id)
        dispatch(addmenamount(id,count,value))
    }
    const reduceamount =(e,id,count,value)=>{
        e.preventDefault()
        console.log(value,id)
        dispatch(reducemenamount(id,count,value))
    }
    return (
        <Stack>
            <Flex justifyContent="space-around" alignItems="center">
            <h3>ProductCount: {data && data.length}</h3>
            <Button onClick={onOpen}>Add Product</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter the Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ProductForm addprodaction={addmenproductaction}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
           
            </Flex>
            <SimpleGrid columns={[ 2, 3, 5, 6]} width="100%" gap={5}>
                {
                    data && data.map(ele => <ProductDetails key={ele.id + Math.random()} {...ele} deleteaction={deletemenaction} getdata={getmenData} addamount={addamount} reduceamount={reduceamount}/>)
                }
            </SimpleGrid>
        </Stack>
    )
}

export default Mendata
