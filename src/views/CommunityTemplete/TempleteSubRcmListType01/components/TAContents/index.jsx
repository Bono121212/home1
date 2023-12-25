import React, { Component } from "react";
import {  Select, Icon  } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import CardBelt from "../CardBelt";
import Paging from '../Paging';
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
                    <Link to="" className="label_2"><Icon className="rcmd_grey" /> 목록으로 돌아가기</Link>
                </div>

                {/* 테이블 타이틀 */}
                <div className="list_title">
                    <div className="list_cnt">
                        <span>총 <strong>99 개</strong>의 추천 과정</span>                        
                    </div>
                    <div className="option_box">
                        <Select placeholder="최신 순"  options={SearchOptions2} />
                    </div>
                </div>

                
                {/* 추천과정 */}
                <div className="card-slide-list type02">
                    <div className="board-down-title">
                        <strong className="ellipsis">첫번째 게시글 Title이 들어갑니다.</strong>{' '}<span>(8개)</span>
                    </div>
                    <CardBelt />
                    <div className="board-down-title">
                        <strong className="ellipsis">두번째 게시글 Title이 들어갑니다. 두번째 게시글 Title이 들어갑니다. 두번째 게시글 Title이 들어갑니다. 두번째 게시글 Title이 들어갑니다.</strong>{' '}<span>(7개)</span>
                    </div>
                    <CardBelt />
                    <div className="board-down-title">
                        <strong className="ellipsis">반도체 산업의 시작과 역사 이어보기</strong>{' '}<span>(8개)</span>
                    </div>
                    <CardBelt />
                </div>

                {/* 페이징 */}
                <Paging />
                
                {/* 검색창*/}
                <PagingSearch />
            </div>
        );
    }
}

export default TAContents;
