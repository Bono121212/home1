import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ImageZoom = (props) => {
    return (
        <div className='example-img'>
            <img src={props.src} alt="" className='img' />
            <Button icon className="img-icon zoom"><Icon className="zoom2"/><span className="blind">확대1</span></Button>
        </div>
    )
}
export default ImageZoom