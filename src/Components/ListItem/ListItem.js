import React from 'react'
import './ListItem.scss'

const ListItem = ({cake, color}) => {
  return (
    <div>
      <li key={cake.id} className="card" style={{borderColor:color}}> 
          <h4>{cake.attributes.name}</h4>
          <p className="description">{cake.attributes.description}</p>
        </li>
    </div>
  )
}

export default ListItem