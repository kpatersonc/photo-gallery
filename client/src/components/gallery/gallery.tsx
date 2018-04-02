import * as React from 'react';
import '../../App.css';
import { Photo } from '../photo/photo';
import { getAllImages } from '../../global/utils';

export interface CloudinaryImage {
    public_id: string;
}
interface GalleryState {
    files: CloudinaryImage[];
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

    onUploadEvent = (image: CloudinaryImage) => {
        this.setState((prevState) => ({
            files: prevState.files.concat(image)
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
    }
    render() {
        const photos = this.displayPhoto();
        return (
            <div className="gallery-container">           
                {photos}
            </div>
        );
    }
}

export default Gallery;