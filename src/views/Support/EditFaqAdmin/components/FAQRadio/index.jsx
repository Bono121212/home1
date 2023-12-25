import React, {Component} from 'react'
import {
    Radio
} from 'semantic-ui-react'
//import CubeEnrollment from '../CubeRequired'
//import CommentStarRating from '../CommentStarRating'
//import ReplyForm from '../ReplyForm01'

class FAQRadio extends Component {
    state = {value: 'value01'}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <>
                <Radio
                    className='base'
                    label='중요 상단 FAQ'
                    name='radioGroup'
                    value='value01'
                    checked={this.state.value === 'value01'}
                    onChange={this.handleChange}
                />
                <Radio
                    className='base'
                    label='일반'
                    name='radioGroup'
                    value='value02'
                    checked={this.state.value === 'value02'}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}


export default FAQRadio
