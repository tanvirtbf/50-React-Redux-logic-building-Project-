import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
import { useEffect, useState } from "react";

export default function SampleImageSlider({ url, limit, page }) {
  const [images,setImages] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")

  async function fetchImage(getUrl){
    try {
      setLoading(true)
      const res = await fetch(`${url}?page=${page}&limit=${limit}`)
      const data = await res.json();
      if(data){
        setLoading(false)
        setImages(data)
        setError("")
      }
    } catch (e) {
      setLoading(false)
      setError("Error Found!")
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
        <BsArrowLeftCircleFill className="arrows arrow-left" />
        <img alt={"img"} src={""} />
        <BsArrowRightCircleFill className="arrows arrow-right" />
        <span className="circle-indicators">
          <button></button>
        </span>
      </div>
    </div>
  );
}
