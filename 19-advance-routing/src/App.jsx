import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}>
          <Route path='/men' element={<men/>}/>
          <Route path='/women' element={<women/>}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
