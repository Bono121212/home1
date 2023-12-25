import React, {Component, createRef} from 'react'
import {
    Form, Radio,
} from 'semantic-ui-react'

class CommentsSort extends Component {
    render() {
        return (
            <Form className="comments-sort">
                <Form.Group inline>
                    <Form.Field>
                        <Radio
                            className='base'
                            label='최신순'
                            name='radioGroup'
                            value='value01'
                            onChange={this.handleChange}
                            defaultChecked
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            className='base'
                            label='이수순'
                            name='radioGroup'
                            value='value02'
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            className='base'
                            label='별점순'
                            name='radioGroup'
                            value='value03'
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                </Form.Group>
            </Form>
        )
    }
}


export default CommentsSort
