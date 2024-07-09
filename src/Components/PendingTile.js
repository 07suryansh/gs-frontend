import React from 'react'
import './tile.css'

export default function PendingTile(props) {
  return (
    <div className='tile'>
    <div className="tile-title">{props.title}</div>
    <div className="tile-description">{props.description}</div>
    <button className="btn" onClick={()=>props.handleClick(props.id)}>Start →</button>
    </div>
  )
}
