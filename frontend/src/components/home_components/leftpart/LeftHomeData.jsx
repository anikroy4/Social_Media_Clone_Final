import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SettingOption from './settingOption';

const LeftHomeData = ({ data }) => {
  const [showSettings, setShowSettings] = useState(false);
  const ItemIcon = data.icon;

  const settingsSeparation = data.title === "Settings" && (
    <>
      <div className="relative">
        <div to={data.to} className='flex items-center gap-x-2 cursor-pointer hover:bg-gray-800 p-3 mb-5 rounded-full group' onClick={() => setShowSettings(!showSettings)} >
          <div className="group-hover:text-gray-500">
            <ItemIcon />
          </div>
          <div className='group-hover:text-gray-500 font-semibold'>
            <p>{data.title}</p>
          </div>
        </div>

        <div className="absolute top-16 left-0 w-full bg-[#bbbbbb] shadow-lg rounded-md  ">
          {
          showSettings && (
            <div>
              <SettingOption/>
            </div>)
        }
        </div>
      </div>

    </>
  );


  return (
    <>
      {settingsSeparation ? (settingsSeparation

      )
        :
        (
          <NavLink to={data.to} className='flex items-center gap-x-2 cursor-pointer hover:bg-gray-800 p-3 mb-5 rounded-full group'>
            <div className="group-hover:text-gray-500">
              <ItemIcon />
            </div>
            <div className='group-hover:text-gray-500 font-semibold'>
              <p>{data.title}</p>
            </div>
          </NavLink>
        )}


    </>
  )
}

export default LeftHomeData