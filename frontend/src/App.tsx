import { useState, useCallback, useEffect } from 'react'
import {Routes , Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home.tsx'
import Footer from './components/Footer.tsx'
import Recipe from './pages/Recipe.tsx'
import RecipeForm from './pages/RecipeForm.tsx'

export default function App() {
  const [y, setY] = useState(window.scrollY)
  const [isScrollDown, setIsScrollDown] = useState(false)

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setIsScrollDown(false)
      } else if (y < window.scrollY) {
        setIsScrollDown(true)
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <Routes> 
        <Route path="/" element={<Home/> } />
        <Route path="recipes">
          <Route path=":id" element={<Recipe/> } />
          <Route path="add" element={<RecipeForm/> } />
        </Route>
      </Routes>
      {isScrollDown ? <Footer /> : null}
    </>
  )
}