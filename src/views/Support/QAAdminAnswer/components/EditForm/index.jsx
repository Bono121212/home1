import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import Editor from "../Editor";

class EditForm extends Component{
    render(){
        return(
            <div className="write-form">
                <Form>
                    <Form.Field>
                        <Editor />
                    </Form.Field>
                </Form>
            </div>       
        )
    }
}

export default EditForm;