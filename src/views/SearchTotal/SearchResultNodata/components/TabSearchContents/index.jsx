import React, {Component} from 'react';

import ResultSide from '../ResultSide';


class TabSearchContents extends Component {
     
    render() {
        return (
            <div className="tab_search_contents">
                <ResultSide />

                <div className="result_list rContents">
                    {/* <p className="ttl_txt"><strong>데이터</strong>에 대한 검색결과는 총 <strong>39건</strong>입니다.</p> */}
                    
                    {/* ************ 2021-10 연관검색어 위치이동 ************ */}    
                    {/* <div className="relative_box">
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
                    </div> */}
                    
                    {/* NoData */}
                    <p className="ttl_txt"><strong className="search_keyword">‘망ㄹㅈㄹ’</strong>에 대한 검색결과가 없습니다.</p>
                    
                    <div className="result_nodata">
                        <p>검색어의 철자가 정확한지 확인해 보세요.</p>
                        <p>검색어의 단어 수를 줄이거나, 더욱 일반적인 단어로 검색해 보세요.</p>
                        <p>키워드에 있는 특수문자를 뺀 후에 검색해 보세요.</p>
                        <p>검색 옵션을 변경한 후 다시 검색해 보세요.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default TabSearchContents
