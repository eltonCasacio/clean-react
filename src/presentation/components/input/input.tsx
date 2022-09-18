import React, { useContext } from "react";
import Styles from "./input-styles.scss";
import formContext from "@/presentation/contexts/form/form.context";

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {state, setState} = useContext(formContext);
  const error = state[`${props.name}Error`];

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  };

  const getStatus = (): string => {
    return "🔴";
  };

  const getTitle = (): string => {
    return error;
  };

  return (
    <div className={Styles.inputWrap}>
      <input data-testid={props.name} {...props} readOnly onFocus={enableInput} onChange={handleChange}/>
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}
      >
        {getStatus()}
      </span>
    </div>
  );
};

export default Input;
