import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home'
import Layout from './Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details/Details';
import Signup from './pages/SignUp/Signup';
import SignIn from './pages/SignIn/SignIn';
import { useEffect } from 'react';

import UserState from './context/user/userState';
import MyAccount from './pages/MyAccount/MyAccount';
import CategoryPost from './pages/CategoryPost/CategoryPost';
import About from './pages/About/About';
import PrivateOutlet from './components/PrivateOutlet';

function App() {

  return (
    <UserState>
      <BrowserRouter>
        <Layout >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path='/post/:category' element={<CategoryPost />} />
            <Route path='about' element={<About />} />
            <Route path='/' element={<PrivateOutlet />} >
              <Route path='/myPost' element={<MyAccount />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </UserState>

  );
}

export default App;
