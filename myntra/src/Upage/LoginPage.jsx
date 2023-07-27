import { FormControl, Input, Button, Spinner, useToast, Box, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import "./Signup.css"

import { Link, useNavigate } from 'react-router-dom'
import { getlogindata } from '../Redux/Auth/UserLogin/userloginaction'

const LoginPage = () => {
    const init = {
        email: "",
        password: "",
    }
    const [isloading, setIsloading] = useState(false)
    const [data, setData] = useState(init)
    const toast = useToast()


    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const navigate = useNavigate()
    const onSubmit = (e, data) => {
        e.preventDefault()
        setIsloading(true)
        dispatch(getlogindata(data))
            .then((res) => {
                console.log(res.payload.token)
                if (res.payload.token) {
                    toast({
                        position: "center",
                        title: 'Login successfull',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                    localStorage.setItem("fashionmantra", JSON.stringify(res.payload.token))
                    navigate("/")
                }
                else {
                    toast({
                        position: "center",
                        title: res.payload.msg,
                        // description: "We've created your account for you.",
                        status: 'warning',
                        duration: 9000,
                        isClosable: true,
                    })
                }
            })
       
        setData(init)
        setIsloading(false)
    }

    if (isloading) {
        return <>

            <form className='form2'>
                <Spinner className='spinner' thickness='4px' speed='0.65s' emptyColor='gray.200' color='gree.500' size='xl' />
            </form>
        </>
    }


    return (
        <Box width={["90vw", "90vw", "50vw", "50vw"]} display="flex" justifyContent="center" margin="auto">
            <form className='form2' onSubmit={(e) => onSubmit(e, data)}>
                <h1>Login here please</h1>
                <FormControl className='form-controll2'>

                    <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />

                    <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />

                </FormControl>
                <Button mt={4} colorScheme='teal' type='submit'>
                    Submit
                </Button>
                <Text>Don't have an account<Link to="/signup"> <Text color="blue">Click here</Text> </Link></Text>

            </form>
        </Box>
    )

}
export { LoginPage }