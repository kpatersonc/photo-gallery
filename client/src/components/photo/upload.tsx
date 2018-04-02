import * as React from 'react';
import Dropzone from 'react-dropzone';
// import * as request from 'superagent';
import { CloudinaryImage } from '../gallery/gallery';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { Cloudinary } from 'cloudinary-core';
import { uploadFile } from '../../global/utils';

interface UploadState {
    modal: boolean;
}
interface UploadProps {
    onUploadComplete: (id: CloudinaryImage) => void;
    className: string;
    modal: boolean;
}
class Upload extends React.Component<UploadProps, UploadState> {
    constructor(props: UploadProps, state: UploadState) {
        super(props, state);

        this.state = ({
            modal: this.props.modal
        });

    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentWillReceiveProps() {
        this.setState({
            modal: this.props.modal
        });
    }
    onUploadSuccess = (image: CloudinaryImage) => {
        this.props.onUploadComplete(image);
    }

    onDrop = (files: Blob[]) => {
        files.forEach((file) => {
            uploadFile(file);
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <div className="file-upload">
                                <Dropzone
                                    onDrop={this.onDrop}
                                    multiple={true}
                                    accept="image/*"
                                >
                                    <div>Drop an image or click to select a file to upload.</div>
                                </Dropzone>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Upload;
