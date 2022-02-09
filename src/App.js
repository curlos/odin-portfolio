import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import styled from 'styled-components'
import './styles.css'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  font-family: Roboto;
`

function App() {
  return (
    <Container>
      <AboutMe />
      <Projects />
      <Footer />
    </Container>
  );
}

export default App;
