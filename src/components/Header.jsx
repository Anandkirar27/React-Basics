import React, { useContext } from 'react'
import css from './Header.module.css'
import { todocontext } from '../contexts/TodoContext'

const Header = () => {

  const {data} = useContext(todocontext);
  return (
    <div >Header</div>
  )
}

export default Header