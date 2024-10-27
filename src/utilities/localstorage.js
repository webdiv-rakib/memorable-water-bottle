// it just check if there anything by cart name
const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

// to store item on cart
const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
// to add new item
const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveCartToLS(cart);
}

export {addToLS,getStoredCart,saveCartToLS}


