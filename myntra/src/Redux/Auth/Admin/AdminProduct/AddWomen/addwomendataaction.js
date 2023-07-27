import axios from 'axios'
import { ADDWOMENPRODFAILURE, ADDWOMENPRODREQUST, ADDWOMENPRODSUCCESS } from './addwomendataactiontype'


const addwomenaction = (params)=>(dispatch) => {
      dispatch({type:ADDWOMENPRODREQUST})
      axios.post("http://localhost:8000/products/",params)
      .then(res=>dispatch({type:ADDWOMENPRODSUCCESS,payload:res.data}))
      .catch(err=>dispatch({type:ADDWOMENPRODFAILURE}))
}

export default addwomenaction
