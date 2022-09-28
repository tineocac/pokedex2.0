import './assets/css/App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import UserInput from './components/UserInput'
import Characters from './components/Characters'
import CharacterDetail from './components/CharacterDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import './assets/css/pokemons.css'

function App() {

  return (

    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<UserInput />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/Characters' element={<Characters />} />
            <Route path='/Characters/:id' element={<CharacterDetail />} />
          </Route>

        </Routes>
      </div>
    </HashRouter>

  )
}

export default App
