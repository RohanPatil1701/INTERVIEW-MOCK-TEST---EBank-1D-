import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginRoute extends Component {
  state = {
    userId: '',
    pin: '',
    errorMsg: '',
    showErrorMsg: false,
  }

  onChangeUserID = event => {
    this.setState({userId: event.target.value})
  }

  onChangePIN = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg,
    })
  }

  renderUserId = () => {
    const {userId} = this.state
    return (
      <>
        <label htmlFor="userId" className="label-element">
          User ID
        </label>
        <br />
        <input
          id="userId"
          value={userId}
          type="text"
          placeholder="Enter User ID"
          className="input-element"
          onChange={this.onChangeUserID}
        />
      </>
    )
  }

  renderPin = () => {
    const {pin} = this.state
    return (
      <>
        <label htmlFor="pin" className="label-element">
          PIN
        </label>
        <br />
        <input
          id="pin"
          value={pin}
          type="password"
          placeholder="Enter PIN"
          className="input-element"
          onChange={this.onChangePIN}
        />
      </>
    )
  }

  onSubmitForm = async event => {
    const {userId, pin} = this.state
    event.preventDefault()
    const url = 'https://apis.ccbp.in/ebank/login'

    const userDetails = {
      user_id: userId,
      pin,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderLeftImage = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
        alt="website login"
        className="image"
      />
    </div>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {errorMsg, showErrorMsg} = this.state
    const renderMsg = showErrorMsg ? `${errorMsg}` : ''

    return (
      <div className="login-route-bg-container">
        <div className="image-container">
          {this.renderLeftImage()}
          <form className="input-containers" onSubmit={this.onSubmitForm}>
            <div>
              <h1 className="heading">Welcome Back</h1>
              {this.renderUserId()}
              <br />
              {this.renderPin()}

              <button type="submit" className="login-button">
                Login
              </button>
            </div>
            <p className="error">{renderMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
