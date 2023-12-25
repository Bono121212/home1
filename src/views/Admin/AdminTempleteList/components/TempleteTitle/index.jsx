import React, { Component } from "react";
import { Button } from "semantic-ui-react";


class TempleteTitle extends Component {
    state = { value: "basic" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <>
                <div className="templete_title">
                    <span className="title">디자인 보관함 <strong>4개</strong></span>
                    <div className="btn_box">
                        <Button className="edit">수정</Button>
                        <Button className="copy">복사</Button>
                        <Button className="delete">삭제</Button>
                        <Button className="change">대표 디자인으로 변경</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default TempleteTitle;
