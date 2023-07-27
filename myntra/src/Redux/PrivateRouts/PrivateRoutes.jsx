import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'

import { useNavigate,Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
         const navigate = useNavigate() 
         const toast = useToast()
         const token = JSON.parse(localStorage.getItem("fashionmantra")) || null

         if(token){
              return children
         }

            toast({
                position: "center",
                title: 'First Log in',
                status: 'success',
                duration: 9000,
                isClosable: true,
            });
    // return navigate("/login")
   
}

export default PrivateRoutes
