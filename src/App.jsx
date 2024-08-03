import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { NavBar } from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='size-full'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='test/' element={<Navigate to={'test/home'}/>}/>
          <Route path='test/home' element={<Home/>}/> 
          <Route path='test/contact' element={<Contact/>}/>
          <Route path='test/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
