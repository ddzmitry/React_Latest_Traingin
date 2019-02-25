import React from 'react';

import Image from '../image';
const Imagelist = (props) => {
    return (
        <div>
            {props.images.map((props,key) => <Image key={key} {...props} />)}            
        </div>
    )
}
export default Imagelist
