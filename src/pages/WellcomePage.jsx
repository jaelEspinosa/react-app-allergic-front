import { useState } from "react"
import Slider from "../components/SliderComponent"
import WelcomeComponent from "../components/WelcomeComponent"


const WellcomePage = ()=>{
const [wellcome, setWelcome]=useState(false)

setTimeout(() => {
  setWelcome(true)
},3000);

    return (
        <div>
       {!wellcome && <WelcomeComponent/>}
       {wellcome && <Slider/>} 
    </div>
    )
   
}

export default WellcomePage