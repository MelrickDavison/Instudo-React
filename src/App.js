import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navebar';
import Footer from './components/footer';
import Home from './components/home'
import Service from './components/service/service'
import Contact from './components/contact/contact'
import Team from './components/team/team'
import FormCadastro from './components/cadastroFom';
import Login from './components/login';
import CursosList from './components/cursosList';
import CursoDetalhe from './components/cursoDetalhe';

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/service" element={<Service/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path='/about' element={<Team/>}/>
              <Route path='/cursos' element={<CursosList/>}/>
              <Route path='/cursos/:id' element={<CursoDetalhe/>}/>
              <Route path='/formCadastro' element={<FormCadastro/>}/>
              <Route path='/login' element={<Login/>}/>
        </Routes>
    <Footer/>
    </>
  )
}
export default App;

