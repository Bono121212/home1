import React, {Component, createRef} from 'react'
import {
    Form,
    Icon, Button,
} from 'semantic-ui-react'

class ReplyForm extends Component {
    render() {
        return (
            <Form reply className='base'>
                <div className="outline">
                    <Form.TextArea placeholder="Writing..."/>
                    <div className="more">
                        <div className="count"><span className="now">0</span>/<span
                            className="max">500</span></div>
                        <Button icon className='img-icon photo'><Icon className='photo50'/><span className='blind'>photo</span></Button>
                        <Button submit>Submit</Button>
                    </div>
                </div>
            </Form>
        )
    }
}


export default ReplyForm
