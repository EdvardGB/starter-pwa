
import React from 'react';
import ReactDOM from 'react-dom';

import Enonic from './components/enonic';

const MOUNT_NODE = document.getElementById('app');

console.log("hello from react")

const render = (messages) => {
  ReactDOM.render(
          <Enonic />,
    MOUNT_NODE
  );
};

