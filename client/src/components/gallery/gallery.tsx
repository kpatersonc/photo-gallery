import * as React from 'react';
import '../../App.css';
import { Photo } from '../photo/photo';
// import Upload from '../photo/upload';
import { getAllImages } from '../../global/utils';

export interface Image {
    public_id: string;
}
interface GalleryState {
    files: Image[];
}

class Gallery extends React.Component<{}, GalleryState> {
    constructor(props: {}, state: GalleryState) {
        super(props, state);
        this.state = {
            files: []
        };
    }

    componentWillMount() {
        this.getExistingFiles();
    }

    getExistingFiles = () => {
        getAllImages()
        .then(res => this.setState({ files: res }))
        .catch(err => console.log(err));
    }

    onUploadEvent = (id: Image) => {
        this.setState(prevState => ({
            files: prevState.files.concat(id)
            }
        ));
    }

    displayPhoto = () => {
        return this.state.files.map((file, i) => (
            <Photo
                photoId={file.public_id}
                key={i}
            />
        ));
        // this.state.files.forEach((file) => {
        //     return (
        //         <Photo photoId={file.public_id} />
        //     );
            
        // });
    }
// <Upload onUploadComplete={this.onUploadEvent} />
    render() {
        return (
            <div className="gallery-container">
                <div className="upload-container">
                A
                </div>               
                {this.displayPhoto()}

            </div>
        );
    }
}

export default Gallery;