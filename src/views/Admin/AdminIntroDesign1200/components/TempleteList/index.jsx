import React, { Component } from "react";
import TempleteTitle from "../TempleteTitle";
import IntroDesign from "../IntroDesign";
//import Paging from "../Paging";
//import IconPen from "../../../../../images/all/lo-07-05-img.png";

class TempleteList extends Component {
    state = { value: "basic" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <div className="templete_list">
                {/* 템플릿 타이틀 */}
                <TempleteTitle />

                {/* 인트로 추가 */}
                <IntroDesign />
            </div>
        );
    }
}

export default TempleteList;
