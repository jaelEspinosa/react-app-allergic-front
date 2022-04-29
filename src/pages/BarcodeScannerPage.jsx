import React from 'react'
import BarcodeScanner from '../components/BarcodeScanner'

const BarcodeScannerPage = () => {
  return <div>
    <h2>Escaneando...</h2>
<h3>Tan solo tienes que centrar el código<p>QR</p>del producto en el recuadro.Código de barras</h3>
    <BarcodeScanner/>
    
    </div>
  
}

export default BarcodeScannerPage