import './App.css';

import Slider from './components/SliderComponent';

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

import { DataContext } from './context/DataContext';

import IngredientsSelectionPage from './pages/IngredientsSelectionPage';
import IngredientsPage from './pages/IngredientsPage';
import ScanResultsPage from './pages/ScanResultsPage';
import RegistrationEndPage from './pages/RegistrationEndPage';
import DiaryPage from './pages/DiaryPage';
import { ProductContext } from './context/ProductContext';



function App() {
  const [data, setData] = useState("Not Found");
  const [mostrar, setMostrar]=useState(false);
  const [product, setProduct]=useState([]);
  return (
    <Router>
    <DataContext.Provider value ={{data, setData}}>
    <MostrarContext.Provider value = {{mostrar, setMostrar}}>
    <ProductContext.Provider value = {{product, setProduct}}>
    <div className="App">
       <Routes>
         <Route path = '/' element = {<WelcomePage/>}/>
         <Route path = '/home' element = {<HomePage/>}/>
         <Route path = '/scanner' element = {<BarcodeScannerPage/>}/>
         <Route path = '/login' element = {<LoginPage/>}/>
         <Route path = '/create' element = {<RegistrationStart/>}/>
         <Route path = '/emergency' element = {<EmergenciPage/>}/>
         <Route path = '/IngredientsSelec' element = {<IngredientsSelectionPage/>}/>
         <Route path = '/Ingredients' element = {<IngredientsPage/>}/>
         <Route path = '/scanner/results' element = {<ScanResultsPage/>}/>
         <Route path = '/registerend' element = {<RegistrationEndPage/>}/>
         <Route path = '/diary'element = {<DiaryPage/>}/>
      </Routes>
   
      
   

   
   
    </div>
    </ProductContext.Provider>
    </MostrarContext.Provider>
    </DataContext.Provider>
    </Router>
  );
}

export default App;