import React from 'react'
import './Card.css'

const CardExampleCardProps = (props) => {
  return <div className='column'>
    <img src={props.avatar} alt="staff" />
    <h3>{props.name}</h3>
    <p>{props.description}</p>
  </div>
}

export default CardExampleCardProps