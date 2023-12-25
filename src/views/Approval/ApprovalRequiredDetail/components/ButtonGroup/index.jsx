import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class ButtonGroup extends Component {
    render(){
        return(
            <div className='buttons border-none'>
                <Button className='fix line'>List</Button>
                <Button className='fix line'>반려</Button>
                <Button className='fix bg'>승인</Button>
            </div>
        )
    }
}
export default ButtonGroup