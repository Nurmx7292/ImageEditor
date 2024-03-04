import React from 'react'
import '../App.css'

export const Item = ({onpick,name,active}) => {
  return ( 
    <button onClick={onpick} className={`sidebar-item ${active?"active":""}`}>{name}</button>
  )
}
