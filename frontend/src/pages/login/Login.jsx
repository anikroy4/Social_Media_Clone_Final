import { Link } from 'react-router-dom'
import Container from '../../components/layers/Container'
import LeftAuth from '../../components/authentication/login/LeftAuth'
import RightAuth from '../../components/authentication/login/RightAuth'

const Login = () => {
  return (
    <Container className="relative mx-auto overflow-hidden bg-white text-slate-900 font-sans">
      <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"/>
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"/>

      <div className="relative z-10 grid min-h-screen place-items-center px-4 md:px-6 py-12">
        <div className="w-full max-w-6xl grid gap-12 md:gap-8 lg:grid-cols-2 items-center">
          <LeftAuth />
          <RightAuth />
        </div>
      </div>
    </Container>
  )
}

export default Login