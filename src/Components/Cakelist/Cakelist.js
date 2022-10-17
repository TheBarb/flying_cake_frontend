import React from 'react'
import ListItem from '../ListItem/ListItem';

/* have the list with the items clean of data */
/* added the color as prop here */

const Cakelist = ({list, color}) => {

  return (
    <ul>
      {
        list && list.map(item => <ListItem cake={item} color={color} />)
      }
    </ul>
  )
}

export default Cakelist
