import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Middle from './Components/Middle/Middle';
import Destinations from './Components/Destinations/Destinations';

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
   <Navbar/>
   <Home/>
   <Middle/>
   <Destinations/>
</div>
  )
}

export default App
