import React from "react";
import Styles from "./login-styles.scss";
import LoginHeader from "@/presentation/components/login-header/login-header";
import Footer from "@/presentation/components/footer/footer";
import Input from "@/presentation/components/input/input";
import FormStatus from "@/presentation/components/form-status/form-status";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
     <LoginHeader />
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" className="email" placeholder="Digite seu e-mail"/>
        <Input  type="password" className="password" placeholder="Digite sua senha"/>
       
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.signup}>Criar Conta</span>
       <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

export default Login;