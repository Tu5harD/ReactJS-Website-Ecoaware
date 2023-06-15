import React from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Soil from './Componets/Soil';
import Home from './Componets/Home';
import Water from './Componets/Water';
import Air from './Componets/Air';
import Noise from './Componets/Noise';
import Light from './Componets/Light';
import Thermal from './Componets/Thermal';
import Radioactive from './Componets/Radioactive';
import Plastic from './Componets/Plastic';



function App() {
  return (
    <>
    <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/soil' Component={Soil}/>
    <Route path='/water' Component={Water}/>
    <Route path='/air' Component={Air}/>
    <Route path='/noise' Component={Noise}/>
    <Route path='/light' Component={Light}/>
    <Route path='/thermal' Component={Thermal}/>
    <Route path='/radioactive' Component={Radioactive}/>
    <Route path='/thermal' Component={Thermal}/>
    <Route path='/plastic' Component={Plastic}/>

    </Routes>
    </>
  );
}

export default App;
