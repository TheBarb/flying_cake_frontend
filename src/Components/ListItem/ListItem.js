import React from 'react'
import './ListItem.scss'

const ListItem = (item) => {

    let cake = item.item;
    let flavoredColor;

    cake.attributes.sweetnotsalty ? flavoredColor = '#E67E5Fff' : flavoredColor =  '#82C2B3ff';
 
  return (
    <div>
        <li key={cake.id} className="card" style={{borderColor:flavoredColor}}> 
            <h4>{cake.attributes.name}</h4>
            <p className="description">{cake.attributes.description}</p>
         </li>
    </div>
  )
}

export default ListItem