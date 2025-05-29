import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/products'
import Contact from './pages/contact'
import About from './pages/about'
import User from './pages/user'
import Admin from './pages/admin'
import Navbar from './components/navbar'
import NotFound from './pages/notFound'
import SingleProduct from './pages/singleProduct'
import AuthProvider from './context/AuthContext'
import ProductProvider from './context/productContext'
import ProtectDashboard from './components/dashboardProtect'
import AdminProtect from './components/adminProtect'
import Dashboard from './pages/dashboard'
import Signin from './pages/signin'
import Signup from './pages/signup'
import VerifyEmail from './pages/verifyEmail'
import PasswordReset from './pages/passwordReset'
import SendPasswordResetMail from './pages/sendPassResetMail'
import SignUpForm from './components/ReactHookForm'
import Homepage from './pages/homepage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/products' element={<Product />} />
              <Route path='/products/:id' element={<SingleProduct />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/user' element={<User />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/verify/:token' element={<VerifyEmail />} />
              <Route path='/resetpass/:token' element={<PasswordReset />} />
              <Route path='/sendPasswordReset' element={<SendPasswordResetMail />} />
              <Route path='/reactForm' element={<SignUpForm/>} />
              <Route element={<ProtectDashboard />} >
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>
              <Route element={<AdminProtect />} >
                <Route element={<ProtectDashboard />} >
                  <Route path='/admin' element={<Admin />} />
                </Route>
              </Route>
              <Route path='/signin' element />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App