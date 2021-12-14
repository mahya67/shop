import './App.css';

//context
import ProductContextProvider from './context/ProductContextProvider';
//components
import Store from './components/Store';

function App() {
  return (
   
     <ProductContextProvider>

        <Store />

     </ProductContextProvider>
       

  
  );
}

export default App;
