import React, {useState} from 'react'
import './ToggleButton.scss'

const ToggleButton = (props) => {
  //console.log(props.salty)

    const [isChecked, setIsChecked] = useState(false);
  /*  const salty = isChecked ? console.log('salty') : console.log('sweet');
    const salty = isChecked ? preference.style.color = 'red' : preference.style.color = 'blue' 
 */
  let preference = document.getElementById('preference');
/*   hier wundere ich mich, dass kein template literal erforderlich ist??
 preferences sollen in Parent umziehen und als Prop übergeben werden
  let salty = <div>SPINAT-QUICHE, VEGANE BROCCOLI-QUICHE</div>;
  let sweet = <div>ERDBEERKUCHEN, BIENENSTICH, MANDELTORTE</div>; */

  
  isChecked ? preference = props.salty : preference = props.sweet;

  return (
   <>

    <div className="display_two" id="center">Eat More Cake</div>
    <div className="toggle-container">
    <span className="legend">süss</span>
      <input type="checkbox" id="flavour" className="toggle" onChange={() => setIsChecked(!isChecked)}/>
      <label htmlFor="flavour" class="label">
        <div className="ball"></div>
      </label>
      <span className="legend">salzig</span>
    </div>
    <div id="preference">{preference}</div>
   
   </>
  )
}

export default ToggleButton
