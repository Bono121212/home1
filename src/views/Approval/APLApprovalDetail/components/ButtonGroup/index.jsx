import React, {Component} from 'react';
import {Button} from "semantic-ui-react";
import CompanionModal from '../CompanionModal';


class ButtonGroup extends Component {
    render(){
        return(
            <div className='buttons editor'>
                <Button className='fix line'>List</Button>

                {/*<Button className='fix line'>반려</Button>*/}
                {/*반려사유 입력*/}
                <CompanionModal/>

                <Button className='fix bg'>승인</Button>
            </div>
        )
    }
}
export default ButtonGroup