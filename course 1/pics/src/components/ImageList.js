import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log(props);
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}></ImageCard>
    });

return <div className='image-List'>{images}</div>

};

export default ImageList;