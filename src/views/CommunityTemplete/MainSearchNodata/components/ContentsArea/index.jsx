import React, { Component } from "react";
import { Select } from 'semantic-ui-react';

import SearchBox from '../SearchBox';
import ResultBoxNodata from '../ResultBoxNodata';

class ContentsArea extends Component {

    render() {
        const SearchOptions2 = [
            { key: '최신 순', value: '최신 순', text: '최신 순' },
            { key: '조회 순', value: '조회 순', text: '조회 순' },
            { key: '좋아요 순', value: '좋아요 순', text: '좋아요 순' },
            { key: '댓글 순', value: '댓글 순', text: '댓글 순' },
        ]

        return (
            <div className='community_templete'>
                <div className="inner">
                    {/* 검색 */}
                    <div className="title_search">검색</div>
                    <SearchBox /> 



                    {/* 결과 */}
                    <div className="title_result">
                        <div className="result_cnt">
                            <strong className="keyword">홍길동</strong>
                            <span>으로 검색결과 총</span>
                            <strong>0건</strong>
                        </div>
                        <div className="option_box">
                            <Select placeholder="최신 순"  options={SearchOptions2} />
                        </div>
                    </div>


                    {/* 검색결과 없을때 */}
                    <ResultBoxNodata />
                </div>
            </div>
        );
    }
}

export default ContentsArea;
