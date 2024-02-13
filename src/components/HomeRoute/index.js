import Header from '../Header'

import './index.css'

const HomeRoute = () => (
  <>
    <Header />
    <div className="home-route-bg-container">
      <h1 className="heading">Your Flexibility, Our Excellence</h1>
      <br />
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
        className="digital-card"
      />
    </div>
  </>
)

export default HomeRoute
