import { useState, useEffect, useMemo } from 'react'
import { db } from '../data/db';



const useCart = () => {

    const [data, setData] = useState(db);
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        // const guitarExists2 = cart.includes(item);
        // console.log(guitarExists2);
        const guitarExists = cart.findIndex(guitar => guitar.id === item.id);
        console.log(guitarExists);

        if (guitarExists >= 0) { //exists in cart?
            const updatedCart = [...cart];
            updatedCart[guitarExists].quantity++;
            setCart(updatedCart);
        } else { // -1? not exist
            item.quantity = 1;
            setCart([...cart, item]);
        }

    }

    // useEffect(() => {
    //   console.log('Component ready, populating db');
    //   setData(db)
    //   console.log('DB populated');
    // }, []);

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(guitarItem => guitarItem.id !== id));
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item;
        })
        setCart(updatedCart);
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item;
        })
        setCart(updatedCart);
    }

    function clearCart() {
        setCart([]);
    }

      // derivative state
  // const isEmpty = () => (cartProp.length === 0);
  const isEmpty = () => useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);

    return {
        data, 
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseQuantity,
        increaseQuantity,
        isEmpty,
        cartTotal
    }
}

export default useCart;