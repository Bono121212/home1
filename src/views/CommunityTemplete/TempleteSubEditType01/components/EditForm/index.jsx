import React, { Component } from "react";
import { Checkbox, Form } from "semantic-ui-react";
import Editor from "../Editor";

class EditForm extends Component{
    render(){
        return(
            <div className="write-form">
                <Form>
                    <Form.Field className="flex sp_bt">
                        <label>제목</label>
                        <Checkbox label="공지로 등록" className="base"/>
                        <input className="title_input" type="text" placeholder="제목을 입력해 주세요." />
                        <div className="count input_in">
                            <span className="now">0</span>{"/"}<span className="max">100</span>
                        </div>
                    </Form.Field>
                    <Form.Field>
                        <label>본문</label>
                        <Editor />
                    </Form.Field>
                </Form>
                
            </div>      
        )
    }
}

export default EditForm;