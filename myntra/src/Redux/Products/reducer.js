import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionType";



const initialState = {
    products: [],
    isLoading: false,
    isError: false

}

export const reducer = (state=initialState,{type,payload}) => {

    switch(type) {

        case GET_PRODUCT_REQUEST:
            return{...state,isLoading: true}

        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,products: payload}
            
        case GET_PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true}    

         default:
            return state;
    }

}





const initialState2 = {
    product: [],
    isLoading: false,
    isError: false

}

export const singleprodreducer = (state=initialState2,{type,payload}) => {

    switch(type) {

        case GET_SINGLE_PRODUCT_REQUEST:
            return{...state,isLoading: true}

        case GET_SINGLE_PRODUCT_SUCCESS:
            return {...state,isLoading:false,product: payload}
            
        case GET_SINGLE_PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true}    

         default:
            return state;
    }
}


