import '../Landing/style.css'
import gradientPic from '../../assets/images/gradient 1.png'
import phonePic from '../../assets/images/phone 1.png'
import Button from '../common/button/index'
const LandingCom = () => {
  return (
    <div className="landing-com">
        <div className='left-div'>
            <p className='left-div-para'>Track Cypto Real Time.</p>
            <p>Track cypto through a public api in real time. Visit te dashboard to do so!</p>
            <Button content="Dashboard"/>
            <Button content="Share App"/>      
        </div>
        <div>
            <img className="phone" src={phonePic} alt="phone pic"/>
            <img className="gradient" src={gradientPic} width="250" height="500" alt="Gradient pic"/> 
        </div>
    </div>
  )
}
export default LandingCom
