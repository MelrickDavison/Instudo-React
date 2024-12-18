import Testimonial from './testimonial'
const Service = () => {
return(
<>
<div class="container-xxl py-5">
<div class="container py-5 px-lg-5">
    <div class="wow fadeInUp" data-wow-delay="0.1s">
        <p class="section-title text-secondary justify-content-center"><span></span>Nossos Serviços<span></span></p>
        <h1 class="text-center mb-5">Quais soluções providenciamos</h1>
    </div>
    <div class="row g-4">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item d-flex flex-column text-center rounded">
                <div class="service-icon flex-shrink-0">
                    <i class="fa fa-search fa-2x"></i>
                </div>
                <h5 class="mb-3">Monitorias</h5>
                <p class="m-0">Disponível na plataforma monitorias com estudantes para tirar dúvidas de matérias e atividades</p>
                <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="service-item d-flex flex-column text-center rounded">
                <div class="service-icon flex-shrink-0">
                    <i class="fa fa-laptop-code fa-2x"></i>
                </div>
                <h5 class="mb-3">Cursos</h5>
                <p class="m-0">Diversos cursos empolgantes para se especializar em uma área específica com certificados</p>
                <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="service-item d-flex flex-column text-center rounded">
                <div class="service-icon flex-shrink-0">
                    <i class="fab fa-facebook-f fa-2x"></i>
                </div>
                <h5 class="mb-3">Rede Social</h5>
                <p class="m-0">Uma incrível rede social para além dos estudos, aumentando seu ciclo social</p>
                <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item d-flex flex-column text-center rounded">
                <div class="service-icon flex-shrink-0">
                    <i class="fa fa-mail-bulk fa-2x"></i>
                </div>
                <h5 class="mb-3">Vagas de Emprego</h5>
                <p class="m-0">Disponibilize seu currículo para que empresas em vagas de emprego</p>
                <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="service-item d-flex flex-column text-center rounded">
                <div class="service-icon flex-shrink-0">
                    <i class="fa fa-thumbs-up fa-2x"></i>
                </div>
                <h5 class="mb-3">Professores     </h5>
                <p class="m-0">Conte com a ajuda de professores especializados para seu ensino</p>
                <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="service-item d-flex flex-column text-center rounded">
                <div class="service-icon flex-shrink-0">
                    <i class="fab fa-android fa-2x"></i>
                </div>
                <h5 class="mb-3">Salas de Aula</h5>
                <p class="m-0">Entre em salas de aulas que se interessar para ter acesso a atividades inéditas</p>
                <a class="btn btn-square" href=""><i class="fa fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>
</div>
<Testimonial/>
</>
)
}
export default Service