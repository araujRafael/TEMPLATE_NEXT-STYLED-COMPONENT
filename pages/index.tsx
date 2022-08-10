import type { NextPage } from 'next'
import { Button } from '../Components/Atoms/Button'
import { SectionContainer } from '../Components/Atoms/SectionContainer'
import { Title } from '../Components/Atoms/Title'
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
        <Button>
          Click here
        </Button>
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
