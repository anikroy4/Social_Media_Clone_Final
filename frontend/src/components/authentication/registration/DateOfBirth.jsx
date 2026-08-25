import React from 'react'

const DateOfBirth = ({ formik, errors, touched, ageError ,months, years, getDates  }) => {
    return (
        <>
            <div className=" relative mb-2">
                <label className=" mb-1.5 block text-xs font-semibold text-slate-500">Date of birth</label>

                <select
                    name="bDay"
                    value={formik.values.bDay}
                    onChange={formik.handleChange}
                    autoComplete="off"
                    onBlur={formik.handleBlur}
                    className={`h-12 w-[30%] rounded-xl ${errors.bDay && touched.bDay ? 'border-red-500' : 'border-gray-300'} bg-slate-50 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15`}>
                    <option value="">Day</option>
                    {
                        getDates.map((date, index) => (
                            <option key={index} >{date}</option>
                        ))
                    }

                </select>


                <select
                    name="bMonth"
                    value={formik.values.bMonth}
                    onChange={formik.handleChange}
                    autoComplete="off"
                    onBlur={formik.handleBlur}
                    className={`h-12 w-[30%] mx-[17px] rounded-xl ${errors.bMonth && touched.bMonth ? 'border-red-500' : 'border-gray-300'} bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15`}>


                    <option value="">Month</option>
                    {
                        months.map((month, index) => (
                            <option key={index} >{month}</option>
                        ))
                    }
                </select>


                <select
                    name="bYear"
                    value={formik.values.bYear}
                    onChange={formik.handleChange}
                    autoComplete="off"
                    onBlur={formik.handleBlur}
                    className={`h-12 w-[30%] rounded-xl ${errors.bYear && touched.bYear ? 'border-red-500' : 'border-gray-300'} bg-slate-50 px-3 text-sm outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/15`}
                >
                    <option value="">Year</option>
                    {
                        years.map((year, index) => (
                            <option key={index} >{year}</option>
                        ))
                    }
                </select>

                {
                    ageError && (
                        <p className="text-red-500 mt-2 text-xs absolute bottom-[-1rem] left-0 ">{ageError}</p>
                    )

                }

            </div>


        </>
    )
}

export default DateOfBirth