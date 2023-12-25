import React, {Component} from 'react'
import { Radio } from 'semantic-ui-react';

class CommentsSort extends Component {
    state = {value: 'newest'}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div className="comments-sort">
                <Radio
                    className='base'
                    label='최신순'
                    name='radioGroup'
                    value='newest'
                    checked={this.state.value === 'newest'}
                    onChange={this.handleChange}
                    defaultChecked
                />
                <Radio
                    className='base'
                    label='좋아요순'
                    name='radioGroup'
                    value='like'
                    checked={this.state.value === 'like'}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default CommentsSort
