
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import InfoPokedex from './pages/InfoPokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<ProtectedRoutes/>}> 
          <Route path="/pokedex" element={<Pokedex/>} />
          <Route path="/pokedex/:id" element={<InfoPokedex/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
