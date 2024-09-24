import { useState } from "react";

const App =  () => {

  const [title,setTitle] = useState("Hello world")

    // let title = "Hello World!"

  const text = () => {
    setTitle("Hello world! clicked");
    }


  return (
     <>
      <h1 className="text-3xl"> {title} </h1>
      <button onClick={text} className="py-2 px-4 bg-teal-400 mt-4 text-white">Click Me</button> 
     </>
  )
}

export default App;