import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/*" element={<UserRoutes/>} />
        <Route path="/admin/*" element={<AdminRoutes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
