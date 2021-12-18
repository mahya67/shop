import './App.css';
import { Redirect, Route , Switch } from 'react-router';
//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
   
     <ProductContextProvider>

         <CartContextProvider>

            <Switch>
               <Route path="/products/:id" component={ProductDetails}/>   
               <Route path="/products" component={Store}/> 
               <Redirect to="/products" />

            </Switch>
            
        </CartContextProvider>
        
      
     </ProductContextProvider>
       

  
  );
}

export default App;
