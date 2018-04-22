import express from 'express';
import React from 'react';

import { renderToString } from 'react-dom/server';

import App from './App';
import Html from './Html';

const port = 3000;
const server = express();

server.get('/', (req, res) => {
  const sheet = new ServerStyleSheet(); // <-- creating out stylesheet

  const body = renderToString(sheet.collectStyles(<App />)); // <-- collecting styles
  const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet

  res.send(
    Html({
      body,
      styles
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);