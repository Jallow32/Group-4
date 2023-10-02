import React from 'react';
import './App.css';
import Fetchget from './Components/Fetchget';
import FirebaseFunctionTest from './Components/Connect';
import NavBar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';



function App() {
return (
<div>
<NavBar />
<Routes>
        
          <Route path="/" element={<FirebaseFunctionTest />} />
          <Route path="/live" element={<Fetchget/>} />
       </Routes>
</div>)
  
}



export default App;
