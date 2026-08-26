import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom'
import { loginSchema } from '../../../validation/validation';
import { useLoginUserMutation } from '../../../features/api/authApi';


const initialState = {
        email: '',
        password: '',
        remember: false
    };


const RightAuth = ({ title, subtitle, toast }) => {
    const [loginUser, {isLoading}] = useLoginUserMutation();
    const navigate = useNavigate();




    const loginUserHandler= async() => {
        const loginMutation=await loginUser({
            email: formik.values.email,
            password: formik.values.password
        });
        if(loginMutation?.error){
            toast.error(loginMutation?.error?.data?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: false,
                theme: "light",
            });
            return;
        }
        navigate('/');
        // console.log(loginMutation);
        
    }

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: loginSchema,
          onSubmit:() => {
            loginUserHandler();
            formik.resetForm();
        }
    });

    const {errors, touched}=formik;



    return (
        <>
            <section className="w-full rounded-2xl border border-gray-200 bg-white/80 p-6 md:p-8 shadow-lg backdrop-blur-xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-slate-900">
                        {title}
                    </h2>
                    <p className="text-sm text-slate-500">
                        {subtitle}
                    </p>
                </div>
                <form className="grid gap-4" onSubmit={formik.handleSubmit}>
                    <input
                        onChange={formik.handleChange}
                        autoComplete="off"
                        onBlur={formik.handleBlur}
                        type="email"
                        name="email"
                        value={formik.values.email}
                        placeholder="Email "
                       className={`h-12 rounded-xl border ${errors.email && touched.email ? 'border-red-500  mb-3' : 'border-gray-300'} bg-slate-50 px-3 mt-6 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15`}
                    />
                    {
                        errors.email && touched.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )
                    }
                    <input
                        onChange={formik.handleChange}
                        autoComplete="off"
                        onBlur={formik.handleBlur}
                        className={`h-12 rounded-xl border border-gray-300 bg-white px-4 text-base outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-500/15 ${errors.password && touched.password ? 'border-red-500' : ''}`}
                        type="password"
                        name="password"
                        value={formik.values.password}
                        placeholder="Password"
                    />
                    {
                        errors.password && touched.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )

                    }
                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-gray-700">
                        <label className="flex items-center gap-2">
                            <input
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                type="checkbox"
                                name="remember"
                                checked={formik.values.remember}
                                onChange={formik.handleChange}
                            />
                            Remember me
                        </label>
                        
                        <a className="font-semibold text-blue-600 hover:text-blue-700" href="/">
                            Forgotten password?
                        </a>
                    </div>
                    <button
                        className="h-12 rounded-xl bg-blue-600 text-white text-base font-semibold shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 hover:shadow-blue-500/40"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging In...' : 'Log In'}
                    </button>
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        <span className="h-px flex-1 bg-slate-200" />
                        Or
                        <span className="h-px flex-1 bg-slate-200" />
                    </div>
                    <Link
                        to="/registration"
                        className="grid h-12 place-items-center rounded-xl border border-gray-300 text-slate-700 text-base font-semibold transition hover:border-gray-400 hover:bg-slate-50"
                    >
                        Create New Account
                    </Link>
                </form>
                <p className="mt-6 text-center text-sm text-slate-500">
                    <Link to="/registration" className="font-semibold text-blue-600 hover:text-blue-700">
                        Create a new account
                    </Link>{' '}for a
                    celebrity, brand or business.
                </p>
            </section>
        </>
    )
}

export default RightAuth