import React from 'react'
import { Button } from './Button';

const Header = (props) => {
 
  return (
    <header className='header' >
      <h1>TASK TRACKER</h1>
      <Button color={props.showAdd ? 'red' : 'green'} text={props.showAdd ? 'Close' : 'Add'} onClick={props.onAdd}/>
      
    </header>
  )
}

export default Header
