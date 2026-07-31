import {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import NewsCard from './components/NewsCard/NewsCard'
import {noticias} from './data/noticias'
import Home from '../src/pages/Home/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Materia from './pages/Materia/Materia'
import Login from './pages/Login/Login'
import RotaProtegida from './components/RotaProtegida'
import Painel from './pages/Painel/Painel'
import Cadastro from './pages/Cadastro/Cadastro'

function App() {
  const [tema, setTema] = useState(() =>{
    const salvo = localStorage.getItem('tema') || 'light'
    if(salvo) return salvo

     const preferenciaEscuro = window.matchMedia('(preferes-color-scheme: dark)').matches
     if(preferenciaEscuro) return 'dark'
     
     return 'light'
  })
  const [manchete, ...demais] = noticias

  function alternarTema(){
    setTema(t =>(t ==='light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])
 

  return (
    <>
      <Header tema={tema} aoAlternarTema={alternarTema} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materia/:id" element={<Materia />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Painel' element={<RotaProtegida>
          <Painel />
          </RotaProtegida>} />
          <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      
    </>
  )
}

export default App
