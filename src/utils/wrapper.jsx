import React, { createContext } from 'react'

export const datacontext = createContext(null);

const wrapper = (props) => {
    const [data, setdata] = useState(" IMP data!")
  return (
    <datacontext.Provider>
        {props.children}
    </datacontext.Provider>
  )
}

export default wrapper