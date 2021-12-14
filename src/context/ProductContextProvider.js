import React,{ useState , useEffect , createContext } from 'react';
import {getproducts} from "../services/api"

export const ProductsContext = createContext ()


const ProductContextProvider = ({children}) => {

    const [products , setProducts] = useState ([])
    
    useEffect (() => {
       const fetchApi = async() => {
         setProducts (await getproducts())
       }
       fetchApi()
    } , [])



    return (
        <div>
             <ProductsContext.Provider value={products}>
                  {children}
             </ProductsContext.Provider>
        </div>
    );
};

export default ProductContextProvider;