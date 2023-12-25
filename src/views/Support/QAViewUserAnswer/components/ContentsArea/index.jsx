import React, {Component} from 'react'
import {
    Segment,
} from 'semantic-ui-react'

import ActionButtons from "../ActionButtons";

class ContentsArea extends Component {
    render() {
        return (
            <Segment className='full'>
                <ActionButtons className='bottom'/>
            </Segment>
        )
    }
}


export default ContentsArea
