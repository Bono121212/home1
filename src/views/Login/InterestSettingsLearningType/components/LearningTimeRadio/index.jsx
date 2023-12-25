import React, {Component} from 'react'
import {
    Radio,
} from 'semantic-ui-react'


class LearningTimeRadio extends Component {

    state = {value: 'value00'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div className="check-area">
                <Radio
                    className='base'
                    label='오전'
                    name='learningTime'
                    value='value01'
                    checked={this.state.value === 'value01'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='오후'
                    name='learningTime'
                    value='value02'
                    checked={this.state.value === 'value02'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='상관없음'
                    name='learningTime'
                    value='value03'
                    checked={this.state.value === 'value03'}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default LearningTimeRadio
