import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './home/Index';

const App = () => {
  return (
    <>
    
    <Routes>

      <Route path='*'  element={<Index />}/>
    </Routes>
    
    
    </>
  )
}

export default App