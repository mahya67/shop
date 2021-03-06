import './App.css';
import { Redirect, Route , Switch } from 'react-router';
//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';


function App() {
  return (
   
     <ProductContextProvider>

         <CartContextProvider>
            <Navbar/>
            <Switch>
               <Route path="/products/:id" component={ProductDetails}/>   
               <Route path="/products" component={Store}/> 
               <Route path="/cart" component={ShopCart}/>
               <Redirect to="/products" />

            </Switch>
            
        </CartContextProvider>
        
      
     </ProductContextProvider>
       

  
  );
}

export default App;
