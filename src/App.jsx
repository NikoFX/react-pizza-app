import React from 'react'
import { pizzasStore } from './zustand/pizzas-store'

function App() {

  const { pizzas, checkoutList, addToCheckout, emptyCheckoutList, searchPizza } = pizzasStore()
  let totalPrice = checkoutList?.reduce((acc, curr) => (acc + curr.price), 0)

  const addHandle = (pizza) => {
    addToCheckout(pizza)
  }

  const searchHandle = (e) => {
    searchPizza(e.target.value)
  }

  return (
    <div className="container">
      <div className="search">
        <input type="text" className="search__input" onChange={searchHandle} placeholder='search pizza...'/>
      </div>
      <div className="main">
        {pizzas?.map(pizza => (
          <div className="card" key={pizza.id}>
            <img src={pizza.img} alt="img" className="card__img" />
            <div className="card__info">
              <h3 className="card__name">{pizza.name}</h3>
              <div className="card__footer">
                <p className="card__price">{pizza.price}AZN</p>
                <button className='btn-primary' onClick={() => addHandle(pizza)}>ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        checkoutList.length ? (
          <div className="checkout">
            <h2 className='checkout__header'>Checkout</h2>
            <ul className="checkout-list">
              {checkoutList?.map(pizza => (
                <li className="checkout-card" key={pizza.id}>
                  <img src={pizza.img} alt="img" className="checkout-card__img" />
                  <div className="checkout-card__info">
                    <h3 className="checkout-card__name">{pizza.name}</h3>
                    <p className="checkout-card__price">{pizza.price} AZN</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="checkout-footer">
              <button className="btn-primary" onClick={emptyCheckoutList}>Empty list</button>
              <p className="totalprice">Total: {totalPrice} AZN</p>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}

export default App