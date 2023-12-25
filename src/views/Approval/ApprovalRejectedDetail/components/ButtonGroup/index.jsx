import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class ButtonGroup extends Component {
    render(){
        return(
            <div className='buttons editor'>
                <Button className='fix line'>List</Button>
                <Button className='fix bg'>삭제</Button>
            </div>
        )
    }
}
export default ButtonGroup