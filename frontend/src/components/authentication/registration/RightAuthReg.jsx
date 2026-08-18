import React from 'react'
import { Link } from 'react-router-dom'

import {useFormik} from 'formik'
import { signUpSchema } from '../../../validation'
const initialState = {
    fName: '',
    lName: '',
    email: '',
    password: '',
    // confirmPassword: '',
    bYear: '',
    bMonth: '',
    bDay: '',
    gender: '',
}


const RegistrationForm = () => {

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log("Hello form formik", values) 
        }
    })

    return (
        <>
            <section className="z-10 mx-auto w-full max-w-md rounded-2xl border border-gray-300 bg-white p-6 md:p-8 shadow-xl shadow-slate-300/30">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create Your Account</h2>
                <p className="mt-1 text-sm text-slate-500">It takes less than a minute.</p>
                <div className="mt-5 h-px bg-slate-200" />

                <form className="mt-5 grid gap-4" onSubmit={formik.handleSubmit}>
                    <div className="grid gap-3 sm:grid-cols-2">
                        <input
                            onChange={formik.handleChange}
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            type="text"
                            name="fName"
                            value={formik.values.fName}
                            placeholder="First name"
                            className="h-12 rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                        />
                        <input
                            onChange={formik.handleChange}
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            type="text"
                            name="lName"
                            value={formik.values.lName}
                            placeholder="Last Name"
                            className="h-12 rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                        />
                    </div>

                    <input
                        onChange={formik.handleChange}
                        autoComplete="off"
                        onBlur={formik.handleBlur}
                        type="email"
                        name="email"
                        value={formik.values.email}
                        placeholder="Email "
                        className="h-12 rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                    />

                    <input
                        onChange={formik.handleChange}
                        autoComplete="off"
                        onBlur={formik.handleBlur}
                        type="password"
                        name="password"
                        value={formik.values.password}
                        placeholder="New password"
                        className="h-12 rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                    />
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

                    <div >
                        <label className="mb-1.5 block text-xs font-semibold text-slate-500">Date of birth</label>
                        {/* <input
                            type="date"
                            name="dob"
                            onChange={formik.handleChange}
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            className="h-12 w-full rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                        /> */}
                        <select 
                            name="bDay"
                            value={formik.values.bDay}
                            onChange={formik.handleChange}
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            className="h-12 w-[30%] rounded-xl border border-gray-300 bg-slate-50 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15">
                            <option value="">Day</option>
                            <option value="01">1</option>
                            <option value="02">2</option>
                            <option value="03">3</option>
                            <option value="04">4</option>
                            <option value="05">5</option>
                            <option value="06">6</option>
                            <option value="07">7</option>
                            <option value="08">8</option>
                            <option value="09">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</
                            option>                  
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>  
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                           <select
                            name="bMonth"
                            value={formik.values.bMonth}
                            onChange={formik.handleChange}
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            className="h-12 w-[30%] mx-[17px] rounded-xl border border-gray-300 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15">

                            <option value="">Month</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>

                        <select
                            name="bYear"
                            value={formik.values.bYear}
                            onChange={formik.handleChange}
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            className="h-12 w-[30%] rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                        >
                            <option value="">Year</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>  
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                        </select>

                     
                        
                    </div>

                    <div>
                        <label className="mb-2 block text-xs font-semibold text-slate-500">Gender</label>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                            <label htmlFor="female" className="flex items-center justify-between rounded-xl border border-gray-300 bg-slate-50 px-3 py-2.5 transition hover:border-slate-400">
                                Female
                                <input
                                onChange={formik.handleChange}
                                autoComplete="off"
                                onBlur={formik.handleBlur}
                                type="radio" name="gender" value="female" />
                            </label>
                            <label htmlFor="male" className="flex items-center justify-between rounded-xl border border-gray-300 bg-slate-50 px-3 py-2.5 transition hover:border-slate-400">
                                Male
                                <input
                                onChange={formik.handleChange}
                                autoComplete="off"
                                onBlur={formik.handleBlur}
                                type="radio" name="gender" value="male" />
                            </label>
                            <label  htmlFor="custom" className="flex items-center justify-between rounded-xl border border-gray-300 bg-slate-50 px-3 py-2.5 transition hover:border-slate-400">
                                Custom
                                <input
                                onChange={formik.handleChange}
                                autoComplete="off"
                                onBlur={formik.handleBlur}
                                type="radio" name="gender" value="custom" />
                            </label>
                        </div>
                    </div>

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
                    <Link to="/" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                        Already have an account?
                    </Link>
                </div>
            </section>
        </>
    )
}

export default RegistrationForm