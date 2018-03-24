import * as React from 'react';

import Gallery from './components/gallery/gallery';
// import { Cloudinary } from 'cloudinary-core';
import './App.css';

export interface AppProps {
  files: string;
  file: string;
}

export interface AppState {
  uploadedFile: string;
  uploadedFileCloudinaryUrl: string;
}

export default class App extends React.Component<{}, {}> {
  constructor(props: {}, state: {}) {
    super(props, state);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
  }
    // handleImageUpload(file: any) {
  //   // let upload = request.post(CLOUDINARY_UPLOAD_URL)
  //   //                  .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  //   //                  .field('file', file);

  //   // upload.end((err: any, response: any) => {
  //   //   if (err) {
  //   //     console.error(err);
  //   //   }

  //   //   if (response.body.secure_url !== '') {
  //   //     this.setState({
  //   //       uploadedFileCloudinaryUrl: response.body.secure_url
  //   //     });
  //   //   }
  //   // });
  // }

  render() {
    return (
          <Gallery />
    );
  }
}
