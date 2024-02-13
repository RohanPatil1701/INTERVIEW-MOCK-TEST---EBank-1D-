import {Redirect, Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  return (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
        className="logo-image"
      />
      <button
        type="button"
        className="logout-button"
        onClick={onClickLogoutButton}
      >
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
