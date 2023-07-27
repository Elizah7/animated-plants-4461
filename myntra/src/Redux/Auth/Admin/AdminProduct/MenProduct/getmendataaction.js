
import axios from "axios"
import { GETMENDATAERROR, GETMENDATALOADING, GETMENDATASUCCESS } from './getmendataactiontype'
export const getmenData = () =>(dispatch) => {
       dispatch({type:GETMENDATALOADING})
       axios.get("https://amused-crab-singlet.cyclic.app/product")
       .then(res=>dispatch({type:GETMENDATASUCCESS,payload:res.data}))
       .catch(err=>dispatch({type:GETMENDATAERROR}))
}