import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2 className="header-link"><Link to="/">{text}</Link></h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#FF6A95'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
