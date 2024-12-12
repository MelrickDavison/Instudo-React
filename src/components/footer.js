const Footer = () => {
    return(
        <div class="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5 px-lg-5">
            <div class="row g-5">
                <div class="col-md-6 col-lg-3">
                    <p class="section-title text-white h5 mb-4">Endereço<span></span></p>
                    <p><i class="fa fa-map-marker-alt me-3"></i>Avenida Miguel Ignácio Curi, 111. Itaquera, São Paulo – SP </p>
                    <p><i class="fa fa-phone-alt me-3"></i>+11 8002 8922</p>
                    <p><i class="fa fa-envelope me-3"></i>instudo@gmail.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <p class="section-title text-white h5 mb-4">Links Rápidos<span></span></p>
                    <a class="btn btn-link" href="">Sobre Nós</a>
                    <a class="btn btn-link" href="">Contato</a>
                    <a class="btn btn-link" href="">Política de Privacidade</a>
                    <a class="btn btn-link" href="">Termos e Condições</a>
                    <a class="btn btn-link" href="">Carreira</a>
                </div>
                <div class="col-md-6 col-lg-3">
                    <p class="section-title text-white h5 mb-4">Galeria<span></span></p>
                    <div class="row g-2">
                        <div class="col-4">
                            <img class="img-fluid" src="img/portfolio-1.jpg" alt="Image"/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid" src="img/portfolio-2.jpg" alt="Image"/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid" src="img/portfolio-3.jpg" alt="Image"/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid" src="img/portfolio-4.jpg" alt="Image"/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid" src="img/portfolio-5.jpg" alt="Image"/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid" src="img/portfolio-6.jpg" alt="Image"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <p class="section-title text-white h5 mb-4">Mensagem<span></span></p>
                    <p>Envie seu e-mail para nós! Esperamos sua mensagem</p>
                    <div class="position-relative w-100 mt-3">
                        <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Escreva..."/>
                        <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container px-lg-5">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">INSTUDO</a>, All Right Reserved. 
                        
                             Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Ajuda</a>
                            <a href="">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer