import React from "react";
import Styles from "./login-styles.scss";
import { LoginHeader, Footer, Input, FormStatus } from "@/presentation/components";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" className="email" placeholder="Digite seu e-mail" />
        <Input type="password" className="password" placeholder="Digite sua senha" />

        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.signup}>Criar Conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
