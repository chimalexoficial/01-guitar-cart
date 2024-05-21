import { useState, useEffect } from 'react'
import Header from './components/Header';
import Guitar from './components/Guitar';
import { db } from './data/db';


function App() {

  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    // const guitarExists2 = cart.includes(item);
    // console.log(guitarExists2);
    const guitarExists = cart.findIndex(guitar => guitar.id === item.id);
    console.log(guitarExists);

    if(guitarExists >= 0) { //exists in cart?
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
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity+1
        }
      }
      return item;
    })
    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if(item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity-1
        }
      }
      return item;
    })
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }



  return (
    <>
      <Header
       cartProp={cart}
       removeFromCart={removeFromCart}
       increaseQuantity={increaseQuantity}
       decreaseQuantity={decreaseQuantity}
       clearCart={clearCart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Our Collection</h2>

        <div className="row mt-5">
          {data.map(guitarItem => (
            <Guitar
              key={guitarItem.id}
              guitarProp={guitarItem}
              setCartProp={setCart}
              addToCartProp={addToCart}
            />
          ))}
        </div>

      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
