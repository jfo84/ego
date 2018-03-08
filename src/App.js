import React, { Component } from 'react';
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
      <div>
        <head>
          <meta charSet="utf-8" />
          <title>Jack Ford</title>

          <link rel="canonical" href="http://www.jruffinford.com" />
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Mina|Muli" />

          <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
        </head>

        <Wrapper>
          <Header>
            <Title>Jack Ford</Title>
            <Description>Software Engineer</Description>
          </Header>
        </Wrapper>
      </div>
    );
  }
}

export default App;
