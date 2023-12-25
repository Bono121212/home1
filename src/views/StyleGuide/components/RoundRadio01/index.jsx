import React, {Component} from 'react'
import { Radio } from 'semantic-ui-react'

class RoundRadio01 extends Component {
    state = {value: 'radio01'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    className='round2'
                    label='checked'
                    name='radioGroup01'
                    value='radio01'
                    checked={this.state.value === 'radio01'}
                    onChange={this.handleChange}
                    defaultChecked
                />
                <Radio
                    className='round2'
                    label='normal'
                    name='radioGroup01'
                    value='radio02'
                    checked={this.state.value === 'radio02'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='round2'
                    label='disabled'
                    name='radioGroup01'
                    value='radio03'
                    checked={this.state.value === 'radio03'}
                    onChange={this.handleChange}
                    disabled
                />
            </>
        )
    }
}


export default RoundRadio01
