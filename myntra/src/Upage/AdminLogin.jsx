import {
    FormControl,
    Input,
    Button,
    Spinner,
    useToast
  } from '@chakra-ui/react'
  import { useState } from 'react'
  import { useDispatch, useSelector } from "react-redux"
  import { useNavigate } from 'react-router-dom'
  import "./Signup.css"
  import adminloginaction from '../Redux/Auth/Admin/loginaction'
  
  const AdminLogin = () => {
    const init = {
      email: "",
      password: "",
    }
    const [data, setData] = useState(init)
    const toast = useToast();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isloading = useSelector(store => store.adminloginreducer.isloading)
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setData({ ...data, [name]: value })
    }
    const onSubmit = (e, data) => {
      e.preventDefault()
      dispatch(adminloginaction(data))
        .then((res) => {
          if (res.payload.token) {
            toast({
              position: "center",
              title: res.payload.msg,
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
            localStorage.setItem("admintoken", JSON.stringify(res.payload.token))
            navigate("/adminpage")
          } else {
            toast({
              position: "center",
              title: 'Email or Password is incorrect',
              description: "We can not let you in",
              status: 'warning',
              duration: 9000,
              isClosable: true,
            })
          }
        })
  
      setData(init)
    }
  
    return (
      <div className='container'>
        <form className='form2' onSubmit={(e) => onSubmit(e, data)}>
          <h2>Admin's Login</h2>
          <FormControl className='form-controll2'>
  
            <Input name="email" value={data.email} onChange={handleChange} className='input' type='email' placeholder="Enter your email" />
  
            <Input name="password" value={data.password} onChange={handleChange} className='input' type='password' placeholder="Enter your password" />
  
          </FormControl>
          <Button mt={4} colorScheme='teal' type='submit'>
            Submit
          </Button>
  
        </form>
      </div>
    )
  }
  
  export { AdminLogin }
  
  // Add CSS styles
  