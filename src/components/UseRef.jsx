import React, { useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef(null);
    const errorRef = useRef(null);

    const InputChangeHandler = () => {
        if(inputRef.current.value.length < 4){
            errorRef.current.classList.remove("hidden");
        } else{
            errorRef.current.classList.add("hidden");
        }
    }

  return (
    <div className='mx-auto w-[80%] p-10 rounded bg-zinc-100 mt-10'>
        <form >
            <input 
                ref={inputRef}
                type="text" 
                placeholder='Username'
                className='w-[25%] p-2 rounded border'
                onChange={InputChangeHandler}
                />

             <p ref={errorRef} className='text-red-500 hidden'>
                Username must required and have atleast 4 characters
                </p>   
        </form>
    </div>
  )
}

export default UseRef