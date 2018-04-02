import * as Constants from '../global/constants';

const cloudName = Constants.CloudName;
const unsignedUploadPreset = 'mam6b9tp';

export const getAllImages = async () => {

    const response = await fetch('http://localhost:5000/api/getAllImages');
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message);
    }

    return body;
};

// TODO: Move upload POST req to backend
export const uploadFile = (file: Blob) => {
    var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener('progress', function (e: ProgressEvent) {

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
           // this.onUploadSuccess(response);
        }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);
};