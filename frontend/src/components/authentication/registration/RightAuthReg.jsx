import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import { signUpSchema } from '../../../validation/validation'
import DateOfBirth from './DateOfBirth'
import Gender from './Gender'
import { useAddUserMutation } from '../../../features/api/authApi'
const initialState = {
    fName: '',
    lName: '',
    email: '',
    password: '',
    // confirmPassword: '',
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: '',
}


const RegistrationForm = ({ toast }) => {
    const [ageError, setAgeError] = React.useState("");
    const [addUser, { isLoading }] = useAddUserMutation();
    const navigate = useNavigate();
    const registration = async () => {
        const signUpMutation = await addUser({
            fName: formik.values.fName,
            lName: formik.values.lName,
            email: formik.values.email,
            password: formik.values.password,
            bYear: formik.values.bYear,
            bMonth: formik.values.bMonth,
            bDay: formik.values.bDay,
            gender: formik.values.gender
        })


        if (signUpMutation?.data) {
            toast.success(signUpMutation?.data?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: false,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        }
        else if (signUpMutation?.error) {
            toast.error(signUpMutation.error?.data?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                pauseOnHover: true,
                draggable: false,
                theme: "light",
            });
        }
        // console.log(signUpMutation?.data);
        // console.log(signUpMutation.error?.data?.message);
    }

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: signUpSchema,
        onSubmit: () => {
            const currentDate = new Date();
            const pickedDate = new Date(
                formik.values.bYear,
                formik.values.bMonth - 1,
                formik.values.bDay
            );

            const adult = new Date(1970 + 18, 0, 1);
            const Older = new Date(1970 + 70, 0, 1);

            if (currentDate - pickedDate < adult) {
                return setAgeError("You must be at least 18 years old to register.");
            }
            else if (currentDate - pickedDate > Older) {
                return setAgeError("You must be at most 70 years old to register.");
            }
            // setAgeError(""); // Clear the age error if the age is valid
            // else{
            //     console.log("Form submitted successfully");
            // }
            registration();
            formik.resetForm();
            setAgeError(""); // Clear the age error if the age is valid
            // console.log("Form submitted successfully"); 
        }
    });

    const tempYears = new Date().getFullYear();
    const years = Array.from(new Array(105), (val, index) => tempYears - index);
    // console.log(years)

    const months = Array.from(new Array(12), (val, index) => index + 1);
    // console.log(months)

    const daysInMonth = () => {
        return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
    }
    const getDates = Array.from(new Array(daysInMonth()), (val, index) => index + 1);

    // console.log(getDates);


    const { errors, touched } = formik;



    return (
        <>
            <section className="z-10 mx-auto w-full max-w-md rounded-2xl border border-gray-300 bg-white p-6 md:p-8 shadow-xl shadow-slate-300/30">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create Your Account</h2>
                <p className="mt-1 text-sm text-slate-500 ">It takes less than a minute.</p>
                <div className="mt-5 h-px bg-slate-200" />

                <form className="mt-5 grid gap-4" onSubmit={formik.handleSubmit}>
                    <div className="grid gap-3 sm:grid-cols-2 relative">

                        <input
                            className={`h-12 rounded-xl border ${errors.fName && touched.fName ? 'border-red-500  mb-3' : 'border-gray-300'} bg-slate-50 px-3 mt-6 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15`}
                            onChange={formik.handleChange}
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            type="text"
                            name="fName"
                            value={formik.values.fName}
                            placeholder="First name"
                        />

                        {errors.fName && touched.fName && (
                            <p className="text-red-500 text-sm absolute top-0 left-0 ">{errors.fName}</p>
                        )}
                        <input
                            onChange={formik.handleChange}
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            type="text"
                            name="lName"
                            value={formik.values.lName}
                            placeholder="Last Name"
                            className={`h-12 rounded-xl border ${errors.lName && touched.lName ? 'border-red-500  mb-3' : 'border-gray-300'} bg-slate-50 px-3 mt-6 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15`}
                        />
                        {errors.lName && touched.lName && (
                            <p className="text-red-500 text-sm absolute top-0 right-[49px] ">{errors.lName}</p>
                        )}
                    </div>
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

                    {errors.email && touched.email && (
                        <p className="text-red-500 text-sm  top-0 left-0 ">{errors.email}</p>
                    )}
                    <input
                        onChange={formik.handleChange}
                        autoComplete="off"
                        onBlur={formik.handleBlur}
                        type="password"
                        name="password"
                        value={formik.values.password}
                        placeholder="New password"
                        className={`h-12 rounded-xl border ${errors.password && touched.password ? 'border-red-500  mb-3' : 'border-gray-300'} bg-slate-50 px-3 mt-6 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15`}
                    />
                    {errors.password && touched.password && (
                        <p className="text-red-500 text-sm top-0 left-0 ">{errors.password}</p>
                    )}
                    {/* <input
                        onChange={formik.handleChange}
                        autoComplete="off"
                        onBlur={formik.handleBlur}
                        type="password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        placeholder="Confirm password"
                        className="h-12 rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                    /> */}

                    <DateOfBirth formik={formik} errors={errors} touched={touched} ageError={ageError} months={months} years={years} getDates={getDates} />


                    <Gender formik={formik} errors={errors} touched={touched} />

                    <p className="text-xs leading-relaxed text-slate-500">
                        By clicking Sign Up, you agree to our Terms, Privacy Policy, and Cookies Policy.
                    </p>

                    <button
                        type="submit"
                        className="mt-1 h-12 w-full rounded-xl bg-blue-600 text-base font-semibold text-white shadow-lg shadow-blue-300/40 transition hover:bg-blue-700"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-600">
                    <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                        Already have an account?
                    </Link>
                </div>
            </section>
        </>
    )
}

export default RegistrationForm