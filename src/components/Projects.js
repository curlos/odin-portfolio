import React from 'react'
import Project from './Project'
import styled from 'styled-components'

const Container = styled.div`
  padding: 40px;
  padding-bottom: 80px;
  
  @media (max-width: 540px) {
    text-align: center;
  }
`

const Title = styled.div`
  font-family: Playfair Between;
  font-size: 30px;
  margin-bottom: 10px;

  @media (max-width: 540px) {
    font-size: 48px;
    text-align: center;
  }
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`

const Projects = () => {
  return (
    <Container>
      <Title>My work</Title>
      <ProjectsContainer>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </ProjectsContainer>
    </Container>
  )
}

export default Projects