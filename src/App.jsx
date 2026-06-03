import React from 'react'
import Home from './Components/Home'
import {Routes,Route} from "react-router-dom"
import Landing from './Components/Landing'
import ProductInfo from './Components/ProductInfo'

function App() {
  return (
    <div>

    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path ="/products" element={<Home/>}/>
      <Route path = "/productsinfo/:id" element={<ProductInfo/>}/>
    </Routes>
      
    </div>
  )
}

export default App