// Cart context to manage cart state

import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

// Reducer logic to handle cart actions
function cartReducer(state, action) {
    // update state to add meal item
    if (action.type === 'ADD_ITEM') {
        const existingItemIndex = state.items.findIndex(
            (item) => {
                console.log(item);
                return item.id === action.item.id
            }
        );

        //console.log(state.items);

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
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )

        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItem = [...state.items]

        if (existingCartItem.quantity === 1) {
            updatedItem.splice(existingCartItemIndex, 1)
        } else {
            const updatedIttem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }
            updatedItem[existingCartItemIndex] = updatedItem;
        }

        return {...state,
            items: updatedItem
        }

    }

    return state;
}

export function CartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

    function addItem(item) {
        dispatchCartAction({type: 'ADD_ITEM', item: item});
    }

    function removeItem(id) {
        dispatchCartAction({type: 'REMOVE_ITEM', id})
    }

    const cartContext = {
        items: cart.items,
        addItem: addItem,
        removeItem: removeItem
    }

    //console.log(cartContext);

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartContext;