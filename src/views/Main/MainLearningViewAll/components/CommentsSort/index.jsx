import React, {Component} from 'react'
import {
    Radio,
} from 'semantic-ui-react'

class CommentsSort extends Component {
    state = {value: 'radio01'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div className="comments-sort">
                <Radio
                    className='base'
                    label='신청 가능 과정'
                    name='radioGroup'
                    value='radio01'
                    checked={this.state.value === 'radio01'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='신청 임박 과정'
                    name='radioGroup'
                    value='radio02'
                    checked={this.state.value === 'radio02'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='전체 보기'
                    name='radioGroup'
                    value='radio03'
                    checked={this.state.value === 'radio03'}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default CommentsSort
