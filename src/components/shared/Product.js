import React from 'react';
//helper
import { shorten } from '../../helper/functions';


const Product = ({productInfo}) => {
    return (
        <div>
            <img src={productInfo.image} alt="product" style={{width:"150px"}}/>
            <h3>{shorten (productInfo.title)}</h3>
            <p>{productInfo.price}</p>
            <div>
                   <a href="#">Details</a> 
                   <div>
                      <button>Add to card</button>
                   </div>
                   
             </div>
         
        </div>
    );
};

export default Product;