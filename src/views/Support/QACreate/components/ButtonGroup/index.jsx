import React, {Component} from 'react'
import {
    Button,
} from 'semantic-ui-react'

class ButtonGroup extends Component {
    render() {
        return (
                <div className='btn-group'>
                    <div className="right">
                        <Button>Close</Button>
                        <Button primary>Submit</Button>
                    </div>
                </div>
        )
    }
}

export default ButtonGroup
