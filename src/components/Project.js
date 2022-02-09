import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  box-shadow: 4px 4px 10px rgba(0,0,0,0.4);
`

const ProjectScreenshot = styled.div`
  background-color: #0891B2;
  padding: 30px;
  font-size: 35px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectInfo = styled.div`
  padding: 15px;
  padding-bottom: 70px;
`

const ProjectTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

const Title = styled.div`
  font-size: 20px;
`

const Desc = styled.div`

`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
`

const Icon = styled.a`
  color: black;
  text-decoration: none;
`

const Project = () => {
  return (
    <Card>
      <ProjectScreenshot>
        <div>screenshot of project</div>
      </ProjectScreenshot>

      <ProjectInfo>
        <ProjectTop>
          <Title>Project name</Title>
          <Icons>
            <Icon href="https://www.github.com/curlos">
              <i class="devicon-github-original"></i>
            </Icon>

            <Icon href="https://www.linkedin.com/in/carlos-martinez-cs/">
              <i class="devicon-linkedin-plain"></i>
            </Icon>
          </Icons>
        </ProjectTop>

        <Desc>Short description of the project. Just a couple sentences will do.</Desc>
      </ProjectInfo>
    </Card>
  )
}

export default Project