import React, { useState,useContext } from 'react'
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    
   

    const isInCart = (id) =>{
        return cart.find(product => product.id == id) ? true : false
    }
    const addProduct = (item,quantity)=>{
       if (isInCart(item.id)) {
            setCart(cart.map(product =>{
                alert('Cantidad de producto actualizado a ' + quantity)
                return product.id === item.id ? {... product, quantity: quantity} : product
            }))
            
       } else {
            setCart([...cart,{...item,quantity}])
            alert('Producto agregado al carrito')
       }
    }

    const removeProduct = (id) =>{
        setCart(cart.filter(product=>product.id !== id)) 
    }

    const clearCart = () => {
        alert("Compra realizada con éxito")
        setCart([])
    }
    const totalPrice = () => {
        return cart.reduce((pre,act) => pre + (act.precio*act.quantity),0)
    }

    const total = totalPrice()

    console.log(total)

    
    
    
    
   
    

    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            total,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;