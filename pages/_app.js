
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import "../styles/style.css";

config.autoAddCss = false;

function App({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )

}

export default App;