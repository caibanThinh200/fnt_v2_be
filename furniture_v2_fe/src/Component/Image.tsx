import { Image as AntImage } from "antd";
import React from 'react'
const Image: React.FC = (props: any) => {
    return (
        <AntImage {...props}/>
    );
}

export default Image;