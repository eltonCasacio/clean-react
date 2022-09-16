import { createContext, memo, useMemo, useState } from "react";

type StateProps = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  emailMessageError: string;
  passwordMessageError: string;
  errorMessage: string
  getMessageError: (propertyName: string) => string
};

export const FormContext = createContext<StateProps>({} as StateProps);

interface FormContextProviderProps {
  children: JSX.Element;
}
const FormContextProvider: React.FC<FormContextProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailError] = useState('Campo obrigatório');
  const [passwordError] = useState('Campo obrigatório');
  const [errorMessage] = useState('');

  const handleGetMessageError = (attrName: string) => {
    switch(attrName) {
      case 'email': return emailError;
      case 'password': return passwordError;
      default: return ''
    }
  }

  const value = useMemo((): StateProps => {
    return { 
      isLoading, 
      setIsLoading,
      emailMessageError:emailError,
      passwordMessageError:passwordError,
      errorMessage,
      getMessageError: (attrName: string ) => handleGetMessageError(attrName)
    
    };
  }, [isLoading]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default memo(FormContextProvider);
