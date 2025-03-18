import { menu_list } from '../../assets/assets'
import './exploreMenu.css'

const ExploreMenu = ({ category, setCategory }) => {

  return (
    <div className='exploreMenu' id='exploreMenu'>
      <h1>Explore Our Menu</h1>
      <p className='exploreMenu-text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Officia aspernatur veritatis aliquam 
        nam perspiciatis fuga cum ratione? Ipsam quibusdam perferendis dolore, 
        qui doloribus similique explicabo aliquid quasi asperiores corrupti nemo.
      </p>
      <div className="exploreMenu-list">
        {menu_list.map((item,i)=>{
          return (
            <div onClick={()=>setCategory(prev => prev === item.menu_name? "All" : item.menu_name)} key={i} className='exploreMenu-list-item'>
              <img className={category === item.menu_name? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
