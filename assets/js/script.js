const formulario = document.querySelector('#form')
const user = document.querySelector('#user')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConf = document.querySelector('#password-confirm')

formulario.addEventListener('submit', function(event){
  event.preventDefault()

  validao()
})

function validao(){
    const userValue = user.value
    const emailValue = email.value
    const passwValue = password.value
    const passwConfValue = passwordConf.value

    if(userValue === ''){
      setError(user, 'O login é obrigatório.')
    } else{
      setSucess(user)
    }

    if(emailValue === ''){
      setError(email, 'O e-mail é necessário')
    }
    else if(!checkEmail(emailValue)){
      setError(email, 'Insira um e-mail válido')
    }
    else{
      setSucess(email)
    }

    if(passwValue === ''){
      setError(password, 'Insira uma senha')
    }
    else if(passwValue.length < 8){
      setError(password, 'Insira uma senha maior')
    } else{
      setSucess(password)
    }

    if(passwConfValue === ''){
      setError(passwordConf, 'Confirme sua senha')
    } else if(passwConfValue != passwValue){
      setError(passwConfValue, 'Insira a mesma senha')
    } else{
      setSucess(passwordConf)
    }

    const mainForms = formulario.querySelectorAll('.main-form')
    const formValido = [...mainForms].every(mainForms => {
      return (mainForms.className === 'main-form sucess')
    })

    if(formValido){
      alert('Sua conta foi criada com sucesso!')
    }
}

function setError(input, mensagem){
  const mainForm = input.parentElement
  const small = mainForm.querySelector('small')

  small.innerText = mensagem

  
  mainForm.className = 'main-form error' 
}

function setSucess(input, mensagem){
  const mainForm = input.parentElement
  mainForm.className = 'main-form sucess' 
}

//CODIGO DA FUNCTION CHECKEMAIL 100% COPIADO//
function checkEmail(email) { 
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}