import React from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

export const ProductCard = ( item ) => {

  return (   
    <Link to={`${item._id}`}>
      <div className={styles.card}  >
        <img src={item.images.image1} alt="" />
        <div className={styles.brand}>
          <h5>{item.brand}</h5>
          <p>{item.title}</p>
        </div>
        <div className={styles.price}>
          <h6>Rs. {item.price} <span className={styles.offPrice}>{item.off_price}</span> </h6>
        </div>
        {/* <Link to="./productlist/singlepage">
          <div className={styles.wishlist}>
            <button>Add to Cart</button>
          </div>
        </Link> */}
      </div>
    </Link>
  )
}
