import React from 'react'
import BarcodeScannerComponent from 'react-qr-barcode-scanner'
import './BarcodeScanner.scss'
import barras from '../images/codigodebarras.png'

const BarcodeScanner = () => {
    const [data, setData] = React.useState("Not Found");
  return (
      <div className='webcam'>
      <h1>Escaneando...</h1>
      <div className='parrafo'>
      <p>Tan sólo tienes que centrar el <strong>código de barras</strong> del producto en el recuadro.</p>

      </div>
    <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          
          if (result){
            setData(result.text);
            console.log(result.text)

          } 
         
        }}
      />
      {console.log ('codigo capturado.....', data)}
      <div className='contain-bola'>
         <div className='bola'>
          <img className='bola-img' src = {barras} alt = 'barras'></img>
         </div>
         <p>{data}</p>
      </div>
      </div>
  )
}

export default BarcodeScanner