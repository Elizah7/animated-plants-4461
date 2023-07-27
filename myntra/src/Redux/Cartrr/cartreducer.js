import React from 'react'
import { ADDCARTLOADING, ADDCARTLOADINGERROR, ADDCARTSUCCESS, GETCARTLOADING, GETCARTLOADINGERROR, GETCARTSUCCESS } from './actionType'

const init= {
    isloadin:false,
    iserror:false,
    data:""
}



export const cartreducer = (state=init,{type,payload}) => {
      switch (type){
         case ADDCARTLOADING:{
             return{
                ...state,
                isloadin:true,
             }
         }
         case ADDCARTLOADINGERROR:{
            return{
                ...state,
                isloadin:false,
                iserror:true,
            }
         }
         case ADDCARTSUCCESS:{
            return{
               ...state,
               isloadin:false,
               iserror:false,
               data:payload
      
      }
    }
    default:
        return state
}
}
const init2= {
    isloadin:false,
    iserror:false,
    data:""
}



export const getcartreducer = (state=init2,{type,payload}) => {
    console.log(payload)
      switch (type){
         case GETCARTLOADING:{
             return{
                ...state,
                isloadin:true,
             }
         }
         case GETCARTLOADINGERROR:{
            return{
                ...state,
                isloadin:false,
                iserror:true,
            }
         }
         case GETCARTSUCCESS:{
            return{
               ...state,
               isloadin:false,
               iserror:false,
               data:payload
      
      }
    }
    default:
        return state
}
}
