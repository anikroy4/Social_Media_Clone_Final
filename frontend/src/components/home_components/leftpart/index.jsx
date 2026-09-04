import React from 'react'
import LeftProfile from './LeftProfile'
import LeftHomeData from './LeftHomeData'
import { LeftData } from './Data'
import { Friends } from '../../../assets/svg/Friends'


const LeftPart = () => {
  return (
    <>
      <div>
        <LeftProfile />
      </div>
      <div>
        {
          LeftData.map((item, index) => (
            <div key={index} data={item}>
              <LeftHomeData />
            </div>
          ))
        }
        <Friends/>
      </div>


    </>
  )
}

export default LeftPart