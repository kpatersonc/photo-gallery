import * as React from 'react';
import '../../App.css';
import { Image } from 'cloudinary-react';
import * as constants from '../../constants';
// import { Cloudinary } from 'cloudinary-core';
// const cloudinaryCore = new Cloudinary({cloud_name: 'demo'});

// interface PhotoOptions {
//     width: number;
//     height: number;
// }

// {this.props.publidIds.map((id, i) => 
//     <Image 
//         cloudName={constants.CloudName} 
//         publicId={id} 
//         width="300" 
//         crop="scale" 
//         height="300" 
//         key={i} 
//     />
// )}

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