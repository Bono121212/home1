import React, {Component, createRef} from 'react'
import {
    Form, Radio,
} from 'semantic-ui-react'

class IconSelect extends Component {
    state = {value: 'radio01'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    className='base'
                    label='mySUNI Icon Set'
                    name='radioGroup'
                    value='radio01'
                    checked={this.state.value === 'radio01'}
                    onChange={this.handleChange}
                    defaultChecked
                />
                <Radio
                    className='base'
                    label='아이콘 직접 등록'
                    name='radioGroup'
                    value='radio02'
                    checked={this.state.value === 'radio02'}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}


export default IconSelect
