import {Routes , Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home.tsx'
import Footer from './components/Footer.tsx'
import Recipe from './pages/Recipe.tsx'

function App() {

  return (
    <>
      <Routes> 
        <Route path="/" element={<Home/> } />
        <Route path="/recipe" element={<Recipe/> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
