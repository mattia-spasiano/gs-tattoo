import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import About from './pages/about';
import Services from './pages/Services';
import ArtGallery from './pages/gallery';
import Contacts from './pages/Contacts';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path='/'
          element={<HomePage />}/>
        <Route 
          path='/about'
          element={<About />}/>
        <Route
          path='/contacts'
          element={<Contacts />}/>
        <Route
          path='/services'
          element={<Services />}/>
        <Route
          path='/gallery'
          element={<ArtGallery />}/>
      </Routes>
    </>
  )
}

export default App
