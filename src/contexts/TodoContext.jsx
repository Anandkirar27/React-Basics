import {useState, createContext } from "react"

export const todocontext = createContext(null);

const TodoContext = (props) => {
    console.log(props);
    
    const [todo, settodo] = useState("ye global data ")
  return (
    <todocontext.Provider value={[todo, settodo]}>
        {props.children}
    </todocontext.Provider>
  )
}

export default TodoContext