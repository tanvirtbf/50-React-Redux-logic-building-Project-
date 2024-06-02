import './styles.css'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";


export default function SampleAccordian(){

  return(
    <div className="main">
      <div className='row'>
        <div className='accordian-btn'>
          <button>Enable Multi Selection</button>
        </div>
        <div className='accordian-item'>
          <div className='items'>
            <div className='items-heading'>
              <h2>Hello</h2>
              <span>Icon</span>
            </div>
            <div className='items-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, explicabo.
            </div>
          </div>
          <div className='items'>
            <div className='items-heading'>
              <h2>Hello</h2>
              <span>Icon</span>
            </div>
            <div className='items-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, explicabo.
            </div>
          </div>
          <div className='items'>
            <div className='items-heading'>
              <h2>Hello</h2>
              <span>Icon</span>
            </div>
            <div className='items-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, explicabo.
            </div>
          </div>
          <div className='items'>
            <div className='items-heading'>
              <h2>Hello</h2>
              <span>Icon</span>
            </div>
            <div className='items-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, explicabo.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}