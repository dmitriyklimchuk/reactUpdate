import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (item) => {}
});

// Reducer logic to handle cart actions
function cartReducer(state, action) {
    // update state to add meal item
    if (action.type === 'ADD_ITEM') {
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingItemIndex > -1) {
            const existingItem = state.items[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems.push({
                ...action.item,
                quantity: 1
            });
        }

        return {

            ...state,
            items: updatedItems
        }

    }

    // update state to remove meal item
    if (action.type === 'REMOVE_ITEM') {
    }

    return state;
}

function CartContextProvider({children}) {
    useReducer(cartReducer, {items: []});

    return (
        <CartContext.Provider>{children}</CartContext.Provider>
    );
}

export default CartContext;