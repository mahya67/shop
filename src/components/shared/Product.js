import React , { useContext} from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from './Product.module.css'

//helper
import { shorten , isIncart , productQuantity } from '../../helper/functions';


//context
import { CartContext } from '../../context/CartContextProvider';

//icons
import trash from '../../assets/icons/trash.png'


const Product = ({productInfo}) => {

    const {state , dispatch} = useContext(CartContext)


    return (
        <div className={styles.container} >
            <img className={styles.cardImage} src={productInfo.image} alt="product" style={{width:"150px"}}/>
            <h3>{shorten (productInfo.title)}</h3>
            <p>{productInfo.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productInfo.id}`}>Details</Link> 
                   <div className={styles.buttonContainer}>
                   
                   {
                       productQuantity(state , productInfo.id) === 1 && <button className={styles.smallButton} onClick={()=> dispatch({type:"REMOVE_ITEM" , payload:productInfo})}><img src={trash} alt="remove" style={{width:"10px",height:"10px"}}/></button>
                   }
                   {
                       productQuantity(state , productInfo.id) > 1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"DECREASE" , payload:productInfo})}>-</button>

                   }
                   {
                       productQuantity(state , productInfo.id) > 0 && <span>{productQuantity(state,productInfo.id)}</span> 
                   }

                   {
                        isIncart(state , productInfo.id)
                         ?
                        <button className={styles.smallButton} onClick={()=>dispatch({type:"INCREASE" , payload : productInfo})} >+</button>
                        :
                         <button onClick={() => dispatch({type:"ADD_ITEM", payload:productInfo})}>Add Item</button>

                   } 
                   </div>
                   
             </div>
         
        </div>
    );
};

export default Product;