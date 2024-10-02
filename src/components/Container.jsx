import React from 'react'

const Container = ({children} ) => {
   
  return (
    <div className='w-1/2 my-5 mx-auto p-5 bg-zinc-500 rounded'>
        {children}
    </div>
  )
}

export default Container