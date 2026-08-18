import React from 'react'

const RightAuthReg = () => {
    return (
        <>
            <section className="z-10 mx-auto w-full max-w-md rounded-2xl border border-gray-300 bg-white p-6 md:p-8 shadow-xl shadow-slate-300/30">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create account</h2>
                <p className="mt-1 text-sm text-slate-500">It takes less than a minute.</p>
                <div className="mt-5 h-px bg-slate-200" />

                <form className="mt-5 grid gap-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="h-12 rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Surname"
                            className="h-12 rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email or phone number"
                        className="h-12 rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="New password"
                        className="h-12 rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                    />

                    <div>
                        <label className="mb-1.5 block text-xs font-semibold text-slate-500">Date of birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="h-12 w-full rounded-xl border border-gray-300 bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-xs font-semibold text-slate-500">Gender</label>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                            <label className="flex items-center justify-between rounded-xl border border-gray-300 bg-slate-50 px-3 py-2.5 transition hover:border-slate-400">
                                Female
                                <input type="radio" name="gender" value="female" />
                            </label>
                            <label className="flex items-center justify-between rounded-xl border border-gray-300 bg-slate-50 px-3 py-2.5 transition hover:border-slate-400">
                                Male
                                <input type="radio" name="gender" value="male" />
                            </label>
                            <label className="flex items-center justify-between rounded-xl border border-gray-300 bg-slate-50 px-3 py-2.5 transition hover:border-slate-400">
                                Custom
                                <input type="radio" name="gender" value="custom" />
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

export default RightAuthReg