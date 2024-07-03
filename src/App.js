import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import RegisterContext from './MeetupContext/RegisterContext'

import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFoundRoute from './components/NotFoundRoute'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    name: '',
    activeTopic: topicsList[0].id,
    isRegistered: false,
    isRegisterError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = activeTopic => {
    this.setState({activeTopic})
  }

  updateHome = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({isRegisterError: true})
  }

  render() {
    const {name, activeTopic, isRegistered, isRegisterError} = this.state

    return (
      <RegisterContext.Provider
        value={{
          name,
          activeTopic,
          isRegistered,
          isRegisterError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          updateError: this.updateError,
          updateHome: this.updateHome,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
