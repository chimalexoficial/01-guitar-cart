

function Header({ cartProp }) {
  console.log(cartProp);

  // derivative state
  const isEmpty = () => (cartProp.length === 0);
  const cartTotal = () => cartProp.reduce((total, item) => total + (item.quantity * item.price), 0);



  return <>
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" src="./img/logo.svg" alt="logo" />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="cart">
              <img className="img-fluid" src="./img/cart.png" alt="cart" />

              <div id="cart" className="bg-white p-3">

                {isEmpty() ? <p className="text-center">Cart is empty</p> : <>
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartProp.map(guitarItem => {
                          const { id, image, name, price, quantity } = guitarItem;
                          return (
                            <tr key={id}>
                              <td>
                                <img className="img-fluid" src={`./img/${image}.jpg`}
                                  alt="guitar" />
                              </td>
                              <td>{name}</td>
                              <td className="fw-bold">
                                {`$ ${price}`}
                              </td>
                              <td className="flex align-items-start gap-4">
                                <button type="button" className="btn btn-dark">
                                  -
                                </button>
                                {quantity}
                                <button type="button" className="btn btn-dark">
                                  +
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-danger" type="button">
                                  X
                                </button>
                              </td>
                            </tr>)

                        })
                      }

                    </tbody>
                  </table>
                  <p className="text-end">Total: <span className="fw-bold">${cartTotal()}</span>
                  </p>
                </>}


                <button className="btn btn-dark w-100 mt-3 p-2">Empty cart</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </>
}

export default Header;