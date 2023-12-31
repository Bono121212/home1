import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

class ToggleButton extends Component {
    state = {}
    handleClick = () =>
        this.setState((prevState) => ({active: !prevState.active}))

    render() {
        const {active} = this.state

        return (
            <>
                <Button toggle active={active} onClick={this.handleClick} className='toggle3'>
                    AI
                </Button>

                <Button toggle active={active} onClick={this.handleClick} className='disabled toggle3'>
                    AI
                </Button>
            </>
        )
    }
}

export default ToggleButton
