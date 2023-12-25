import React, {Component, createRef} from 'react'
import {
    Form,
    Button,
} from 'semantic-ui-react'

class ReplyForm01 extends Component {
    state = {}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <Form reply className='base'>
                <div className="outline">
                    <Form.TextArea placeholder="Writing..."/>
                    <div className="more">
                        <div className="count"><span className="now">0</span>/<span
                            className="max">500</span></div>
                        <Button submit>Submit</Button>
                    </div>
                </div>
            </Form>
        )
    }
}


export default ReplyForm01
