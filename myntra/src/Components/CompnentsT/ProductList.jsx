import React from 'react';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getProduct } from '../../Redux/Products/actions';
import { ProductCard } from './ProductCard';
import styles from './Product.module.css';
import Sidebar from './Sidebar';
import { useLocation, useSearchParams } from 'react-router-dom';
import Filters from './Filters';
import Navbar from '../NewNavbar';
import axios from 'axios';

import { Box } from '@chakra-ui/react';
import Footer from '../../VPages/Footer';
const ProductList = () => {

    const dispatch = useDispatch();
    const products = useSelector((store) => store.reducer.products);

   console.log(products && products.Data)
    const isLoading = useSelector((store) => store.productDatareducer.isLoading)
    const location = useLocation();
    const [searchParams] = useSearchParams()
    let mendata = products && products.Data && products.Data.filter(ele=>ele.gender=="men")
    useEffect(() => {
        let paramObj = {
            params: {
                color: searchParams.getAll('color')
            }
        }
        dispatch(getProduct(paramObj))
    },[location.search])

    if(isLoading) {
        return (
                <>
                    <div className={styles.loading}>
                        <img src="https://cdn.dribbble.com/users/1018473/screenshots/3963419/loader.gif" alt="" />
                    </div>
                </>
            )
    }
  return (
    <>
    <Navbar />
        <Filters />
    <Sidebar />
    <div className={styles.productList}>
        {
          mendata && mendata.length>0 && mendata.map(ele=> <ProductCard {...ele}/>)
        }
    </div>
    <Box>
        <Footer/>
    </Box>
    </>
  )
}

export default ProductList