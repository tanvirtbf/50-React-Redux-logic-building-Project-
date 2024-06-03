import { useEffect } from "react";
import { useState } from "react"
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {BsArrowRightCircleFill} from 'react-icons/bs'


export default function ImageSlider({url,limit,page}){
  const [images,setImages] = useState([])
  const [currentSlide,setCurrentSlide] = useState(0);
  const [errorMsg,setErrorMsg] = useState(null);
  const [loading,setLoading] = useState(false)

  async function fetchImages(getUrl){

    try {
      setLoading(true)
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if(data){
        setImages(data)
        setLoading(false)
      }
    } catch (e) {
      setErrorMsg(e.message)
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(url !== ''){
      fetchImages(url)
    }
  },[url])

  console.log(images)

  if(loading){
    return <div>Loading Data ! Please Wait</div>
  }
  if(errorMsg !== null){
    return <div>Error occured {errorMsg}</div>
  }

  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left"/>
        {
          images && images.length ? 
          images.map(imageItem => (
            <img 
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className="current-image"
            />
          )) : null
        }
        <BsArrowRightCircleFill className="arrow arrow-left"/>
        <span className="circle-indicators">
          {
            images && images.length ? 
            images.map((_,index)=> <button 
              key={index}
              className="current-indicator"
            ></button>) : null
          }
        </span>
      </div>
    </>
  )
}