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
                        <Button className="backto">편집모드로 돌아가기</Button>
                    </div>
                </div>
            </>
        );
    }
}

export default TempleteTitle;
