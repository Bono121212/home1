import React, {Component} from 'react'
import { Radio } from 'semantic-ui-react'

class AgreeCheckRadio extends Component {
    state = {value: ''}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    className='base'
                    label='동의'
                    name='radioGroup'
                    value='agree'
                    checked={this.state.value === 'agree'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='동의하지 않음'
                    name='radioGroup'
                    value='noagree'
                    checked={this.state.value === 'noagree'}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}


export default AgreeCheckRadio
