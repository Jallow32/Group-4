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
          <Route path="/" element={<Fetchget />} />
          <Route path="/connection" element={<FirebaseFunctionTest />} />
        
       </Routes>
</div>)
  
}



export default App;
