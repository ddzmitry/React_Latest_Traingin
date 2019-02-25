import React from 'react';
import './ImageList.css';
import Image from '../image';
const Imagelist = (props) => {
    return (
        <div className="image-list">
            {props.images.map((props, key) => <Image key={key} {...props} />)}
        </div>
    )
}
export default Imagelist
