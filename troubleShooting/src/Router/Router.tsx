import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Login from "../pages/Login/Login.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>...loading</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
