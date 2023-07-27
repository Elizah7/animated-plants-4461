import { FormControl, Input, Button, Spinner, useToast, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
import usersignupaction from '../Redux/Auth/UserSignup/usersignupaction'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  const init = {
    email: "",
    password: "",
    name: "",
    phone_number: "",
  }
  const [data, setData] = useState(init)
  const toast = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isloading, setIsloading] = useState(false)

  const handleChange = (e) => {
    const { name } = e.target
    let val = e.target.value
    setData({ ...data, [name]: val })
  }

  const onSubmit = (e, data) => {
    e.preventDefault()
    setIsloading(true)
    dispatch(usersignupaction(data))
      .then((res) => {
        console.log(res)
        if (res.payload.user) {
          toast({
            position: "top",
            title: 'Account created successfully',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          navigate("/login")
        } else {
          toast({
            position: "top",
            title: res.payload.msg,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      })
      setData(init)
      setIsloading(false)
   

  }

  if (isloading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <form className='form2'>
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
        </form>
      </Box>
    )
  }

  return (
    <Box className='container'>
      <form className='form' onSubmit={(e) => onSubmit(e, data)}>
        <h1>Create account here</h1>
        <FormControl className='form-controll'>

          <Input name='name' value={data.name} onChange={handleChange} className='input' type='text' placeholder="Enter your name" />

          <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />

          <Input name="phone_number" value={data.phone_number} onChange={handleChange} className='input' type='number' placeholder="Enter your phone number" />

          <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />

        </FormControl>
        <Button colorScheme='teal' type='submit' marginTop="4%">
          Submit
        </Button>
        <p>Already a user <Link to="/login" color="blue">Login here</Link></p>
        <Link to="/adminlogin" color="blue">Admin Login</Link>
      </form>
    </Box>
  )
}

export { SignupPage }

// Add CSS styles
