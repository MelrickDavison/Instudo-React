import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navebar';
import Footer from './components/footer';
import Home from './components/home'
import Facts from './components/about/facts';
import Project from './components/project/projects';
import Service from './components/service/service'
import Contact from './components/contact/contact'
import Team from './components/team/team'

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/service" element={<Service/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/about' element={<Facts/>}/>
        </Routes>
    <Footer/>
    </>
  )
}
export default App;

