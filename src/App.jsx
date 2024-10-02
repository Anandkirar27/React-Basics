import { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Container from "./components/Container";

const App =  () => {

  // const [time,settime] = useState(new Date().toLocaleTimeString())

  // setInterval( () => {
  //   settime(new Date().toLocaleTimeString());
  // } ,1000)

  return (
     <div className="flex items-center justify-center p-10 flex-col">
      <Container value="hELLO" name="heloww duniya">
        <h1>Heloeoe</h1>
        <h2>Worlls</h2>
      </Container>
      </div>
  )
}

export default App;