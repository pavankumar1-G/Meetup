import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  activeTopic: '',
  isRegistered: false,
  isRegisterError: false,
  changeName: () => {},
  changeTopic: () => {},
  updateError: () => {},
  updateHome: () => {},
})
export default RegisterContext
