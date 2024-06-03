import React from 'react'
import ImageSlider from './ImageSlider'

const Slider = () => {
  return (
    <div>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={3}/>
    </div>
  )
}

export default Slider
