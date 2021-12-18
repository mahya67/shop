import React from 'react';
import { Link } from 'react-router-dom';
//helper
import { shorten } from '../../helper/functions';


const Product = ({productInfo}) => {
    return (
        <div>
            <img src={productInfo.image} alt="product" style={{width:"150px"}}/>
            <h3>{shorten (productInfo.title)}</h3>
            <p>{productInfo.price}</p>
            <div>
                <Link to={`/products/${productInfo.id}`}>Details</Link> 
                   <div>
                      <button>Add to card</button>
                   </div>
                   
             </div>
         
        </div>
    );
};

export default Product;