import React, {Component} from 'react'
import { Radio } from 'semantic-ui-react'

class RoundRadio extends Component {
    state = {value: 'radio01'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    className='round'
                    label='checked'
                    name='radioGroup02'
                    value='radio01'
                    checked={this.state.value === 'radio01'}
                    onChange={this.handleChange}
                    defaultChecked
                />
                <Radio
                    className='round'
                    label='normal'
                    name='radioGroup02'
                    value='radio02'
                    checked={this.state.value === 'radio02'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='round'
                    label='disabled'
                    name='radioGroup02'
                    value='radio03'
                    checked={this.state.value === 'radio03'}
                    onChange={this.handleChange}
                    disabled
                />
            </>
        )
    }
}


export default RoundRadio
