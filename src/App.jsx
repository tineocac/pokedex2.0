import './assets/css/App.css'
import { HashRouter, Route, Routes} from 'react-router-dom'
import UserInput from './components/UserInput'
import Characters from './components/Characters'
import CharacterDetail from './components/CharacterDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import './assets/css/pokemons.css'
import Settings from './components/Settings'

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
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </HashRouter >

  )
}

export default App
