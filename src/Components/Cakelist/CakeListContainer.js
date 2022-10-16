import {useEffect, useState} from 'react'
import CakeList from './Cakelist'
import ToggleButton from '../ToggleButton/ToggleButton';
import { filterSaltyTaste, filterSweetTaste } from '../../utils.js/filterTaste';
const CakeListContainer = ({ list }) => {

  const [isSalty, setIsSalty] = useState(false);
  const [activeList, setActiveList] = useState(list)

  useEffect(() => {
    if (isSalty) {
      setActiveList(filterSaltyTaste(list))
    } else {
      setActiveList(filterSweetTaste(list))
    }

  }, [isSalty, list])
  return (
    <>
      <ToggleButton isSalty={isSalty} setIsSalty={setIsSalty} />
      <CakeList list={activeList} color={`${isSalty ? '#82C2B3ff': '#E67E5Fff'}`} />
    </>
  )
}

export default CakeListContainer