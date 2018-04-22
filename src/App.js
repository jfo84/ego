import React, { Component } from 'react';
import styled from 'styled-components';

import { FlexRow, FlexStart, FlexEnd } from './components/Flex';

import ProfilePicture from './components/ProfilePicture';
import ProfileBlurb from './components/ProfileBlurb';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 0;
  z-index: 1;
  overflow: hidden;
  background: #537756;
`;

const Header = styled.section`
  margin: auto;
  max-width: 760px;
`;

const Title = styled.h1`
  font-family: "Mina", sans-serif;
  font-weight: 300;
  font-size: 1.5em;
  text-align: left;
  color: #FDFDFD;
  margin-bottom: 0.15em;
`;

const Description = styled.h2`
  font-family: "Muli", sans-serif;
  font-size: 1.5em;
  text-align: left;
  color: #FDFDFD;
  margin-top: 0;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <FlexRow>
            <FlexStart>
              <Title>Jack Ford</Title>
              <Description>Software Engineer</Description>
              <ProfilePicture />
            </FlexStart>
            <FlexEnd>
              <ProfileBlurb />
            </FlexEnd>
          </FlexRow>
        </Header>
      </Wrapper>
    );
  }
}

export default App;
