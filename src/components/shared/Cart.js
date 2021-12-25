import React,{ useContext } from 'react';

//styles
import styles from './Cart.module.css'

//context
import { CartContext } from '../../context/CartContextProvider';

//helper
import {shorten} from '../../helper/functions'

//icons
import trash from '../../assets/icons/trash.png'

const Cart = ({data}) => {

    const {image,title,price,quantity} = data
    const {dispatch} = useContext(CartContext)


    return (
        <div className={styles.container}>
           <img className={styles.productImage} src={image} alt="product"/>
           <div className={styles.data}>
               <h3>{shorten(title)}</h3>
               <p>{price} $</p>
           </div>
           <div>
                <span className={styles.quantity}>{quantity}</span>
           </div>
           <div className={styles.buttonContainer}>
               {
                   quantity > 1 ? <button onClick={()=> dispatch({type:"DECREASE" , payload:data})}>-</button>
                   :
                   <button onClick={()=> dispatch({type:"REMOVE_ITEM" , payload:data})}><img src={trash} alt="trash" style={{width:"15px"}}/></button>
               }
               <button onClick={()=> dispatch({type:"INCREASE" , payload:data})}>+</button>
           </div>

         
        </div>
    );
};

export default Cart;