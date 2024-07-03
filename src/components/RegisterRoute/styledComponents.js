import styled from 'styled-components'

export const RegisterFormContainer = styled.div`
  min-height: 100vh;
  font-family: Roboto;
`
export const HeaderContainer = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  padding-top: 20px;
  height: 10vh;
`
export const MeetupLogo = styled.img`
  width: 200px;
`
export const RegisterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const RegisterImage = styled.img`
  width: 600px;
`
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`
export const FormHeading = styled.h1`
  color: #334155;
  font-size: 50px;
`
export const FormLabel = styled.label`
  color: #64748b;
  font-size: 15px;
  margin-bottom: 5px;
`
export const FormInput = styled.input`
  height: 50px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  color: #64748b;
  padding-left: 15px;
  margin-bottom: 20px;
`
export const SelectInput = styled.select`
  height: 50px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  color: #334155;
  padding-left: 15px;
  margin-bottom: 20px;
`
export const Option = styled.option`
  color: #334155;
  font-weight: bold;
`
export const RegisterFormButton = styled.button`
  height: 50px;
  width: 200px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: #3b82f6;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
`
