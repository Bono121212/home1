import React, { Component } from "react";
import {  Select, Button, Icon  } from 'semantic-ui-react';
import { Link } from "react-router-dom";

import Paging from '../Paging';
import ListBox from '../ListBox';
import PagingSearch from "../PagingSearch";

class TAContents extends Component {

    render() {
        const SearchOptions2 = [
            { key: '최신 순', value: '최신 순', text: '최신 순' },
            { key: '조회 순', value: '조회 순', text: '조회 순' },
            { key: '좋아요 순', value: '좋아요 순', text: '좋아요 순' },
            { key: '댓글 순', value: '댓글 순', text: '댓글 순' },
        ]

        return (
            <div className="templete_sub_contents narrow">
                <div className="location">
                    <ul>
                        <li className="home">Home</li>
                        <li>Trending 정보</li>
                    </ul>
                </div>
                <div className="sub_title">
                    <strong>Trending 정보</strong>
                    <Link to="" className="label_1"><Icon className="rcmd_i" /> 추천 과정</Link>
                </div>

                {/* 테이블 타이틀 */}
                <div className="list_title">
                    <div className="list_cnt">
                        <span>총 <strong>123개</strong>의 리스트가 있습니다.</span>
                    </div>
                    <div className="option_box">
                        <Select placeholder="최신 순"  options={SearchOptions2} />
                    </div>
                    <div className="btn_box">
                        <Button Icon><Icon className="post_i" /> 글쓰기</Button>
                    </div>
                </div>

                {/* 테이블 */}
                <ListBox />

                {/* 페이징 */}
                <Paging />
                
                {/* 검색창*/}
                <PagingSearch />
            </div>
        );
    }
}

export default TAContents;
