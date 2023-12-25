import React, {Component} from 'react'
import { Button, Icon } from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <div className="actions bottom">
                <Button icon className='left post list2'>
                    <Icon className='list24'/> List
                </Button>
            </div>
        )
    }
}


export default ActionButtons
