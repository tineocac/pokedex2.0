import './assets/css/App.css'
import { HashRouter, Route, Routes} from 'react-router-dom'
import UserInput from './components/UserInput'
import Characters from './components/Characters'
import CharacterDetail from './components/CharacterDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import './assets/css/pokemons.css'
import Settings from './components/Settings'
import Loader from './components/Loader'
import { useSelector } from 'react-redux'

function App() {

  const loader = useSelector( state => state.loader)

  return (

    <HashRouter>
      <div className="App">
        {loader && <Loader/>}
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
