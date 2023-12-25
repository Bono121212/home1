import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

class ActionButtons extends Component {
    render() {
        return (
            <div className="buttons">
                <Button className='fix line'>목록</Button>
                <Button className='fix bg'>등록</Button>
            </div>
        )
    }
}


export default ActionButtons
