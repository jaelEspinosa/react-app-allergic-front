import { useEffect ,useRef} from "react";
import Swiper, { Navigation, Pagination, } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderComponent.scss";
import logo from '../images/appalergic3x.png'
import img1 from '../images/scan2@3x.png'
import img2 from '../images/rectangle@3x.jpg'
import img3 from '../images/ambulancia@3x.png'
import img4 from '../images/traduccioN@3x.jpg'
import { Link } from "react-router-dom";

export default function Slider({ slides }) {

  const swiperRef = useRef();
  
  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      // configure Swiper to use modules
      //   modules: [Navigation, Pagination],
      modules: [Pagination,Navigation],
      pagination: {
        el: ".swiper-pagination",
      },

      //   // Navigation arrows
      navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
         },
    });
  }, []);
  return (
    <div ref={swiperRef} className="c-slider swiper">
      <div className="swiper-wrapper">
        
      <div className="swiper-slide">
          <div className="card">
              <img className="logo" src ={logo} alt ="logo"></img>
              <img className="img-card" src ={img1} alt ="foto"></img>
              <div className="text-contain">
                <p>¡Bienvenido a <strong>Applergic!</strong></p>
                <p>Escanea el código de barras de
                tu producto y Applergic te dirá slide
                es apto para ti.</p>
              </div>
          </div>

      </div>
      <div className="swiper-slide">
      <div className="card">
              <img className="logo" src ={logo} alt ="logo"></img>
              <img className="img-card" src ={img2} alt ="foto"></img>
              <div className="text-contain">
                
                <p>LLeva tu Diario de compras y actividades</p>
              </div>
          </div>

      </div>
      <div className="swiper-slide">
      <div className="card">
              <img className="logo" src ={logo} alt ="logo"></img>
              <img className="img-card" src ={img3} alt ="foto"></img>
              <div className="text-contain">
                
                <p>En caso de emergencia nos pondremos
                en contacto con la persona que nos digas.</p>
              </div>
          </div>

      </div>
      <div className="swiper-slide">
      <div className="card">
              <img className="logo" src ={logo} alt ="logo"></img>
              <img className="img-card" src ={img4} alt ="foto"></img>
              <div className="text-contain">
                
                <p>Viaja a donde quieras.Tendrás a tu
                disposición un traductor off-line y tu 
                informe de laergias e intolerancias
                traducido al idioma local.</p>
              </div>
          </div>


      </div>
        
      </div>
      <div className="swiper-pagination"></div>
      
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div>
       <Link to = '/home'><p className="saltar">Saltar</p></Link> 
      </div>
    </div>
  );
}
