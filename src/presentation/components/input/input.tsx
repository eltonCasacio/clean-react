/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FormContext } from "@/presentation/contexts/form/form.context";
import React, { useContext } from "react";
import Styles from "./input-styles.scss";

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {getMessageError} = useContext(FormContext)
  const error = getMessageError(props.name!)

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

  const getStatus = (): string => '🔴'
  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>
        {getStatus()}
      </span>
    </div>
  );
};

export default Input;
