import React, { Component } from "react";
import TempleteTypeA from "../TempleteTypeA";


class TempleteEdit extends Component {

    render() {
        return (
            <div className="templete_edit">  
                {/* 템플릿 A 수정 */}
                <TempleteTypeA />

                {/* 템플릿 B 수정 */}
                {/* <TempleteTypeB /> */}
                
                {/* 템플릿 C 수정 */}
                {/* <TempleteTypeC /> */}
            </div>
        );
    }
}

export default TempleteEdit;
