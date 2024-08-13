import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #fff;
  height: 100vh;
  background-size: cover;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardContainer = styled.div`
  text-align: center;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  color: #1e293b;
  font-weight: 600;
`

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #334155;
`

export const Image = styled.img`
  height: 210px;
  width: 320px;
`

export const Details = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #334155;
  max-width:320px
  
`

export const ReadMoreBtn = styled.button`
  outline: none;
  background-color: #1f81ff;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #1667cc;
  }
`
