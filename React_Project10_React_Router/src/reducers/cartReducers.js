"use strict"
//CART REDUCERS
export function cartReducers(state = { cart: [] },
    action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                //cart: [...state, ...action.payload]
                ...state,
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQuantity : totals(action.payload).quantity
            }
            break;
        case "DELETE_CART_ITEM":
            return {
                ...state,
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQuantity : totals(action.payload).quantity
            }
            break;
        case "UPDATE_CART":
            //current cart array
            const currentBookToUpdateInCart = [...state.cart];

            //determine the book index to delete
            const indexToUpdate = currentBookToUpdateInCart.findIndex(
                function (book) {
                    return book._id === action._id;
                })

            const newBookToUpdate = {
                ...currentBookToUpdateInCart[indexToUpdate],
                quantity: currentBookToUpdateInCart[indexToUpdate].quantity + action.unit
            }

            let cartUpdate = [...currentBookToUpdateInCart.slice(0, indexToUpdate), newBookToUpdate,
            ...currentBookToUpdateInCart.slice(indexToUpdate + 1)]

            return {
                ...state,
                cart: cartUpdate,
                totalAmount: totals(cartUpdate).amount,
                totalQuantity : totals(cartUpdate).quantity
            }
            break;
    }
    return state
}
//-------------------------------------------

export function totals(payloadArr) {
    const totalAmount = payloadArr.map(function (cartArr) {
        return cartArr.price * cartArr.quantity;
    }).reduce(function (a, b) {
        return a + b;
    }, 0); //start sum from the index 0

    const totalQuantity = payloadArr.map(function (item) {
        return item.quantity;
    }).reduce(function (x, y) {
        return x + y;
    }, 0);

    return { amount: totalAmount.toFixed(2), quantity: totalQuantity};
}