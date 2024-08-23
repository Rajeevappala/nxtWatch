import './App.css'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import ThemeContext from './content/ThemeContext'

// Replace your code here

class App extends Component {
  state = {isDarkTheme: false}

  toggleDarkTheme = () =>
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))

  render() {
    const {isDarkTheme} = this.state
    console.log(isDarkTheme)
    return (
      <div>
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            toggleDarkTheme: this.toggleDarkTheme,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
