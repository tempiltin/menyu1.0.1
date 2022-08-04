import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './home/Index';




const App = () => {
  return (
    <>
    
    <Routes>
      <Route path={`/:id`}  element={<Index />}/>

      <Route path='*'  element={"404 not found"}/>
    </Routes>
    
    
    </>
  )
}

export default App