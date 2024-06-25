
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import InfoPokedex from './pages/InfoPokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import UpperBar from './components/shared/UpperBar'
import BottomBar from './components/shared/BottomBar'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<ProtectedRoutes/>}> 
          <Route path="/pokedex" element={
            <>
              <UpperBar/>
                <Pokedex/>
              <BottomBar/>
            </>
            } />
          <Route path="/pokedex/:id" element={
            <>
              <UpperBar/>
                <InfoPokedex/>
              <BottomBar/>
            </>
            } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
