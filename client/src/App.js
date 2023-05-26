import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contract from './Components/Contract';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword'; 
import PrivateComponent from './Components/PrivateComponent';
import Profile from './Components/Profile';
import AddProduct from './Components/AddProduct';
import Products from './Components/Products';
import ErrorPage from './Components/ErrorPage';
// import Login from './Components/Login';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/forgot/:id/:token" element={<ForgotPassword />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
