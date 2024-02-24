import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
  const isAuth = false;

  return (
    <>
      {isAuth ? (
        <Navigate to = '/' />
      ):(
        <>
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout