import React from 'react'

const Container = ({className = '', children} ) => {
  return (
    <>
            <div className={`w-full min-h-screen ${className}`}>
                {children}
            </div>    
    </>
  )
}

export default Container