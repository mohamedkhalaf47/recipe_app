import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './foodItem.css'
import { storeContext } from '../../Context/ShopContext'

const FoodItem = ({ id,name,price,description,image }) => {

  const {cartItems,addToCart,removeFromCart} = useContext(storeContext)

  return (
    <div className='foodItem'>
      <div className="foodItem-img-container">
        <img className='foodItem-img' src={image} alt="" />
        { !cartItems[id]
          ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
          :
          <div className='foodItem-counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="foodItem-info">
        <div className="foodItem-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='foodItem-description'>{description}</p>
        <p className='foodItem-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
