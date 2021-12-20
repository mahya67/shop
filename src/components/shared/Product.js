import React , { useContext} from 'react';
import { Link } from 'react-router-dom';
//helper
import { shorten , isIncart , productQuantity } from '../../helper/functions';


//context
import { CartContext } from '../../context/CartContextProvider';


const Product = ({productInfo}) => {

    const {state , dispatch} = useContext(CartContext)


    return (
        <div>
            <img src={productInfo.image} alt="product" style={{width:"150px"}}/>
            <h3>{shorten (productInfo.title)}</h3>
            <p>{productInfo.price}</p>
            <div>
                <Link to={`/products/${productInfo.id}`}>Details</Link> 
                   <div>
                   {
                        isIncart(state , productInfo.id)
                         ?
                        <button onClick={()=>dispatch({type:"INCREASE" , payload : productInfo})} >+</button>
                        :
                         <button onClick={() => dispatch({type:"ADD_ITEM", payload:productInfo})}>Add Item</button>

                   } 
                   {
                       productQuantity(state , productInfo.id) === 1 && <button onClick={()=> dispatch({type:"REMOVE_ITEM" , payload:productInfo})}>Remove</button>
                   }
                   {
                       productQuantity(state , productInfo.id) > 1 && <button onClick={()=>dispatch({type:"DECREASE" , payload:productInfo})}>-</button>

                   }
                   
                   </div>
                   
             </div>
         
        </div>
    );
};

export default Product;