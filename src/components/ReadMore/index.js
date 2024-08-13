import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  MainHeading,
  Description,
  Image,
  Details,
  ReadMoreBtn,
} from './styledComponents'

const reactHooksDescription = `Hooks solve a wide variety of seemingly unconnected problems in React
that we have encountered over five years of writing and maintaining
tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.`

const ReadMore = () => {
  const [showFullContent, setShowFullContent] = useState(false)

  const handleToggleContent = () => {
    setShowFullContent(prevState => !prevState)
  }

  return (
    <MainContainer>
      <CardContainer>
        <MainHeading>React Hooks</MainHeading>
        <Description>Hooks are a new addition to React</Description>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Details>
          {showFullContent
            ? reactHooksDescription
            : `Hooks solve a wide variety of seemingly unconnected problems in React
            that we have encountered over five years of writing and maintaining
            tens of thousands of components.`}
        </Details>
        <ReadMoreBtn onClick={handleToggleContent}>
          {showFullContent ? 'Read Less' : 'Read More'}
        </ReadMoreBtn>
      </CardContainer>
    </MainContainer>
  )
}

export default ReadMore
