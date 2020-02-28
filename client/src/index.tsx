import React from "react";
import ReactDOM from "react-dom";

import './i18n';
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()
