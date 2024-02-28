

import './App.css';
import Dashboard from './pages/Dashboard/index';
import Landing from './pages/LandingPage/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Coin from './pages/Coin/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
