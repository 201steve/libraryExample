import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Signup/SignUp.jsx';
import App from './App.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
