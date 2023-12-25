import classNames from "classnames";
import React, { Component } from "react";
import { Input, Select } from "semantic-ui-react";

class PostSearchBox extends Component{

    state = { focus: false, write: "" };

    render(){
        const selectOptions01 = [
            {key: "0", value: "Select", text: "AI"},
        ]
        const selectOptions02 = [
            {key: "0", value: "Select", text: "Executive AI/DT"},
        ]

        return(
            <div className="post_search_box">
                <div className="post_search">
                    <div className="sc_tit">Categoty</div>
                    <div className="sc_content">
                        <Select
                            placeholder="AI"
                            className="ui dropdown m0 small-border"
                            defaultValue={selectOptions01[0].value}
                            options={selectOptions01}
                        />
                        <Select
                            placeholder="Executive AI/DT"
                            className="ui dropdown m0 small-border"
                            defaultValue={selectOptions02[0].value}
                            options={selectOptions02}
                        />

                    </div>
                </div>
                <div className="post_search">
                    <div className="sc_tit">과정명</div>
                    <div className="sc_content">
                        <div
                            className={classNames("ui input", {
                            focus: this.state.focus,
                            write: this.state.write,
                            })}
                        >
                            <Input
                                type="text"
                                placeholder="검색어를 입력해주세요."
                                value={this.state.write}
                                onClick={() => this.setState({ focus: true })}
                                onBlur={() => this.setState({ focus: false })}
                                onChange={(e) => this.setState({ write: e.target.value })}
                            />
                            <button class="ui button admin_text_button">검색</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostSearchBox