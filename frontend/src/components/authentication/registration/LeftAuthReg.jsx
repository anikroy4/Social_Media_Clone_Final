import React from 'react'

const LeftAuthReg = ({title , description}) => {
    return (
        <>
            <section className="text-center lg:text-left z-10">
                <span className="inline-flex items-center rounded-full border border-gray-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Welcome to ALAP
                </span>
                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-600">ALAP</h1>
                <p className="mt-4 lg:max-w-xl text-base md:text-lg leading-relaxed text-slate-700">
                    Create your account and start sharing ideas, memories, and moments with your people.
                </p>
            </section>
        </>
    )
}

export default LeftAuthReg