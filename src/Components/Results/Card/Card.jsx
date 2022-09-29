import React, { useState, useEffect } from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



export default function Card(props) {

  const [id, setId] = useState(null);




  return (
    <>{
      props.product ?
        <div className='Card'>
          <div className='cardimg'>
            <img src={props.product.image} alt='55' />
            <div className='viewitem'> View Product</div>
          </div>

          <p>{props.product.title}</p>
          <div className='flex'><p>${props.product.price}</p>
            <FontAwesomeIcon className={`icon1 ${id === props.product.id ? 'red' : ''}`} id={Math.random} onClick={(e) => {
              setId(props.product.id);
            }} icon={faHeart} />
          </div>
        </div> : ""
    }</>
  )
}
