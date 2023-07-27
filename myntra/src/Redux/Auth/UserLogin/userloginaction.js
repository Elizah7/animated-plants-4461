

import axios from "axios"
import * as types from "./userloginactiontype"

  export const getlogindata = (data)=>(dispatch)=>{

    dispatch({type:types.GETLOGINDATAREQUEST})
    return axios.post("https://amused-crab-singlet.cyclic.app/user/login",data)
    .then(r=>dispatch({type:types.GETLOGINDATASUCCESS,payload:r.data}))
    .catch(err=>dispatch({type:types.GETLOGINDATAFALIURE,payload:err}))
          
    }
   


