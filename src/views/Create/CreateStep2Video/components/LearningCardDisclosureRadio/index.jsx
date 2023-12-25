import React, {Component} from 'react'
import {
    Form, Radio,
} from 'semantic-ui-react'

class LearningCardDisclosureRadio extends Component {

    state = {value: 'open'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <Form.Field>
                <label className="necessary">학습카드 공개여부</label>
                <Radio
                    className='base'
                    label='공개'
                    name='radioGroup'
                    value='open'
                    checked={this.state.value === 'open'}
                    onChange={this.handleChange}
                    defaultChecked
                />
                <Radio
                    className='base'
                    label='비공개'
                    name='radioGroup'
                    value='close'
                    checked={this.state.value === 'close'}
                    onChange={this.handleChange}
                />
            </Form.Field>
        )
    }
}


export default LearningCardDisclosureRadio
