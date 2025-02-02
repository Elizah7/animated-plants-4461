import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CartAddress from '../PagesA/CartAddress'
import { CartPayment } from '../PagesA/CartPayment'
import FinalPayment from '../PagesA/FinalPayment'
import Home from '../VPages/Home'
import Login from './Login'
import Mens from './Mens'
import ProductDetail from '../PagesT/ProductDetail'
import SinglePro from '../Components/CompnentsT/SinglePro'
import { SignupPage } from "../Upage/SignupPage";
import { LoginPage } from "../Upage/LoginPage";
import { AdminPage } from "../Upage/AdminPage"
import { AdminLogin } from "../Upage/AdminLogin"
import ProductList from '../Components/CompnentsT/ProductList'
import PrivateRoutes from '../Redux/PrivateRouts/PrivateRoutes'
import WomenProductList from '../Components/CompnentsT/WomenProductList'



const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/adminpage' element={<AdminPage />} />
            {/* <Route path='/menspage' element={<Mens />} /> */}
            {/* <Route path='/womensspage' element={<Womens />} /> */}
            <Route path='/men' element={<ProductList />} />
            <Route path='/women' element={<WomenProductList />} />
            <Route path='/men/:id' element={<SinglePro />} />
            <Route path='/women/:id' element={<SinglePro />} />
            <Route path='/checkout' element={<CartPayment />} />
            <Route path='/checkout/address' element={<PrivateRoutes><CartAddress /></PrivateRoutes>} />
            <Route path='/checkout/address/payment' element={<PrivateRoutes><FinalPayment /></PrivateRoutes>} />
        </Routes>
    )
}

export default AllRoutes
