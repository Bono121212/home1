import React, {Component} from 'react'
import { Icon, Button } from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <div className="actions bottom">
                <Button icon className='left postset edit2'>
                    <Icon className='edit24'/> Edit
                </Button>
                <Button icon className='left postset delete'>
                    <Icon className='del24'/> Delete
                </Button>
                <Button icon className='left postset reply2'>
                    <Icon className='reply24'/> Reply
                </Button>
                <Button icon className='left postset commu-list16'>
                    <Icon className='list24'/> List
                </Button>
            </div>
        )
    }
}


export default ActionButtons
