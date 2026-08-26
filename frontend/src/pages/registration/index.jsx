import { Link } from 'react-router-dom'
import Container from '../../components/layers/Container'
import LeftAuthReg from '../../components/authentication/registration/LeftAuthReg'
import RegistrationForm from '../../components/authentication/registration/RightAuthReg'
import { Helmet } from 'react-helmet-async'
import { ToastContainer, toast } from 'react-toastify';



const Registration = () => {
  return (

    <>
      <ToastContainer toast={toast} />

      <Helmet>
        <title>ALAP-Social APP</title>
      </Helmet>
    <Container className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-100 to-slate-200 px-4 py-10 text-slate-900">

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 md:gap-12 lg:min-h-[calc(100vh-80px)] lg:grid-cols-2">
        <div className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <LeftAuthReg />
        <RegistrationForm toast={toast} />
      </div>
    </Container>
    
    
    
    </>
  )
}

export default Registration