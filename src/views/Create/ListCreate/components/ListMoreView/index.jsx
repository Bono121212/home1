import React, {Component} from 'react'
import { Icon, Button } from 'semantic-ui-react'

class ListMoreView extends Component {
    render() {
        return (
            <div className="more-comments">
                <Button icon className="left moreview">
                    <Icon className='moreview'/>list more
                </Button>
            </div>
        )
    }
}


export default ListMoreView
