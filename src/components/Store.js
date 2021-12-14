import React,{ useContext } from 'react';

//components
import Product from './shared/Product';

//context
import  {ProductsContext}  from '../context/ProductContextProvider';

const Store = () => {
    const products = useContext(ProductsContext)
    return (
        <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
            {products.map (product => <Product key={product.id} productInfo={product} />)}
        </div>
    );
};

export default Store;