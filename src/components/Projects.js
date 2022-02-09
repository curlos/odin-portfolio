import React from 'react'
import Project from './Project'
import styled from 'styled-components'

const Container = styled.div`
  padding: 40px;
`

const Title = styled.div`
  font-family: Playfair Between;
  font-size: 30px;
  margin-bottom: 10px;
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
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