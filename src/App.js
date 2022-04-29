import './App.css';

import Slider from './components/SliderComponent';
import RegistrationEnd from './components/RegistrationEnd';
import Valoration from './components/Valoration';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import BarcodeScannerPage from './pages/BarcodeScannerPage';
import EmergenciPage from './pages/EmergenciPage';

import LoginPage from './pages/LoginPage';
import RegistrationStart from './pages/RegistrationStartPage';
import { MostrarContext } from './context/MostrarContext';
import { useState } from 'react';

function App() {
  const [mostrar, setMostrar]=useState(false)
  return (
    <Router>
    <MostrarContext.Provider value = {{mostrar, setMostrar}}>
    <div className="App">
       <Routes>
         <Route path = '/' element = {<WelcomePage/>}/>
         <Route path = '/home' element = {<HomePage/>}/>
         <Route path = '/scanner' element = {<BarcodeScannerPage/>}/>
         <Route path = '/login' element = {<LoginPage/>}/>
         <Route path = '/create' element = {<RegistrationStart/>}/>
         <Route path = '/emergency' element = {<EmergenciPage/>}/>
         
      </Routes>
   
    
   

   
   
    </div>
    </MostrarContext.Provider>
    </Router>
  );
}

export default App;