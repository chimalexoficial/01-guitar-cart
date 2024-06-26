

function Guitar({ guitarProp, addToCartProp }) {

  const { id, name, image, description, price } = guitarProp;


  return <>
    <div id={id} className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img className="img-fluid" src={`../img/${image}.jpg`} alt={name} />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">{`$ ${price}`}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addToCartProp(guitarProp)}>Add to cart</button>
      </div>
    </div>
  </>
}

export default Guitar;