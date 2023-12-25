import classNames from "classnames";
import React, { Component } from "react";
import { Input, Select } from "semantic-ui-react";

class PostSearchBox extends Component{

    state = { focus: false, write: "" };

    render(){
        const selectOptions01 = [
            {key: "0", value: "Select", text: "상위 메뉴 선택"},
            {key: "1", value: "post1", text: "상위메뉴선택하기첫번째게시판입니다.상위메뉴선택하기첫번째게시판입니다"},
            {key: "2", value: "post2", text: "토론게시판"},
            {key: "3", value: "post3", text: "일반게시판"},
        ]
        const selectOptions02 = [
            {key: "0", value: "Select", text: "하위 메뉴 선택"},
            {key: "1", value: "post1-1", text: "하위메뉴선택하기첫번째게시판입니다.하위메뉴선택하기첫번째게시판입니다"},
            {key: "2", value: "post1-2", text: "이벤트"},
            {key: "3", value: "post1-3", text: "하위메뉴"},
        ]

        return(
            <div className="post_search_box">
                <div className="post_search">
                    <div className="sc_tit">게시판</div>
                    <div className="sc_content">
                        <Select
                            placeholder="상위 메뉴 선택"
                            className="ui dropdown m0 small-border"
                            defaultValue={selectOptions01[0].value}
                            options={selectOptions01}
                        />
                        <Select
                            placeholder="하위 메뉴 선택"
                            className="ui dropdown m0 small-border"
                            defaultValue={selectOptions02[0].value}
                            options={selectOptions02}
                        />
                    </div>
                </div>
                <div className="post_search">
                    <div className="sc_tit">제목</div>
                    <div className="sc_content">

                        <div
                            className={classNames("ui input", {
                            focus: this.state.focus,
                            write: this.state.write,
                            })}
                        >
                            <Input
                                type="text"
                                placeholder="검색할 제목명을 입력해주세요."
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