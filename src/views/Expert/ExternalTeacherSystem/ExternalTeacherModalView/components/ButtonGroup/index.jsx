import React, {Component, createRef} from 'react'
import {
    Button, Icon,
} from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <div className="buttons">
                <Button className='fix line'>Cancel</Button>
                <Button className='fix bg'>Create</Button>
            </div>
        )
    }
}


export default ActionButtons
