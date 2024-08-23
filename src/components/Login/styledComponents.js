import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 45vh;
  width: 25vw;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 40px;
  border-radius: 5px;
`
export const Label = styled.label`
  color: #475569;
  font-weight: 600;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 18vw;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Button = styled.button`
  background-color: #3b82f6;
  padding: 5px;
  margin: 10px 0px 0px 2px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-left: 15px;
`
