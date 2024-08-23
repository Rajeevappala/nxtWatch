import styled from 'styled-components'

export const Image = styled.img`
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 130px;
    margin-top: 15px;
  }
`

export const Navbar = styled.nav`
  background-color: ${props => (props.bgColor ? '#231f20' : '#f9f9f9')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
  padding: 12px;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
  }
`

export const Moon = styled.button`
  font-size: 25px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-right: 15px;
  color: ${props => (props.color ? 'white' : 'black')};

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const Profile = styled.img`
  width: 30px;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    width: 35px;
    margin-top: 2px;
  }
`
export const Button = styled.button`
  color: white;
  padding: 2px;
  color: ${props => (props.border ? '#ffffff' : '#3b82f6')};
  border: ${props =>
    props.border ? '1px solid #ffffff' : '1px solid #3b82f6'};
  background-color: transparent;
  border-radius: 5px;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    padding: 10px;
    margin-bottom: 5px;
  }
`

export const InnerNav = styled.div`
  display: flex;
  flex-direction: row;
`
