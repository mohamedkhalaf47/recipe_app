import { assets } from '../../assets/assets'
import './appDownload.css'

const AppDownload = () => {
  return (
    <div className='appDownload' id='appDownload'>
      <p>For Better Experience Download <br />Tomato App</p>
      <div className="appDownload-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
