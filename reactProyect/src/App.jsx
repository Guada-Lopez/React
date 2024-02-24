import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Narvar'
import ItemListContainer from './components/ItemListContainer'

function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = "Bienvenidos a D-SPORT!!!"/>
    </>
  )
}

export default App
