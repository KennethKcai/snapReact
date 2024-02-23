import { Routes, Route} from 'react-router-dom'
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import Home from './_root/pages/Home';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Routes>
          <Route element={<AuthLayout/>}>

          </Route>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />

        </Routes>

        {/* private routes */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home />}/>
        </Route>


      </Routes>
    </main>
  )
}

export default App