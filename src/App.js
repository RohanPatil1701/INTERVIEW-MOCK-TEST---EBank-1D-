import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <Route exact path="/not-found" component={NotFoundRoute} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
