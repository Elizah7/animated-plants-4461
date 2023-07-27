import { Toast, useToast } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Components/NewNavbar';
import styles from './ProductDetail.module.css'

import { useNavigate } from 'react-router-dom';
import { addCart } from '../Redux/Cartrr/cartaction';

const ProductDetail = ({ pro }) => {
 console.log(pro)
    const dispatch = useDispatch()
    const toast = useToast()
    const fashiontoken = JSON.parse(localStorage.getItem("fashionmantra"))|| null
    const navigate = useNavigate()
    const handleCart = (e) => {
        e.preventDefault();
        if(fashiontoken){
            dispatch(addCart(pro))
            
            .then((res)=>{
                console.log(res)
                if(res.payload){
                    toast({
                        title: 'Product Added to Cart successfully',
                        description: "",
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                    })
                }
                else{
                    toast({
                        title: 'Sorry you have to login first',
                        description: "",
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                    })
                    navigate("/login")
                }
            })
        }
    }

    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.images}>
                    <div>
                        <img src={pro?.images?.image1} alt="" />
                    </div>
                    <div>
                        <img src={pro?.images?.image2} alt="" />
                    </div>
                    <div>
                        <img src={pro?.images?.image3} alt="" />
                    </div>
                    <div>
                        <img src={pro?.images?.image4} alt="" />
                    </div>
                </div>
                <div className={styles.details}>
                    <h3 >{pro?.brand?.brand}</h3>
                    <p>{pro?.title?.title}</p>
                    <p>Rating:-{pro?.rating?.rating} <span>Review:-{pro?.count?.count}</span> </p>
                    <div className={styles.divider}></div>
                    <h3>₹{pro?.price?.price} <span className={styles.off_price}>{pro?.off_price?.off_price} </span><span className={styles.dis}> {pro?.discount?.discount}% off</span></h3>
                    <h5>Select Size</h5>
                    <div className={styles.buttons}>
                        <button>38</button>
                        <button>40</button>
                        <button>42</button>
                        <button>44</button>
                    </div>
                    <div className={styles.cartAdd}>
                        <button onClick={handleCart}>ADD TO BAG</button>
                    </div>
                    <div>
                        <p className={styles.discription}>
                            {pro?.description?.description}
                        </p>
                    </div>
                    <div>
                        <h5>Dilevery options</h5>
                        <input type="text" placeholder='Enter your pincode' />
                        <p className={styles.opt}>
                            100% Original Products
                            <br />
                            Pay on delivery might be available
                            <br />
                            Easy 30 days returns and exchanges
                            <br />
                            Try & Buy might be available
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail