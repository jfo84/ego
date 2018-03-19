import React, { Component } from 'react';
import { Box, Mask, Avatar } from 'gestalt';
import styled from 'styled-components';

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
          <Title>Jack Ford</Title>
          <Description>Software Engineer</Description>

          <Box display="flex" direction="row">
            <Box column={4} maxWidth={200}>
              <Mask shape="circle">
                <img
                  src={process.env.PUBLIC_URL + "/profile_photo.jpeg"}
                  style={{ maxWidth: '100%', display: 'block' }}
                />
              </Mask>
            </Box>
          </Box>
        </Header>
      </Wrapper>
    );
  }
}

export default App;
