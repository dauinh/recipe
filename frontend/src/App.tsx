import {Routes , Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
    <>
      <Routes> 
        <Route path="/" element={<Home/> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
