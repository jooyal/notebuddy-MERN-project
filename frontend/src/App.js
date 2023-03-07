import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';

const App = () => (
  <>
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/mynotes' element={<MyNotes/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  </>
)

export default App
