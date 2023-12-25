import React, {Component} from 'react'
import {
    Button,
} from 'semantic-ui-react'

class ButtonGroup extends Component {
    render() {
        return (
                <div className='btn-group'>
                    <div className="center">
                        <Button>Close</Button>
                        <Button>Submit</Button>
                    </div>
                </div>
        )
    }
}

export default ButtonGroup
