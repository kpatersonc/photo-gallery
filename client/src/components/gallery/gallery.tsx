import * as React from 'react';
import '../../App.css';
import { Photo } from '../photo/photo';
import Upload from '../photo/upload';
import { getAllImages } from '../../global/utils';

interface GalleryState {
    files: string[];
}

class Gallery extends React.Component<{}, GalleryState> {
    constructor(props: {}, state: GalleryState) {
        super(props, state);
        this.state = {
            files: []
        };
    }

    componentWillMount() {

    }

    getExistingFiles = () => {
        getAllImages()
        .then(res => this.setState({ files: res.express }))
        .catch(err => console.log(err));
    }

    onUploadEvent = (id: string) => {
        this.setState(prevState => ({
            files: prevState.files.concat(id)
            }
        ));
    }

    displayPhoto = (photoIds: string[]) => {
        return photoIds.map((id, i) => (
            <Photo
                photoId={id}
                key={i}
            />
        )
        );
    }

    render() {
        const photos = this.displayPhoto(this.state.files);
        return (
            <div className="gallery-container">
                <div className="upload-container">
                    <Upload onUploadComplete={this.onUploadEvent} />
                </div>
                {photos}

            </div>
        );
    }
}

export default Gallery;