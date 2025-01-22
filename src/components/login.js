const Login = () => {
    return(
        <div class="container" >
        <div class="row">

       
             <div class="mb-12">

               <label for="exampleInputEmail1" class="form-label">Endereço de Email</label>
               <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp"/>
             </div>
             <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">Senha</label>
               <input type="password" class="form-control" id="inputSenha"   minlength="8"/>
               <input type="checkbox" class="form-check-input" onclick="mostrarSenha()"/>
               <label class="form-check-label" for="exampleCheck1">Mostrar Senha</label>
           
             </div>
             <div class="mb-3 form-check"> 
                 <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                 <label class="form-check-label" for="exampleCheck1">Lembre-se de mim</label>
               </div>
             </div>

               
             <button class="btn btn-primary" onclick="loginUser()" > <a> Entrar</a></button>
        
       </div>

    )
}

export default Login