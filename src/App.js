import React from 'react';
import './App.css';
import Fetchget from './Components/Fetchget';
import FirebaseFunctionTest from './Components/Connect';
import Signup from './Components/Signup';
import NavBar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';



function App() {
return (
<div>
<NavBar />
<Routes>
          <Route path="/" element={<Fetchget />} />
          <Route path="/connection" element={<FirebaseFunctionTest />} />
          <Route path="/signup" element={<Signup />} />
       </Routes>
</div>)
  
}



export default App;
