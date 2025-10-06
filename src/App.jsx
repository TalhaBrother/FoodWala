import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,Routes} from "react-router"
import './App.css'
import Recipes from './pages/recipes'
import Recipe from "./pages/recipe"


function App() {


  return (
    <>
  <Recipe/>
    <Routes>
      <Route path='/' element={<Recipes/>}/>
    </Routes>
    
    
    </>
  )
}

export default App
