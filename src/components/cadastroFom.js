const FormCadastro = () => {
    return(
        <div class="container">
        <div class="row">
          <div class="col 8">
            <form method="post" action="http://localhost:3000/form">
        
            <div class="col-md">
              <label for="validationDefault01"class="form-label">Nome</label>
              <input type="text" class="form-control" name="nome" id="inptNome" required/>
            </div>
            <div class="col-md">
              <label for="validationDefault02" class="form-label">Sobrenome</label>
              <input type="text" class="form-control" name='sobrenome' id="inptSobrenome" required/>
            </div>
            <div class="col-md">
              <label for="validationDefaultUsername" class="form-label">Usuário</label>
              <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" class="form-control" id="inptUsername"  aria-describedby="inputGroupPrepend2" required/>
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationDefault03" class="form-label">Cidade</label>
              <input type="text" class="form-control" name="cidade" id="inptCidade" required/>
            </div>
            <div class="col-md-3">
              <label for="validationDefault04" class="form-label">Estado</label>
              <select class="form-select" name="estado" id="inptEstado" required>
                <option selected disabled value="">Escolha...</option>
                <option>Alagoas</option>
                <option>Sergipe</option>
                <option>Bahia</option>
                <option>Pernambuco</option>
                <option>São Paulo</option>
              </select>
            </div>
           
           
            <div class="mb-3">
                <label for="formFile" class="form-label" >Escolha sua foto</label>
                <input class="form-control" name='foto' type="file" id="fotoFile" />
                </div>

                <div class="row mb-3">
                    <label for="inputEmail3" class="form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" name='email' id="inputEmail"/>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputPassword3" class="form-label">Senha</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword"  name="senha" minlength="8"/>
                    </div>
                  </div>
                  <fieldset class="row mb-3">
                    <legend class="form-label">Você é:</legend>
                    <div class="col-sm-10">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="convenio" id="rdEstudante" value="estudante" checked/>
                        <label class="form-check-label" for="rdEstudante">
                          Estudante
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="rdProfessor" value="professor"/>
                        <label class="form-check-label" for="rdProfessor">
                          Professor
                        </label>
                      </div>
                      <div class="form-check disabled">
                        <input class="form-check-input" type="radio" name="gridRadios" id="rdEmpresa" value="empresa"/>
                        <label class="form-check-label" for="rdEmpresa">
                          Representante de empresa
                        </label>
                      </div>
                    </div>
                  </fieldset>
                <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                      <label class="form-check-label" for="invalidCheck2">
                        Aceito os termos e condições
                      </label>
                    </div>
                  </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit"><a>Cadastrar</a></button>
            </div>
              
          </form>
          </div>
            <div class="col 4">
              <img src="./img/formulario.png" alt="" srcset=""/>
          </div>
        </div>
            
                 
            </div>



    )
}

export default FormCadastro