import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ArtGallery from './pages/Gallery';
import Services from './pages/ServicesPage';
import NotFoundPage from './pages/NotFound';
import MainLayout from './layout/MainLayout';
import MinimalLayout from './layout/MinimalLayout';

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
        <Route
            path='/'
            element={<HomePage/>}/>
          <Route
            path='/about'
            element={<About />} />
          <Route
            path='/contacts'
            element={<Contacts />} />
          <Route
            path='/services'
            element={<Services />} />
          <Route
            path='/gallery'
            element={<ArtGallery />} />
        </Route>
        <Route element={<MinimalLayout />}>
          <Route
            path='*'
            element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
