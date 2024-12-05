const Testimonial = () => {
    return(
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <p class="section-title text-secondary justify-content-center"><span></span>Comentários<span></span></p>
                <h1 class="text-center mb-5">O que dizem nossos clientes?</h1>
                <div class="owl-carousel testimonial-carousel">
                    <div class="testimonial-item bg-light rounded my-4">
                        <p class="fs-5"><i class="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>Passei no meu curso dos sonhos na faculdade estudando pela plataforma. Só tenho a agradecer!</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg"/>
                            <div class="ps-4">
                                <h5 class="mb-1">Maria Jr</h5>
                                <span>Estudante</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-light rounded my-4">
                        <p class="fs-5"><i class="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>A plataforma dispõe de inúmeras vagas de emprego. Encontrei a melhor de todas e avancei minha carreira.</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" s/>
                            <div class="ps-4">
                                <h5 class="mb-1">Jorge Mateus</h5>
                                <span>Professor</span>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-light rounded my-4">
                        <p class="fs-5"><i class="fa fa-quote-left fa-4x text-primary mt-n4 me-3"></i>A melhor plataforma para estudar! Se você assim como tem dificuldades em várias matérias, aqui é seu lugar!</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg"/>
                            <div class="ps-4">
                                <h5 class="mb-1">Queijo Neto</h5>
                                <span>Estudante</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial