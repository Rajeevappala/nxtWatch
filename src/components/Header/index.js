import {FaMoon} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoSunnyOutline} from 'react-icons/io5'
import ThemeContext from '../../content/ThemeContext'

import {
  Image,
  Navbar,
  Moon,
  Profile,
  Button,
  InnerNav,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleDarkTheme} = value

      const renderDarkMode = () => {
        toggleDarkTheme()
      }

      const renderLoginPage = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const logoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <Navbar bgColor={isDarkTheme}>
          <div>
            <Image src={logoImage} alt="nxt watch logo" />
          </div>
          <InnerNav>
            <Moon type="button" onClick={renderDarkMode} color={isDarkTheme}>
              {isDarkTheme ? <IoSunnyOutline /> : <FaMoon />}
            </Moon>
            <div>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </div>
            <div>
              <Button
                type="button"
                border={isDarkTheme}
                onClick={renderLoginPage}
              >
                Logout
              </Button>
            </div>
          </InnerNav>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
