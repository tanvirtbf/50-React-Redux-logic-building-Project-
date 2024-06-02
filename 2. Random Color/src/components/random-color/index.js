import React from 'react'
import './styles.css'
import { useState } from 'react'

const RandomColor = () => {
  const [typeOfColor,setTypeOfColor] = useState('hex');
  const [color,setColor] = useState('#000000')
  return (
    <div className='container'>
      <button>Create HEX Color</button>
      <button>Create RGB Color</button>
      <button>Generate Random Color</button>
    </div>
  )
}

export default RandomColor
