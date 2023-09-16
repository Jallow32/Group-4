import React from 'react';
import './App.css';
import Fetchget from './Components/Fetchget';
import Getcountries from './Components/Getcountries';
import FirebaseFunctionTest from './Components/Connect';

function App() {
return (
<div>
<Fetchget/>
<Getcountries/>
<FirebaseFunctionTest/>
</div>)
  
}

export default App;
