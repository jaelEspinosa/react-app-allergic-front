import { useContext } from "react"
import { MostrarContext } from "../context/MostrarContext"
import './HamburguerMenu.scss'
import perfil from "../images/perfilMenu.png"
import salir from "../images/salirMenu.png"
import compartir from "../images/compartirMenu.png"
import favorito from "../images/favoritoMenu.png"
import terminos from "../images/terminosMenu.png"
import traductor from "../images/traductorMenu.png"
import diario from "../images/diarioMenu.png"
import { Link } from "react-router-dom"




const HamburguerMenu = () => {
    const {mostrar, setMostrar}=useContext(MostrarContext)
   return (
       <div className="hamburger">
        <p className="x" onClick={()=>setMostrar(false)}>X</p>
        
        <ul>
        <li><img className="img-item" src={perfil} alt='perfil'></img></li>
        <li><img className="img-item" src={favorito} alt='favorito'></img></li>
        <li><Link to = '/diary'><img className="img-item" src={diario} alt='diario'></img></Link></li>
        <li><img className="img-item" src={compartir} alt='compartir'></img></li>
        <li><img className="img-item" src={traductor} alt='traductor'></img></li>
        <li><img className="img-item" src={terminos} alt='terminos'></img></li>
        <li><img className="img-item" src={salir} alt='salir'></img></li>

        </ul>
       
           
       </div>
   )

}
 


export default HamburguerMenu