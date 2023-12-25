import React, { Component } from "react";
import TempleteTitle from "../TempleteTitle";
import TempleteTable from "../TempleteTable";
import Paging from "../Paging";

//import IconPen from "../../../../../images/all/lo-07-05-img.png";

class TempleteList extends Component {
    state = { value: "basic" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <div className="templete_list">
                {/* 템플릿 타이틀 */}
                <TempleteTitle />

                {/* 템플릿 테이블 */}
                <TempleteTable />

                {/* 페이징 */}
                <Paging />
            </div>
        );
    }
}

export default TempleteList;
