import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,Routes} from "react-router"
import './App.css'
import Recipes from './pages/recipes'
import Recipe from "./pages/recipe"
import MuiButton from "./components/MuiButton"
import Navbar from './components/Navbar'
import Register from './pages/register'
import NewRecipe from './components/NewRecipe'


function App() {


  return (
    <>

  {/* <MuiButton/> */}
    <Routes>
      <Route path='/' element={<Recipes/>}/>
      <Route path='/recipe/:id' element={<Recipe/>}/>
      <Route path='/addrecipe' element={<NewRecipe/>}/>
       <Route path='/register' element={<Register/>}/>
    </Routes>
    
    
    </>
  )
}

export default App
