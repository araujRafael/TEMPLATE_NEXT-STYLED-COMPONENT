import type { NextPage } from 'next'
import { Button } from '../Components/Atoms/Button'
import { SectionContainer } from '../Components/Atoms/SectionContainer'
import { Title } from '../Components/Atoms/Title'
import { Wrapper } from '../Components/Atoms/Wrapper'
import InputBox from '../Components/Molecules/InputBox'
import { navLinks } from '../Constants/NavLinks'


const Home: NextPage = () => {
  // Contexts
  // States

  // Functions

  // Render
  return (
    <>
      <SectionContainer className='center-col' >
        <Title>Hero</Title>
        {/*  */}
        <Wrapper
          style={{ width: "400px", height: "min-content" }}
          className="center-col"
        >
          <InputBox
            type={"text"}
            placeholder='Name' />
          <Button>
            Click here
          </Button>
        </Wrapper>
      </SectionContainer>
      <SectionContainer
        id={navLinks[1].id}
        className='center-col'>
        <Title>Second</Title>
      </SectionContainer>
      <SectionContainer
        id={navLinks[2].id}
        className='center-col'>
        <Title>Third</Title>
      </SectionContainer>
    </>
  )
}

export default Home
