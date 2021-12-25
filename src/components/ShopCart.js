import React,{ useContext } from 'react';
import {Link} from 'react-router-dom'

//styles
import styles from './ShopCart.module.css'

//context
import { CartContext } from '../context/CartContextProvider';
//components
import Cart from './shared/Cart';

const ShopCart = () => {

    const {state , dispatch} = useContext(CartContext)
    return (
        <div className={styles.container}>
          <div className={styles.cartContainer}>
              {
                  state.selectedItems.map(item => <Cart key={item.id} data={item}/>)
              }
          </div>
              {
                   state.itemCounter > 0 && 
                     <div className={styles.payments}>

                       <p><span>Total Items:</span> {state.itemCounter}</p>
                       <p><span>Total Cost:</span> {state.total}</p>

                      <div className={styles.buttonContainer}>
                          <button className={styles.checkout} onClick={()=> dispatch({type:"CHECKOUT"})}>Check Out</button>
                          <button className={styles.clear} onClick={()=> dispatch({type:"CLEAR"})}>Clear</button>
                      </div>

                   </div>
              }
              {
                  state.checkout && 
                  <div className={styles.complete}>
                      <h3>Check Out Successfully</h3>
                      <Link to="/products">Buy More</Link>
                  </div>
              }
              {
                 !state.checkout && state.itemCounter === 0 && 
                 <div className={styles.complete}>
                     <p>Want to Buy?</p>
                     <Link to="/products">Go to Shop</Link>
                 </div>
              }
        </div>
    );
};

export default ShopCart;