import { Routes, Route} from 'react-router-dom'
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import Home from './_root/pages/Home';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Routes>
          <Route path='/sign-in' element={<SigninForm />} />
        </Routes>

        {/* private routes */}
        <Route index element={<Home />}  />

      </Routes>
    </main>
  )
}

export default App