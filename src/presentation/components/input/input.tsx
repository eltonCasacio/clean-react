import React, { memo } from "react";
import Styles from "./input-styles.scss";

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const Input: React.FC<InputProps> = (props: InputProps) => (
  <div className={Styles.inputWrap}>
    <input {...props} />
    <span className={Styles.status}>🔴</span>
  </div>
);

export default memo(Input);
