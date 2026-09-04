import React from 'react'

const LeftHomeData = ({data}) => {
  const ItemIcon=data.icon;

  return (
    <>
    <div className='flex items-center gap-x-2 cursor-pointer hover:bg-gray-800 p-3 mb-5 rounded-full group'>
      <div className="group-hover:text-gray-500">
        <ItemIcon/>
      </div>
      <div className='group-hover:text-gray-500 font-semibold'>
        <p>{data.title}</p>
      </div>
    </div>
     
    </>
  )
}

export default LeftHomeData