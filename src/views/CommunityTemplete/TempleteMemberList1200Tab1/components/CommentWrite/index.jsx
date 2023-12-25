import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class CommentWrite extends Component{
    render(){
        return(
            <div className="comment_field">
                <Form reply >
                    <Form.TextArea placeholder="의견을 작성하려면 해당 커뮤니티에 가입해주세요."/>
                    <div className="comment_right">
                        <div className="count">
                            <span className="now">0</span>{"/"}<span className="max">1,000</span>
                        </div>
                        <Button className="comment_edit" content="작성" labelPosition="right" />
                    </div>
                    
                </Form>
            </div>
        )
    }
}
export default CommentWrite;