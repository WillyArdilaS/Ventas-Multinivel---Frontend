import React, { useState,useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) =>{
    const [shoppingMade, setShoppingMade] = useState(false)
    const [cart, setCart] = useState([]);

    const isInCart = (id) =>{
        return cart.find(product => product.id == id) ? true : false
    }

    const addProduct = (item,quantity)=>{
        if(quantity > 0) {
            if (isInCart(item.id)) {
                setCart(cart.map(product =>{
                    alert('Cantidad de producto actualizado a ' + quantity)
                    return product.id === item.id ? {... product, quantity: quantity} : product
                }))
                
           } else {
                setCart([...cart,{...item,quantity}])
                alert('Producto agregado al carrito')
           }
        } else {
            alert('Debe agregar al menos 1 producto')
        }
    }

    const removeProduct = (id) =>{
        setCart(cart.filter(product=>product.id !== id)) 
    }

    const confirmPurchase = () => {
        setCart([])
        setShoppingMade(true)
        alert("Compra realizada con éxito")
    }

    const cancelPurchase = () => {
        setCart([])
        alert("Compra cancelada")
    }

    const processEnd = () => {
        setShoppingMade(false)
    }

    const totalPrice = () => {
        return cart.reduce((pre,act) => pre + (act.precio*act.quantity),0)
    }

    const total = totalPrice()

    return(
        <CartContext.Provider value={{
            confirmPurchase,
            cancelPurchase,
            isInCart,
            removeProduct,
            addProduct,
            total,
            cart, 
            shoppingMade, 
            processEnd
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;