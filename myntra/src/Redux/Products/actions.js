import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionType"
import axios from 'axios'

export const getProductRequestAction = () => {
    return {type:GET_PRODUCT_REQUEST}
}

export const getProductSuccessAction = (payload) => {
    return {type:GET_PRODUCT_SUCCESS,payload}
}

export const getProductFailureAction = () => {
    return {type:GET_PRODUCT_FAILURE}
}

export const getSingleProduct = (id) => (dispatch) => {
    console.log(id)
    dispatch({type:GET_SINGLE_PRODUCT_REQUEST});
   return  axios.get(`https://amused-crab-singlet.cyclic.app/product/singleproduct/${id}`).then((res) => {
        dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:res.data},console.log(res.data))
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:GET_SINGLE_PRODUCT_FAILURE,payload:err})
    })
}

export const getProduct = (param) => (dispatch) => {
    dispatch(getProductRequestAction());
   return axios.get(`https://amused-crab-singlet.cyclic.app/product`,param).then((res) => {
        dispatch(getProductSuccessAction(res.data))
    })
    .catch((err) => {
      console.log(err)
      dispatch(getProductFailureAction())
    })
}



