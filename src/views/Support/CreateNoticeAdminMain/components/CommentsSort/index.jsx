import React, {Component, createRef} from 'react'
import {
    List,
    Form,
    Radio,
    Image, Icon, Button, Label, Comment
} from 'semantic-ui-react'
import CubeEnrollment from '../CubeRequired'
import CommentStarRating from '../CommentStarRating'
import ReplyForm from '../ReplyForm01'

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
