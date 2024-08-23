import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  Form,
  Label,
  Input,
  CheckBoxContainer,
  Button,
  ErrorMsg,
} from './styledComponents'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isCheck: false,
    errorMsg: '',
    errorMsgFalse: false,
  }

  getUserName = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  getCheckBoxDetails = () => {
    this.setState(prevState => ({isCheck: !prevState.isCheck}))
  }

  getJwtToken = token => {
    const {history} = this.props

    Cookies.set('jwt_token', token, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  submitFormDetails = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const fetchData = await fetch('https://apis.ccbp.in/login', options)
    const data = await fetchData.json()

    if (fetchData.ok) {
      this.getJwtToken(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg, errorMsgFalse: true})
    }
  }

  render() {
    const {username, password, isCheck, errorMsg, errorMsgFalse} = this.state
    const checkBox = isCheck ? 'text' : 'password'
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <Form onSubmit={this.submitFormDetails}>
          <div className="image-element">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
              className="logo"
            />
          </div>
          <Label htmlFor="username">USERNAME</Label>
          <Input
            type="text"
            id="username"
            placeholder="Username"
            onChange={this.getUserName}
            value={username}
          />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            type={checkBox}
            id="password"
            placeholder="Password"
            onChange={this.getPassword}
            value={password}
          />
          <CheckBoxContainer>
            <input
              type="checkbox"
              onChange={this.getCheckBoxDetails}
              value={isCheck}
            />
            <Label> Show Password</Label>
          </CheckBoxContainer>
          <Button type="Submit">Login</Button>
          {errorMsgFalse && <ErrorMsg>*{errorMsg}</ErrorMsg>}
        </Form>
      </LoginContainer>
    )
  }
}

export default Login
