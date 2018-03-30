import * as React from 'react';

import Gallery from './components/gallery/gallery';
// import { Cloudinary } from 'cloudinary-core';
import './App.css';

export interface AppProps {
  files: string;
  file: string;
  
}

export interface AppState {
  response: string;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}, state: AppState) {
    super(props, state);
    
    this.state = {
      response: ''
    };

  }

  render() {
    return (
      <div>
          <Gallery />
      </div>
    );
  }
}
