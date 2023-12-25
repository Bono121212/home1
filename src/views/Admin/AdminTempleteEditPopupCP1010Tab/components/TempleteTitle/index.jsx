import React, { Component } from "react";
import { Button } from "semantic-ui-react";


class TempleteTitle extends Component {
    state = { value: "basic" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <>
                <div className="templete_title">
                    <span className="title">디자인 관리</span>
                    <div className="btn_box">
                        <Button className="preview">미리보기</Button>
                        <Button className="cancel">취소</Button>
                        <Button className="blue">저장</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default TempleteTitle;
