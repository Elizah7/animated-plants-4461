import axios from 'axios'
import React from 'react'
import { ADDCARTLOADING, ADDCARTLOADINGERROR, ADDCARTSUCCESS, DELETECARTLOADING, DELETECARTLOADINGERROR, DELETECARTSUCCESS, GETCARTLOADING, GETCARTLOADINGERROR, GETCARTSUCCESS, UPDATECARTLOADING, UPDATECARTLOADINGERROR, UPDATECARTSUCCESS } from './actionType'


export const getCartData = () => (dispatch) => {
    dispatch({type:GETCARTLOADING});
    const token = JSON.parse(localStorage.getItem("fashionmantra")) || null
    const headers = {
        "Content-Type" : "application/json",
        "Authorization": token
    }
   return axios.get(`https://amused-crab-singlet.cyclic.app/cart`,{
    headers:headers
   }).then((res) => {
        dispatch({type:GETCARTSUCCESS,payload:res.data})
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:GETCARTLOADINGERROR,payload:err})
    })
}

export const addCart = (param) => (dispatch) => {
    dispatch({type:ADDCARTLOADING});
    const token = JSON.parse(localStorage.getItem("fashionmantra")) || null
    const headers = {
        "Content-Type" : "application/json",
        "Authorization": token
    }
   return axios.post(`https://amused-crab-singlet.cyclic.app/cart/add`,param,{
    headers:headers
   }).then((res) => {
        dispatch({type:ADDCARTSUCCESS,payload:res.data})
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:ADDCARTLOADINGERROR,payload:err})
    })
}

export const UpdateCartProductAction = (val, id)=>(dispatch)=>{
    const token = JSON.parse(localStorage.getItem("fashionmantra")) || null
    console.log("UpdateCartProductAction called");
    console.log(val,id)
    const headers = {
      Authorization : `${token}` 
    }
    const data = {
      count : val
    }
    console.log(headers,data);
    dispatch({type:  UPDATECARTLOADING})
    return axios({
      method: 'patch',
      url: `https://amused-crab-singlet.cyclic.app/cart/update/${id}`,
      data: data,
      headers: headers
    })
    .then((res)=>{
      console.log(res);
      dispatch({type: UPDATECARTSUCCESS})
    })
    .catch((err)=>{
      dispatch({type: UPDATECARTLOADINGERROR})
      console.log(err);
    })
    
  }


  
export const deleteCartProductAction =(id)=>(dispatch)=>{
    console.log("deleteCartProductAction called");  
    const token = JSON.parse(localStorage.getItem("fashionmantra")) || null
    const headers = {
      Authorization : `${token}` 
    }
  
    dispatch({ type: DELETECARTLOADING });
  
    return axios({
      method: 'delete',
      url: `https://amused-crab-singlet.cyclic.app/cart/delete/${id}`,
      headers: headers
    })
      .then((res) => {
        dispatch({ type: DELETECARTSUCCESS})
        console.log(res);
      })
      .catch((err) => {
        dispatch({ type: DELETECARTLOADINGERROR });
        console.log(err);
      });
  }