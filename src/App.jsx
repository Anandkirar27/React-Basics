import React, { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header'

import Child2 from './components/Child2';

// Step 1. Create Context
// export const DataContext = createContext(null);


const App = () => {

  // const [data, setdata] = useState("This data should be available to all child")

  return (
    <div>
      {/* <h1  style={{backgroundColor:'teal',padding:'10px',fontSize:'70px'}} >Hello</h1>
      <h2>World</h2>
      <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid autem numquam corporis harum quas in laborum debitis placeat porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eius iure aliquid repudiandae, praesentium nisi porro dicta dolorem totam numquam! </p>

      <Header/> */}

        {/* Step 2. Providing data to context and wrapping the application */}
      {/* <DataContext.Provider value={[data, setdata]}>
        <Child1 />
        <Child2 />
      </DataContext.Provider> */}

        <Header  />

    </div>
  )
}

export default App