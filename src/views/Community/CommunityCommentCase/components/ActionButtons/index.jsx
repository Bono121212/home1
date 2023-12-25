import React, {Component, createRef} from 'react'
import {
    Button, Icon,
} from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <div className="actions bottom">
                <Button icon className='left postset edit2'>
                    <Icon className='edit2'/> Edit
                </Button>
                <Button icon className='left postset delete'>
                    <Icon className='delete'/> Delete
                </Button>
                <Button icon className='left postset reply2'>
                    <Icon className='reply2'/> Reply
                </Button>
                <Button icon className='left postset commu-list16'>
                    <Icon className='commu-list16'/> List
                </Button>
            </div>
        )
    }
}


export default ActionButtons
