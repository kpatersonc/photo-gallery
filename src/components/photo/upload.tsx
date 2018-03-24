import * as React from 'react';
import Dropzone from 'react-dropzone';
// import * as request from 'superagent';
import * as constants from '../../constants';
// import { Cloudinary } from 'cloudinary-core';

const cloudName = constants.CloudName;
const unsignedUploadPreset = 'mam6b9tp';

interface UploadProps { // Don't think it needs to be exported but typescript wont shut up about it being unused
    onUploadComplete: (id: string) => void;
}
class Upload extends React.Component<UploadProps, {}> {
    constructor(props: UploadProps, state: {}) {
        super(props, state);
    }

    uploadFile = (file: Blob) => {
            var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
            var xhr = new XMLHttpRequest();
            var fd = new FormData();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            
            // Update progress (can be used to show progress indicator)
            xhr.upload.addEventListener('progress', function(e: ProgressEvent) {
          
              console.log(`fileuploadprogress data.loaded: ${e.loaded},
            data.total: ${e.total}`);
            });
          
            xhr.onreadystatechange = (e: Event) => {
              if (xhr.readyState === 4 && xhr.status === 200) {
                // File uploaded successfully
                var response = JSON.parse(xhr.responseText);
                // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
                var url2 = response.secure_url;
                // Create a thumbnail of the uploaded image, with 150px width
                var tokens = url2.split('/');
                tokens.splice(-2, 0, 'w_150,c_scale');
                var img = new Image(); // HTML5 Constructor
                img.src = tokens.join('/');
                img.alt = response.public_id;
                this.onUploadSuccess(response.public_id);
               }
            };
          
            fd.append('upload_preset', unsignedUploadPreset);
            fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
            fd.append('file', file);
            xhr.send(fd);
    }

    onUploadSuccess = (id: string) => {
        this.props.onUploadComplete(id);
    }   

    onDrop = (files: Blob[]) => {
        files.forEach((file) => {
            this.uploadFile(file);
        });
    }
    
    render() {
        return (
                <div className="file-upload">
                    <Dropzone
                        onDrop={this.onDrop}
                        multiple={true}
                        accept="image/*"
                    >
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                </div>
        );
    }
}

export default Upload;
