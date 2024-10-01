import { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

const App =  () => {

  // const [time,settime] = useState(new Date().toLocaleTimeString())

  // setInterval( () => {
  //   settime(new Date().toLocaleTimeString());
  // } ,1000)

  return (
     <div className="flex items-center justify-center p-10 flex-col">
      <Child1 title = "Title for child1" />
      <Child2 title = "Title for child2" />
     </div>
  )
}

export default App;