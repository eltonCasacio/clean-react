import { createContext, memo, useMemo, useState } from "react";

type StateProps = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  errorMessage: string
};

const initialValues: StateProps = {
  isLoading: false,
  setIsLoading: () => null,
  errorMessage: ''
};

export const FormContext = createContext<StateProps>(initialValues);

interface FormContextProviderProps {
  children: JSX.Element;
}
const FormContextProvider: React.FC<FormContextProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage] = useState('');

  const value = useMemo((): StateProps => {
    return { isLoading, setIsLoading, errorMessage };
  }, [isLoading]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default memo(FormContextProvider);
