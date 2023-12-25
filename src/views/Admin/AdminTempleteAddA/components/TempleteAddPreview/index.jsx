import React, { Component } from "react";
import { Image } from "semantic-ui-react";

//import IconPen from "../../../../../images/all/lo-07-05-img.png";
import SampleA from "../../../../../images/all/sample-a.png";

class TempleteAddPreview extends Component {
    state = { value: "basic" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <div className="add_preview">
                <div className="templete_title">
                    <span className="title">미리보기 샘플</span>
                    {/* <div className="btn_box">
                        <Button className="size">원본크기</Button>
                    </div> */}
                </div>
                <div className="preview">
                    <Image src={SampleA} alt="템플릿 기본 미리보기 샘플"/>
                </div>
            </div>
        );
    }
}

export default TempleteAddPreview;
