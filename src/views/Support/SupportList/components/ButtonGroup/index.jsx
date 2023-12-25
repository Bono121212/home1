import React, {Component} from 'react'
import {
    Button,
} from 'semantic-ui-react'

class ButtonGroup extends Component {
    render() {
        return (
                <div className='btn-group'>
                    <div className="center">
                        <Button>list more</Button>
                    </div>
                </div>
        )
    }
}

export default ButtonGroup
