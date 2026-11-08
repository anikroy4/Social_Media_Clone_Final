import React, { useState } from 'react'
import { Moon } from '../../../../assets/svg/Moon'
import { Logout } from '../../../../assets/svg/Logout'

const SettingOption = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    
    return (
        <div>
            <ul>
                <li className='flex items-center gap-x-2 cursor-pointer hover:bg-gray-800 p-3 mb-4 rounded-full group hover:text-gray-50 cursor-poi' onClick={()=>setIsDarkMode(true)} >
                    <div className=' w-10 h-10 flex items-center justify-center rounded-full '>
                        <Moon />
                    </div>
                    <p className='font-serif text-base  transition-all ease-linear duration-75'>Display & Accessibility</p>
                </li>
                <li className='flex items-center gap-x-2 cursor-pointer hover:bg-gray-800 p-3 mb-4 rounded-full group hover:text-gray-50 text-center transition-all ease-linear duration-75'  >
                    <div className=' w-10 h-10 flex items-center justify-center rounded-full'>
                        <Logout />
                    </div>
                    <p className='font-serif text-base  transition-all ease-linear duration-75' >Logout</p>
                </li>
            </ul>


        </div>
    )
}

export default SettingOption