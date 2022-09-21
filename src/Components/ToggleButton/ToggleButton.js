import React, {useState} from 'react'
import './ToggleButton.scss'

const ToggleButton = () => {

    const [isChecked, setIsChecked] = useState(false);
  /*  const salty = isChecked ? console.log('salty') : console.log('sweet');
    const salty = isChecked ? preference.style.color = 'red' : preference.style.color = 'blue' 
 */
  let preference = document.getElementById('preference');
  //hier wundere ich mich, dass kein template literal erforderlich ist??
  let salty = <div>SPINAT-QUICHE, VEGANE BROCCOLI-QUICHE</div>;
  let sweet = <div>ERDBEERKUCHEN, BIENENSTICH, MANDELTORTE</div>;
  isChecked ? preference = salty : preference = sweet;

  return (
   <>
    <h2>What do you fancy, love?</h2>
    <div className="toggle-container">
    <span>SÜSS</span>
      <input type="checkbox" id="flavour" class="toggle" onChange={() => setIsChecked(!isChecked)}/>
      <label htmlFor="flavour" class="label">
        <div className="ball"></div>
      </label>
      <span>SALZIG</span>
    </div>
    <div id="preference">{preference}</div>
   </>
  )
}

export default ToggleButton
