import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ProductDetail from '../../PagesT/ProductDetail';
import { getSingleProduct } from '../../Redux/Products/actions';
import Footer from '../../VPages/Footer';
import { Box } from '@chakra-ui/react';

const SinglePro = () => {
    const {id} = useParams();
    const product = useSelector((store) => store.singleprodreducer.product);

    const dispatch = useDispatch()
    console.log(id,product && product)
    useEffect(() => {
        dispatch(getSingleProduct(id))
    },[]);


  
  return (<>
    <div>
        <h1>
            <ProductDetail pro={product && product.Data && product.Data} />
        </h1>
    </div>
      <Box>
        <Footer/>
    </Box>
    </>
  )
}

export default SinglePro