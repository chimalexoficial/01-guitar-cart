import Header from './components/Header';
import Guitar from './components/Guitar';
import useCart from './hooks/useCart';


function App() {

  const {data, cart, addToCart, removeFromCart, clearCart, decreaseQuantity, increaseQuantity, cartTotal, isEmpty} = useCart();

  



  return (
    <>
      <Header
       cartProp={cart}
       removeFromCart={removeFromCart}
       increaseQuantity={increaseQuantity}
       decreaseQuantity={decreaseQuantity}
       clearCart={clearCart} 
       cartTotal={cartTotal}
       isEmpty={isEmpty}/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Our Collection</h2>

        <div className="row mt-5">
          {data.map(guitarItem => (
            <Guitar
              key={guitarItem.id}
              guitarProp={guitarItem}
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

export default App;
