import React, {Component} from 'react'
import {
    Radio,
} from 'semantic-ui-react'

class CommentsSort extends Component {
    state = {value: 'newest'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div className="comments-sort">
                <Radio
                    className='base'
                    label='Newest'
                    name='radioGroup'
                    value='newest'
                    checked={this.state.value === 'newest'}
                    onChange={this.handleChange}
                    defaultChecked
                />
                <Radio
                    className='base'
                    label='Oldest'
                    name='radioGroup'
                    value='oldest'
                    checked={this.state.value === 'oldest'}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default CommentsSort
