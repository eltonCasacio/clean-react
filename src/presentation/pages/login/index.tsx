import React, { useState } from "react";
import Styles from "./login-styles.scss";
import { LoginHeader, Footer, Input, FormStatus } from "@/presentation/components";
import FormContext from '@/presentation/contexts/form/form.context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}
const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <FormContext.Provider value={state}>
      <form action="" className={Styles.form}>
        <h2>Login</h2>
        <Input
          name="email"
          type="email"
          className="email"
          placeholder="Digite seu e-mail"
        />
        <Input
          name="password"
          type="password"
          className="password"
          placeholder="Digite sua senha"
        />

        <button data-testid="submit" className={Styles.submit} type="submit" disabled>
          Entrar
        </button>
        <span className={Styles.signup}>Criar Conta</span>
        <FormStatus />
      </form>
      </FormContext.Provider>
      <Footer />
    </div>
  );
};

export default Login;
