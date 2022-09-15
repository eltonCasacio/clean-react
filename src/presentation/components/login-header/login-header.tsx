import React, { memo } from "react";
import Logo from "../logo/logo";
import Styles from "./login-header-styles.scss";

const Footer: React.FC = () => (
  <header className={Styles.header}>
    <Logo />
    <h1>Clean architecture - ReactJS</h1>
  </header>
);

export default memo(Footer);