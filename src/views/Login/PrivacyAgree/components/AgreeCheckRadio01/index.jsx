import React, {Component, createRef} from 'react'
import {
    Radio,
} from 'semantic-ui-react'

class AgreeCheckRadio01 extends Component {
    state = {value: 'radio01'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    className='base'
                    label='예'
                    name='radioGroup1'
                    value='radio01'
                    checked={this.state.value === 'radio01'}
                    onChange={this.handleChange}
                    defaultChecked
                />
                <Radio
                    className='base'
                    label='아니오'
                    name='radioGroup1'
                    value='radio02'
                    checked={this.state.value === 'radio02'}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}


export default AgreeCheckRadio01
