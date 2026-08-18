import React from 'react'

const LeftAuth = ({subtitle, title, description, point1, point2, point3 }) => {
    return (
        <>
            <section className="w-full space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-700 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    {subtitle}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                    {title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl leading-snug text-gray-700">
                    {description}
                </p>
                <div className="grid gap-3 text-gray-700">
                    <div className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 flex-shrink-0" />
                        <p>{point1}</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 flex-shrink-0" />
                        <p>{point2}</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-600 flex-shrink-0" />
                        <p>{point3}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LeftAuth