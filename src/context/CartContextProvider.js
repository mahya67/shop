import React, { createContext , useReducer } from 'react';

export const CartContext = createContext()

const initialState = {
 selectedItems : [],
 cartCounter : 0,
 totla: 0,
 checkout : 0
}

const cartReducer = (state , action) => {
  
    switch (action.type){
        case "ADD_ITEM" :
            if ( !state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push ({
                    ...action.payload,
                    quantity : 1
                })

            return {
                ...state,
                selectedItems : [...state.selectedItems]
            }

            }
            case "REMOVE_ITEM" :
            const newSelectedItems = state.selectedItems.filter (item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems :[...newSelectedItems]
            }
            
            case "INCREASE" :
                const indexI = state.selectedItems.findIndex( item => item.id === action.payload.id);
                state.selectedItems [indexI].quantity++;
                
                return{
                    ...state,
                }

                case "DECREASE" :
                    const indexD = state.selectedItems.findIndex( item => item.id === action.payload.id)
                    state.selectedItems [indexI].quantity--; 
                    
                    return{
                        ...state
                    }
        }

}

const CartContextProvider = ({children}) => {

    const [state , dispatch] = useReducer (cartReducer , initialState)
    return (
        <div>
            <CartContext.Provider>
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartContextProvider;