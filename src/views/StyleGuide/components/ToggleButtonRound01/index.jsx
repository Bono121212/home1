import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

class ToggleButtonRound01 extends Component {
    state = {}
    handleClick = () =>
        this.setState((prevState) => ({active: !prevState.active}))

    render() {
        const {active} = this.state

        return (
            <>
                <Button toggle active={active} onClick={this.handleClick} className='toggle4'>
                    Text
                </Button>
            </>
        )
    }
}

export default ToggleButtonRound01
