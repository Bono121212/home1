import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import ResultSide from '../ResultSide';
import ResultTxt from '../ResultTxt';
import ResultTxt2 from '../ResultTxt2';
import ResultTxtImg from '../ResultTxtImg';
import ResultBadge from '../ResultBadge';


class TabSearchContents extends Component {

    render() {
        return (
            <div className="tab_search_contents">
                <ResultSide />

                <div className="result_list rContents">
                    <div className="inner">
                        <p className="ttl_txt"><strong>'데이터'</strong> 중 <strong className="search_keyword">'분석'</strong>에 대한 검색결과는 총 <strong>39건</strong>입니다.</p>

                        {/* ************ 2021-10 연관검색어 위치이동 ************ */}    
                        <div className="relative_box">
                            <dl>
                                <dt><strong>연관 검색어</strong></dt>
                                <dd>
                                    <ul>
                                        <li><Link to="/">데이터 길라잡이</Link></li>
                                        <li><Link to="/">데이터 분석</Link></li>
                                        <li><Link to="/">데이터 뽀개기</Link></li>
                                        <li><Link to="/">데이터 시각화 청각화그리고 다각화</Link></li>
                                        <li><Link to="/">데이터 통계와분석을 한꺼번에</Link></li>
                                        <li><Link to="/">데이터 마케팅</Link></li>
                                        <li><Link to="/">데이터 광고</Link></li>
                                        <li><Link to="/">Data 기반 Deep Change</Link></li>
                                        <li><Link to="/">데이터 통계 분석</Link></li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <ResultTxt />
                        <ResultBadge />
                        <ResultTxt2 />
                        <ResultTxtImg />
                    </div>
                </div>
            </div>
        )
    }
}


export default TabSearchContents
