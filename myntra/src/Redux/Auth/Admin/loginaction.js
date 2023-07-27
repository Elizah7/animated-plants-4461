import axios from "axios"
import * as types from "./lginactiontype"
const adminloginaction = (data) =>(dispatch)=> {
    dispatch({type:types.GETADMINDATAREQUEST})
    return axios.post("https://amused-crab-singlet.cyclic.app/admin/login",data)
    .then(r=>dispatch({type:types.GETADMINDATASUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:types.GETADMINDATAFAILURE}))
}

export default adminloginaction
