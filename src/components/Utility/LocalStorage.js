const getStoragecart = () =>{
   const storedCartString =  localStorage.getItem('cart')
   if(storedCartString){
    return JSON.parse(storedCartString)
   }
   return [];
}

const saveCartToLocalStorage = cart =>{
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied)
}

const addToLS = id =>{
    const cart = getStoragecart();
    cart.push(id)
    saveCartToLocalStorage(cart);
}

export {addToLS} 