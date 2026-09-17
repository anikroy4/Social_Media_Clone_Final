import React, { useState ,useRef} from 'react'
import { SearchIcon } from "../../../../assets/svg/SearchIcon"
import SearchBox from './SearchBox'
import OutsideClick from '../../../../functions/click'

const Header = () => {
  const [show, setShow] = useState(false)
  const  killOutsideRef = useRef (null)
  
  OutsideClick(killOutsideRef, () =>{
    setShow(false);
  })
  return (
    <>
      <div className='flex justify-between items-center'  >
        <div>
          <h3 className='font-bold text-2xl'>News Feeds</h3>
        </div>
        <div className='w-[40%] relative'>
          <div className="flex items-center gap-x-3 border border-gray-300 rounded-full  py-3 px-4 text-base" onClick={() => setShow(true)}>
            <div className='text-gray-400'>
              <SearchIcon />
            </div>
            <div>
              <input type="text" placeholder="Search..." className="focus:outline-none text-base" />
            </div>
          </div>
          {show &&
          <div className="absolute top-0 left-0 w-full text-base min-h-[400px] max-h-[70vh] bg-white rounded-lg shadow-lg " ref={killOutsideRef}>
             <SearchBox />
          </div>
          }
        </div>
      </div>

    </>
  )
}

export default Header
