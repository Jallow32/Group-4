import React from 'react';
import './App.css';
import Fetchget from './Components/Fetchget';
import CharacterForm from './Components/Postcharacter';
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
          <Route path="/post" element={<CharacterForm/>} />
         
       </Routes>
</div>)
  
}



export default App;
