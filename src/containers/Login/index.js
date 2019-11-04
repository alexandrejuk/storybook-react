import React from 'react'
import { Button } from '../../components'
import './style.css'
const Login = ({
  history,
}) => {
  return (
    <div>
    <h2>Faça o login ou cadastre-se</h2>
    <div className="loginWrapper">
      <div className="formLogin">
        <h3>Sou cadastrado</h3>
        <form className="loginForm">
          <div className="loginFormGroup">
            <label className="loginLabel">
              usuário
            </label>
            <input className="loginInput" />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Senha
            </label>
            <input type="password" className="loginInput" />
          </div>
          <div>
            <Button
              classStyle="btnPrimary"
            >
              Logar
            </Button>
          </div>
        </form>
      </div>
      <div className="lineRight"/>
      <div className="formLogin">
        <h3>Criar cadastrado</h3>
        <form className="loginForm">
          <div className="loginFormGroup">
            <label className="loginLabel">
              Nome completo
            </label>
            <input className="loginInput" />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Telefone
            </label>
            <input className="loginInput" />
          </div>
          <h3>Endereço</h3>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Cep
            </label>
            <input className="loginInput" />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Rua
            </label>
            <input className="loginInput" />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Número
            </label>
            <input className="loginInput" />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Cidade
            </label>
            <input className="loginInput" />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Estado
            </label>
            <input className="loginInput" />
          </div>
          <h3>Login de acesso</h3>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Usuário
            </label>
            <input className="loginInput" />
          </div>
          <div className="loginFormGroup">
            <label className="loginLabel">
              Senha
            </label>
            <input className="loginInput" />
          </div>
          <Button
            classStyle="btnPrimary"
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login