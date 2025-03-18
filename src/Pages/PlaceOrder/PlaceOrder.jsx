import { useContext } from 'react'
import { storeContext } from '../../Context/ShopContext'
import './placeOrder.css'

const PlaceOrder = () => {

  const {getTotalCart} = useContext(storeContext)

  return (
    <form className='placeOrder'>
      <div className="placeOrder-left">
        <p className="title">Delivery Information</p>
        <div className="multiFields">
          <input type="text" placeholder='FirstName'/>
          <input type="text" placeholder='LastName'/>
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
        <div className="multiFields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multiFields">
          <input type="number" placeholder='ZIP Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="number" placeholder='Phone'/>
      </div>
      <div className="placeOrder-right">
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCart()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCart() === 0 ? 0:15}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCart() === 0 ? 0: getTotalCart()+15}</b>
              </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
