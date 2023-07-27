import React from 'react'
import Filters from '../Components/CompnentsT/Filters'
import ProductList from '../Components/CompnentsT/ProductList'
import Sidebar from '../Components/CompnentsT/Sidebar'

import ProductDetail from './ProductDetail'
import Navbar from '../Components/NewNavbar'

const Product = () => {
  return (
    <div>
     <Navbar/>
      <Filters />
      
        {/* <ProductList /> */}
        <ProductDetail />
    </div>
  )
}

export default Product