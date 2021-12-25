import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from './Navbar.module.css'

//icons
import shopCart from '../../assets/icons/shopCart.png';

//context
import { CartContext } from '../../context/CartContextProvider';


const Navbar = () => {

    const {state} = useContext( CartContext )

    return (
         <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                  <Link to="/cart"><img src={shopCart} /></Link>
                  <span>{state.itemCounter}</span>
                 </div>
             </div>
         </div>
       
    );
};

export default Navbar;