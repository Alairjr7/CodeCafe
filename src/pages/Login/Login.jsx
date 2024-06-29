import "./Login.css";

import { IoIosCafe } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container_login">
      <div className="slogan">
        <h1>
          <IoIosCafe />
          CODECAFÉ
        </h1>
        <p>Programando Sabores, Codificando Momentos</p>
      </div>

      <div className="login">
        <div className="containerBack">
          <Link to="/">
            <IoArrowBackCircle className="back" />
          </Link>
        </div>
        
        <h2>Bem-vindo</h2>

        <div className="enter">
          <h3>Entrar</h3>

          <div className="container_options">
            <div className="input-options">
              <div className="container_inputUser">
                <input
                  type="text"
                  className="inputUser"
                  placeholder="Usuario"
                />
                <FaUser className="user" />
              </div>
              <div className="container-inputPassword">
                <input
                  type="password"
                  name=""
                  id=""
                  className="inputPassword"
                  placeholder="Senha"
                />
                <RiLockPasswordFill className="password" />
              </div>
            </div>
            <div className="enter_options">
              <div className="remember">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Lembre de mim</label>
              </div>
              <a href="">Esqueceu a senha?</a>
            </div>
            <Link className="buttonEnter" to='/menu'>Entrar</Link>
            <p className="ou">ou</p>
            <div className="login_options">
              <a href="" className="container_google">
                {" "}
                <FaGoogle className="google" /> Fazer login com o Google
              </a>
              <a href="" className="container_facebook">
                {" "}
                <FaFacebook className="facebook" /> Fazer login com o Facebook
              </a>
            </div>
            <p className="createAccount">
              Nao tem uma conta ? <a href="">Criar conta</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
