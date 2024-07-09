import React from 'react'
import './tile.css'

export default function CompletedTile(props) {
  return (
    <div className='tile'>
    <div className="tile-title">{props.title}</div>
    <div className="tile-description">{props.description}</div>
    <button className="btn">{props.customTimestamp}</button>
    </div>
  )
}
