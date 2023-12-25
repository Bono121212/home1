import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <div className="buttons">
                <Button className='fix line'>Close</Button>
                <Button className='fix bg'>Submit</Button>
            </div>
        )
    }
}


export default ActionButtons
