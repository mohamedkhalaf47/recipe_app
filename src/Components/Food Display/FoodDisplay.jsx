import { useContext } from 'react';
import './foodDisplay.css';
import FoodItem from '../Food Item/FoodItem';
import { storeContext } from '../../Context/ShopContext';

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(storeContext)

  return (
    <div className='foodDisplay' id='food-display'>
      <h2>Top Dishes For You</h2>
      <div className="foodDisplay-list">
        {food_list.map((item,index)=>{
          if (category==="All" || category === item.category) {
            return(
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
            )
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
