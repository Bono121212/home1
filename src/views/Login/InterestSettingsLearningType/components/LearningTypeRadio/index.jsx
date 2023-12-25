import React, {Component} from 'react'
import {
    Radio,
} from 'semantic-ui-react'


class LearningTypeRadio extends Component {

    state = {value: 'value000'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div className="check-area">
                <Radio
                    className='base'
                    label='오프라인'
                    name='radioGroup'
                    value='value001'
                    checked={this.state.value === 'value001'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='온라인'
                    name='radioGroup'
                    value='value002'
                    checked={this.state.value === 'value002'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='상관없음'
                    name='radioGroup'
                    value='value003'
                    checked={this.state.value === 'value003'}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default LearningTypeRadio
