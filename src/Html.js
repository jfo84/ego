/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const Html = ({ body, styles }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <!--
        manifest.json provides metadata used when your web app is added to the
        homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
      -->
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
      <link rel="canonical" href="http://www.jruffinford.com" />
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Mina|Muli" />

      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>

      <title>Ego</title>
      ${styles}
    </head>
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="root">${body}</div>
    </body>
  </html>
`;

export default Html;