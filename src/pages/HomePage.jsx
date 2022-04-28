import React from 'react'
import logoap from '../images/logoApplergicFinal@3x.png'
import buscar from '../images/Buscar.png'
import sos from '../images/Sos.png'
import escan from '../images/Escanear.png'
import info from '../images/gris@3x.png'
import favoritoF from '../images/favoritoF.png'
import homeF from '../images/homeF.png'
import redF from '../images/redF.png'
import diarioF from '../images/diarioF.png'
import sosLogo from '../images/sosLogo.png'
import barcodeLogo from '../images/barcodeLogo.png'
import buscarLogo from '../images/buscarLogo.png'

import './HomePage.scss'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='contain'>
    <div className='header'>
      <img className='img-header' src = {info} alt='info'></img>
    </div>
    <div>
    <img className='img-logo' src = {logoap} alt = 'logo'></img>   
    </div>
    <div>     
    <Link to = '/Scanner'><img className='img-btn' src = {escan} alt = 'escan'></img></Link>  
      <img className='img-btn-logo' src = {barcodeLogo} alt = 'escan'></img>
    <p>Escanea un nuevo producto</p> 

   </div>
   <div> 
   <img className='img-btn' src = {buscar} alt = 'buscar'></img>
   <img className='img-btn-logo' src = {buscarLogo} alt = 'buscar'></img>
   <p>Busca un comercio o restaurante para ti.</p> 

   </div>
    <div>
      <img className='img-btn' src = {sos} alt = 'sos'></img>
      <img className='img-btn-logo' src = {sosLogo} alt = 'sos'></img>
    <p>¿Necesitas ayuda urgente? Contactamos con emergencias</p> 

    </div>
    <div className='footer'>
      <img className='footer-item'src={homeF} alt='logo'></img>
      <img className='footer-item'src={favoritoF} alt='logo'></img>
      <img className='footer-item'src={diarioF} alt='logo'></img>
      <img className='footer-item' src={redF} alt='logo'></img>
    </div>
    
    </div>

  )
}

export default HomePage