import React from 'react'

const RightAuth = () => {
    return (
        <>
            <section className="w-full rounded-2xl border border-gray-200 bg-white/80 p-6 md:p-8 shadow-lg backdrop-blur-xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-slate-900">
                        Welcome back
                    </h2>
                    <p className="text-sm text-slate-500">
                        Sign in to keep the conversation going.
                    </p>
                </div>
                <form className="grid gap-4">
                    <input
                        className="h-12 rounded-xl border border-gray-300 bg-white px-4 text-base outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-500/15"
                        type="text"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        className="h-12 rounded-xl border border-gray-300 bg-white px-4 text-base outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-500/15"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-gray-700">
                        <label className="flex items-center gap-2">
                            <input
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                type="checkbox"
                                name="remember"
                            />
                            Remember me
                        </label>
                        <a className="font-semibold text-blue-600 hover:text-blue-700" href="#">
                            Forgotten password?
                        </a>
                    </div>
                    <button
                        className="h-12 rounded-xl bg-blue-600 text-white text-base font-semibold shadow-lg shadow-blue-500/30 transition hover:bg-blue-700 hover:shadow-blue-500/40"
                        type="submit"
                    >
                        Log In
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