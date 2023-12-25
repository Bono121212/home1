import React from "react";
import { Link } from 'react-router-dom';

const MyFSCube = (props) => {
    return (
        // Link, Button, Div 필요한 태그로 사용 가능
        <Link className='my_fs_cube'>
            <span className={"label-state-cube2 " + props.stateClass}><span className='blind'>{props.stateText}</span></span>
            <p className='tit'>{props.title}</p>
            <span className="count"><span className="now">{props.countNow}</span>&nbsp;/&nbsp;{props.countTotal}</span>
        </Link>
    )
}
export default MyFSCube

