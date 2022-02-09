import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  gap: 25px;
  background-color: #0891B2;
  padding: 40px;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`

const Title = styled.div`
  color: #ffffff;
  font-size: 30px;
  font-family: Playfair Between;
`

const Desc = styled.div`
  color: #ffffff;
  font-size: 16px;
`

const ContactLink = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
`

const Icon = styled.img`
  filter: invert(100%) sepia(7%) saturate(7471%) hue-rotate(214deg) brightness(120%) contrast(89%);
`

const LinkIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 24px;
`

const LinkIcon = styled.a`
  color: black;
  text-decoration: none;
`

const Footer = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>Contact me</Title>
        <Desc>Please get in touch if you think our work could be mutually beneficial</Desc>
        <Desc>
          <div>1234 Random Road</div>
          <div>Random Town, California 12345</div>
        </Desc>

        <Desc>
          <ContactLink>
            <Icon src="/assets/phone.svg" alt="email icon"/>
            <span>555-555-5555</span>
          </ContactLink>
        </Desc>
        <Desc>
          <ContactLink>
            <Icon src="/assets/email-outline.svg" alt="email icon"/>
            <span>carlosmartinez.is.not.real@gmail.com</span>
          </ContactLink>
        </Desc>

        <LinkIcons>
          <LinkIcon href="https://www.github.com/curlos">
            <i class="devicon-github-original"></i>
          </LinkIcon>

          <LinkIcon href="https://www.linkedin.com/in/carlos-martinez-cs/">
            <i class="devicon-linkedin-plain"></i>
          </LinkIcon>

          <LinkIcon href="https://www.linkedin.com/in/carlos-martinez-cs/">
            <i class="devicon-twitter-original"></i>
          </LinkIcon>
        </LinkIcons>
      </LeftContainer>

      <Image src="/assets/desk.jpg" alt="image of desk" />
      
      
    </Container>
  )
}

export default Footer