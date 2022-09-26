import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton';
import ListItem from '../ListItem/ListItem';

const Cakelist = (list) => {
  let cakes = list.list;
   console.log(cakes);

let sweet = <ul>
       {cakes.map(item => 
       item.attributes.sweetnotsalty ? 
       <ListItem item={item}/> : '' 
       )
     }
     </ul> 

     
let salty = <ul>
     {cakes.map(item => 
     item.attributes.sweetnotsalty ? '' :
     <ListItem item={item}/>
   )
   }
   </ul> 



   let props = {
    salty : salty,
    sweet: sweet
   }


  /*  <ul>
   {list.list.map(item => 
   <li key={item.id}> 
    <div>{item.attributes.name}</div>
    <div>{item.attributes.description}</div>
    </li> 
 )
 }
 </ul> */

  return (
    <>
    <ToggleButton {...props}/>
    </>
  )
}

export default Cakelist
