import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  background: linear-gradient(167deg, #0891B2 0%, #0891B2 60%, #ffffff 60%, #ffffff 100%);
  padding: 40px;
`

const UserImage = styled.div`
  height: 400px;
  background-image: url(/assets/skeleton.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 7px 7px 5px rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #ffffff;
  font-size: 48px;
  font-family: Playfair Between;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  margin: 30px 0;
  padding: 20px;
  box-shadow: 7px 7px 5px rgba(0,0,0,0.2);
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 30px;
  margin-bottom: 15px;
`

const Desc = styled.div`
  line-height: 1.5;
`

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  font-size: 24px;
`

const Icon = styled.a`
  color: black;
  text-decoration: none;
`

const AboutMe = () => {
  return (
    <Container>
      <UserImage>
        <div>Carlos Martinez</div>
      </UserImage>
      <UserInfo>
        <div>
          <Title>About me</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem tempora aliquam perferendis, tempore vero est obcaecati beatae error sunt modi laudantium rem accusamus, adipisci natus ratione, placeat minus! Similique, quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem tempora aliquam perferendis, tempore vero est obcaecati beatae error sunt modi laudantium rem accusamus, adipisci natus ratione, placeat minus! Similique, quae.
          </Desc>
        </div>

        <Icons>
          <Icon href="https://www.github.com/curlos">
            <i class="devicon-github-original"></i>
          </Icon>

          <Icon href="https://www.linkedin.com/in/carlos-martinez-cs/">
            <i class="devicon-linkedin-plain"></i>
          </Icon>

          <Icon href="https://www.linkedin.com/in/carlos-martinez-cs/">
            <i class="devicon-twitter-original"></i>
          </Icon>
        </Icons>

      </UserInfo>
    </Container>
  )
}

export default AboutMe