import React from 'react'
import OneImg from '/img.jpg'

function Card({name, per, data, arr}) {
  return (
    <>
      <div className='card'>
        <img src={OneImg} alt="" />
        <h1>{name}</h1>
        <h1>{data}</h1>
        <p>{per}</p>
        <p>{arr}</p>
        <button>Get Start</button>
      </div>
    </>
  )
}

export default Card