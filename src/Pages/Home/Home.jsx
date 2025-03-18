import { useState } from 'react'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Header from '../../Components/Header/Header'
import './home.css'
import FoodDisplay from '../../Components/Food Display/FoodDisplay'
import AppDownload from '../../Components/App Download/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <div className='home'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
