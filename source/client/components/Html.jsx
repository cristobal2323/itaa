import React from "react";
import PropTypes from "prop-types";
import Config from "../../server/controllers/config";

function Html(props) {
  return (
    <html className="no-js" lang="es">
      <head>
        <meta charSet="utf-8" />
        <title>DataOn</title>
        <meta name="description" content="Data On" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.1.0/react-datepicker.css"
        />
        {process.env.type == "production" && (
          <link rel="stylesheet" href={`/main.css`} />
        )}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: props.body }} />
        <script src="/app.js" />
      </body>
    </html>
  );
}

Html.propTypes = {
  body: PropTypes.string.isRequired
};

export default Html;
