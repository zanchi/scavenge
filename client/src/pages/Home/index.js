import { h } from 'preact'
import styled from 'astroturf'
import FullButton from '../../components/FullButton'
import Header from '../../components/Header'


const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Home = () => <Container>
    <Header />
    <ButtonGroup>
        <Button>Create a Game</Button>
        <Button>Find a Game</Button>
    </ButtonGroup>
</Container>

export default Home
