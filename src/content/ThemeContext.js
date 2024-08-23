import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
})

export default ThemeContext
