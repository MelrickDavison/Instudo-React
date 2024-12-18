import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
        <div class="container-xxl position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
                <img src="./img/Instudo_logo-removebg-preview.png" alt="" srcset="" class="logoInstudo"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto py-0">
                    <a href="index.html" class="nav-item nav-link">Home</a>
                    
                    <Link to={'/service'} class="nav-item nav-link">Serviços</Link>
                    <Link to={"/cursos"} class="nav-item nav-link">Cursos</Link>  
                    <Link to={'/about'} class="nav-item nav-link">Sobre</Link>                      
                    
                    <Link to={'/contact'} class="nav-item nav-link">Contato</Link>
                </div>
                <a href="form.html" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Inscreva-se</a>
                <a href="login.html" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Login</a>
            </div>
        </nav>

        <div class="container-xxl py-5 bg-primary hero-header">
            <div class="container my-5 py-5 px-lg-5">
                <div class="row g-5 py-5">
                    <div class="col-12 text-center">
                        <h1 class="text-white animated slideInDown"></h1>
                        <hr class="bg-white mx-auto mt-0"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar