const NewsLetter = () => {
return(
    <div class="container-xxl bg-primary newsletter py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row justify-content-center">
                    <div class="col-lg-7 text-center">
                        <p class="section-title text-white justify-content-center"><span></span>Mensagem<span></span></p>
                        <h1 class="text-center text-white mb-4">Encontrou algum problema?</h1>
                        <p class="text-white mb-4">Nossa plataforma contém algum bug? em algo para nos dizer? Envie um e-mail</p>
                        <div class="position-relative w-100 mt-3">
                            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Escreva aqui..."/>
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}
export default NewsLetter