import React, {Component} from 'react'
import { Radio } from 'semantic-ui-react'

class CommentsSort extends Component {
    state = {value : 'Newest'}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <div className="comments-sort">
                <Radio
                    className='base'
                    label='최신순'
                    name='radioGroup'
                    value='Newest'
                    checked={this.state.value === 'Newest'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='좋아요순'
                    name='radioGroup'
                    value='Best'
                    checked={this.state.value === 'Best'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='나의글'
                    name='radioGroup'
                    value='MyComment'
                    checked={this.state.value === 'MyComment'}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default CommentsSort
