import React, {Component} from 'react'
import {
    Radio
} from 'semantic-ui-react'

class RadioWrap extends Component {
    state = {value: 'radio01'};
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <div className="radio-wrap">
                <Radio
                    className='base'
                    label='모두 보기'
                    name='radioGroup'
                    value='radio01'
                    checked={this.state.value === 'radio01'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='답변 완료'
                    name='radioGroup'
                    value='radio02'
                    checked={this.state.value === 'radio02'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='답변 대기'
                    name='radioGroup'
                    value='radio03'
                    checked={this.state.value === 'radio03'}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default RadioWrap
