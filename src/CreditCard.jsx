import visaLogo from './assets/images/visa.png'
import masterLogo from './assets/images/master-card.svg'

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const logo = type === 'Visa' ? visaLogo : masterLogo
  const lastFourDigits = number.slice(-4)
  const formattedMonth = expirationMonth.toString().padStart(2, '0')
  const formattedYear = expirationYear.toString().slice(-2)

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: '10px',
    width: '300px',
    height: '150px',
    padding: '20px',
    margin: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    fontFamily: 'sans-serif',
  }

  return (
    <div style={cardStyle}>
      <div style={{ textAlign: 'right' }}>
        <img src={logo} alt={type} style={{ width: '60px' }} />
      </div>
      <div
        style={{ fontSize: '1.4em', letterSpacing: '2px', margin: '15px 0' }}
      >
        •••• •••• •••• {lastFourDigits}
      </div>
      <div style={{ fontSize: '0.9em' }}>
        <div>
          Expires {formattedMonth}/{formattedYear} &nbsp;&nbsp;&nbsp; {bank}
        </div>
        <div>{owner}</div>
      </div>
    </div>
  )
}

export default CreditCard
