import './Leftbar.scss'

import { useState } from 'react';
import { leftmenu } from '../../api/leftmenuapi/leftmenuapi';
import Accordion from '../Accordian/Accordion';
const Leftbar = () => {
  const[data, setData] = useState(leftmenu)
  
  
  return (
    <div className='leftbar'>
      {data.map(res => (
       <Accordion {...res}/>  
      ))}
    
    </div>
  )
}

export default Leftbar