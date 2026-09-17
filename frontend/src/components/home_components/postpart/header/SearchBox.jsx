import React, { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../../../../assets/svg/SearchIcon'

const SearchBox = () => {
    const inputBox = useRef(null);
    const [iconVisible, setIconVisible] = useState(false);

    useEffect(() => {
        inputBox.current.focus();

    }, [])
    return (

        <>

            <div className="flex items-center gap-x-3 border border-gray-300 rounded-full  py-3 px-4">
                {
                    iconVisible && (
                        <div className='text-gray-400'
                        onClick={() => inputBox.current.focus()}
                        >
                            <SearchIcon />
                        </div>
                    )
                }

                <div>
                    <input
                        onFocus={() => setIconVisible(false)}
                        onBlur={() => setIconVisible(true)}
                        ref={inputBox}
                        type="text"
                        placeholder="Search..." className="focus:outline-none text-base" />
                </div>
            </div>
            <div className='mt-3'>
                <p className='text-base font-semibold text-[#929292] px-4'>Recent Searches</p>
            </div>       

        </>
    )
}

export default SearchBox