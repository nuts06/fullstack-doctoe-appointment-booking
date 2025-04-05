import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Doctors from './pages/Doctors';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App