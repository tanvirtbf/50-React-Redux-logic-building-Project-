import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
import { useEffect, useState } from "react";

export default function SampleImageSlider({ url, limit, page }) {
  const [images,setImages] = useState([])
  const [currentSlide,setCurrentSlide] = useState(0)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide + 1)
  }

  async function fetchImage(getUrl){
    try {
      setLoading(true)
      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await res.json();
      if(data){
        setImages(data)
        setLoading(false)
        console.log(images)
      }
    } catch (e) {
      setError("Error Found!")
      setLoading(false)
    }
  }

  useEffect(()=>{
    if(url !== ""){
      fetchImage(url)
    }
  },[url])

  if(loading){
    return <h1>Image Loading...</h1>
  }
  if(error!==null){
    return <h1>{error}</h1>
  }

  return (
    <div className="slider-main">
      <h1>Image Slider Project</h1>
      <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrows arrow-left" />
        {
          images && images.length ? images.map((imageItem,index)=> <img key={imageItem.id} src={imageItem.download_url} alt={imageItem.download_url} />) : <h1>Image Not Found!</h1>
        }
        <BsArrowRightCircleFill onClick={handleNext} className="arrows arrow-right" />
        <span className="circle-indicators">
          <button></button>
        </span>
      </div>
    </div>
  );
}
