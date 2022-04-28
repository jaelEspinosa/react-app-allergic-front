import { useState } from "react"
import Slider from "../components/SliderComponent"
import WelcomeComponent from "../components/WelcomeComponent"


const WelcomePage = ()=>{
const [welcome, setWelcome]=useState(false)

setTimeout(() => {
  setWelcome(true)
},3000);

    return (
        <div>
       {!welcome && <WelcomeComponent/>}
       {welcome && <Slider/>} 
    </div>
    )
   
}

export default WelcomePage