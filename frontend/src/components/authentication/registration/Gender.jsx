import React from 'react'

const Gender = ({ formik, errors, touched }) => {
    return (
        <>
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
                    <label htmlFor="custom" className="flex items-center justify-between rounded-xl border border-gray-300 bg-slate-50 px-3 py-2.5 transition hover:border-slate-400">
                        Custom
                        <input
                            onChange={formik.handleChange}
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            type="radio" name="gender" value="custom" />
                    </label>
                    {errors.gender && touched.gender && (
                        <p className="text-red-500 text-xs">{formik.errors.gender}</p>
                    )}
                </div>
            </div>


        </>
    )
}

export default Gender