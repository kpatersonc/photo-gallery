import * as React from 'react';
import '../../App.css';
import { Image } from 'cloudinary-react';
import * as constants from '../../global/constants';

interface PhotoProps {
    photoId: string;
}

export const Photo: React.StatelessComponent<PhotoProps> = (photoId) => {
    return (
        <div>
            <Image
                cloudName={constants.CloudName}
                publicId={photoId.photoId}
                width="300"
                crop="scale"
                height="300"
            />
        </div>
    );
};

export default Photo;