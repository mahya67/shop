import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { ProductsContext } from '../context/ProductContextProvider';


const ProductDetails = (props) => {

    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, description, category, price} = product;


    return (
        <div>

          
             <img src={image} alt="product" />
            <div>
            <p>{description}</p>
            <div>
                <p><span>Category :</span> {category}</p>
                 <span>{price}$</span>
            </div>
             <Link to="/products">Back to Shop</Link>
            </div> 
            
        </div>
    );
};

export default ProductDetails;