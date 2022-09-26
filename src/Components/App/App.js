import React,  { useEffect, useState }  from 'react'
import { getList } from '../../services/list';
import './App.scss'
// import ToggleButton from '../ToggleButton/ToggleButton'
import Cakelist from '../../Components/Cakelist/Cakelist'


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


  return (
    <>
    <body>
      <h3>Flying Cakes</h3>
      <Cakelist list={list}/>
    </body>
     
    </>
  )
}

export default App


