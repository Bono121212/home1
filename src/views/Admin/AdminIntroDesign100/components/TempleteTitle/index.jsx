import React, { Component } from "react";
import { Button, Radio } from "semantic-ui-react";


class TempleteTitle extends Component {
    state = { value: "size2" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <>
                <div className="templete_title">
                    <span className="title">인트로 보관함</span>
                    <div className="intro_size">
                        <Radio
                            label="1,200px 사용"
                            name="IntroSize"
                            value="size1"
                            checked={this.state.value === "size1"}
                            onChange={this.handleChange}
                            />
                        <Radio
                            label="100% 사용"
                            name="IntroSize"
                            value="size2"
                            checked={this.state.value === "size2"}
                            onChange={this.handleChange}
                        />
                    </div>
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
