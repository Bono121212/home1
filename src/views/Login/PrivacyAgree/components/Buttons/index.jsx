import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

class ButtonExampleToggle extends Component {
    state = {}
    handleClick = () =>
        this.setState((prevState) => ({active: !prevState.active}))

    render() {
        const {active} = this.state

        return (
            <div>
                <p className="gInfo">.toggle</p>
                <div className="preview">
                    <Button toggle active={active} onClick={this.handleClick} className='toggle2'>
                        Text
                    </Button>
                    {/*<button className="ui toggle button toggle2" aria-pressed="false">Text</button>*/}


                    {/*<Button toggle active={active} onClick={this.handleClick} className='active toggle2'>*/}
                    {/*    Text*/}
                    {/*</Button>*/}
                    {/*<button className="ui active toggle button toggle2" aria-pressed="true">Text</button>*/}


                    <Button toggle active={active} onClick={this.handleClick} className='disabled toggle2'>
                        Text
                    </Button>
                    {/*<button className="ui disabled toggle button toggle2" aria-pressed="true">Text</button>*/}


                    <Button toggle active={active} onClick={this.handleClick} className='toggle3'>
                        AI
                    </Button>
                    {/*<button className="ui toggle button toggle3" aria-pressed="false">AI</button>*/}


                    {/*<Button toggle active={active} onClick={this.handleClick} className='active toggle3'>*/}
                    {/*    AI*/}
                    {/*</Button>*/}
                    {/*<button className="ui active toggle button toggle3" aria-pressed="false">AI</button>*/}


                    <Button toggle active={active} onClick={this.handleClick} className='disabled toggle3'>
                        AI
                    </Button>
                    {/*<button className="ui disabled toggle button toggle3" aria-pressed="false">AI</button>*/}
                </div>
            </div>
        )
    }
}

export default ButtonExampleToggle
