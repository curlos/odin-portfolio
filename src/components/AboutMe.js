import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  background: linear-gradient(167deg, #0891B2 0%, #0891B2 60%, #ffffff 60%, #ffffff 100%);
  padding: 40px;

  @media (max-width: 991px) {
    display: block;
    padding: 80px;
    padding-top: 140px;
  }

  @media (max-width: 440px) {
    display: flex;
    flex-direction: column;
    background: linear-gradient(167deg, #0891B2 0%, #0891B2 40%, #ffffff 40%, #ffffff 100%);
  }
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
  padding: 20px;
  
  @media (min-width: 441px) and (max-width: 991px) {
    display: none;
  }
`

const UserName = styled.div`
  display: flex;
  justify-content: center;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.4);
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  margin: 30px 0;
  padding: 20px;
  box-shadow: 7px 7px 5px rgba(0,0,0,0.2);

  @media (min-width: 441px) and (max-width: 991px) {
    display: none;
  }

  @media (max-width: 440px) {
    box-shadow: none;
    padding: 0px;
  }
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 30px;
  margin-bottom: 15px;

  @media (max-width: 440px) {
    font-size: 48px;
    text-align: center;
  }
`

const Desc = styled.div`
  line-height: 1.5;

  @media (max-width: 440px) {
    font-size: 18px;
  }
`

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  margin-top: 10px;

  @media (max-width: 440px) {
    justify-content: center;
  }
`

const Icon = styled.a`
  color: black;
  text-decoration: none;
`

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 7px 7px 5px rgba(0,0,0,0.2);

  @media (max-width: 440px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: none;
  }

`
const Floated = styled.img`
  float: left;
  width: 350px;
  background: red;
  margin-top: -90px;
  margin-left: -30px;
  margin-right: 15px;
`

const AboutText = styled.div`
  padding: 15px;
`

const TopName = styled.div`
  float: left;
  font-size: 48px;
  font-family: Playfair Between;
  margin-top: -70px;
  margin-left: -70px;
  color: #ffffff;
`

const AboutMe = () => {
  return (
    <Container>
      <Wrapper>
        <Floated src="/assets/skeleton.jpg" />
        <TopName>Carlos Martinez</TopName>
        
        <AboutText>
          <Title>About me</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem tempora aliquam perferendis, tempore vero est obcaecati beatae error sunt modi laudantium rem accusamus, adipisci natus ratione, placeat minus! Similique, quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem tempora aliquam perferendis, tempore vero est obcaecati beatae error sunt modi laudantium rem accusamus, adipisci natus ratione, placeat minus! Similique, quae.
          </Desc>
        </AboutText>

      </Wrapper>

      <UserImage>
        <UserName>Carlos Martinez</UserName>
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