import React,  { useEffect, useState }  from 'react'
import { getList } from '../../services/list';
import './App.scss'
// import ToggleButton from '../ToggleButton/ToggleButton'
import CakeListContainer from '../../Components/Cakelist/CakeListContainer'


const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items.data)
        }
      })
    return () => mounted = false;
  }, [])

  /* I would do all filtering in here and then just pass the list or 
  also have a wrapper class that handles the  data handling  */
  
  return (
    <>
    <body>
      <h3>Flying Cakes</h3>
      <CakeListContainer list={list}/>
    </body>
     
    </>
  )
}

export default App


