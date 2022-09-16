import { Login } from "@/presentation/pages";
import { Route, Routes } from "react-router-dom";

import "@/presentation/styles/global.scss";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router