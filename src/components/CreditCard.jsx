import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master-card.svg'
export default function CreditCard(props) {
    const digit = props.number.split('').splice(12,4).join('')
  return (
    <div>
        <div style={{background: `${props.bgColor}`}} className='credit'>
            <div style={{color: `${props.color}`}}>
            <div className="logo">
            <img src={props.type === 'Visa' ? visa : mastercard} height="50" width="75" />
            </div>
            <p>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull; {digit} </p>
            <p>Expires: {props.expirationMonth} / {props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
            </div>
        </div>
    </div>
  )
}