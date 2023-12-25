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
                    label='학습문의'
                    name='radioGroup'
                    value='radio01'
                    checked={this.state.value === 'radio01'}
                    onChange={this.handleChange}
                    defaultChecked
                />
                <Radio
                    className='base'
                    label='이수시간'
                    name='radioGroup'
                    value='radio02'
                    checked={this.state.value === 'radio02'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='회원정보'
                    name='radioGroup'
                    value='radio03'
                    checked={this.state.value === 'radio03'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='결제,환불'
                    name='radioGroup'
                    value='radio04'
                    checked={this.state.value === 'radio04'}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default RadioWrap
