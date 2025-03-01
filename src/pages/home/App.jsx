import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './home/Home'
import Cadastro from './cadastro/Cadastro'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
  