import React from "react";
import Styles from "./login-styles.scss";
import { LoginHeader, Footer, Input, FormStatus } from "@/presentation/components";
import FormContext from "@/presentation/contexts/form/form.context";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <FormContext>
        <form action="" className={Styles.form}>
          <h2>Login</h2>
          <Input name="email" type="email" className="email" placeholder="Digite seu e-mail" />
          <Input name="password" type="password" className="password" placeholder="Digite sua senha" />

          <button className={Styles.submit} type="submit" disabled>
            Entrar
          </button>
          <span className={Styles.signup}>Criar Conta</span>
          <FormStatus />
        </form>
      </FormContext>
      <Footer />
    </div>
  );
};

export default Login;
