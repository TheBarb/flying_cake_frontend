import React from 'react'
import './ToggleButton.scss'

const ToggleButton = ({isSalty, setIsSalty}) => {

  return (
   <>
    <div className="display_two" id="center">Eat More Cake</div>
    <div className="toggle-container">
    <span className="legend">süss</span>
      <input type="checkbox" id="flavour" className="toggle" onChange={() => setIsSalty(!isSalty)}/>
      <label htmlFor="flavour" className="label">
        <div className="ball"></div>
      </label>
      <span className="legend">salzig</span>
    </div>
   
   </>
  )
}

export default ToggleButton
