import React, {Component} from 'react';

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
                        <p className="ttl_txt"><strong className="search_keyword">데이터</strong>에 대한 검색결과는 총 <strong>39건</strong>입니다.</p>

                        <ResultTxt />
                        <ResultBadge />
                        <ResultTxt2 />
                        <ResultTxtImg />
                        
                        {/* <div className="loading">에  hide 클래스 추가 되면 로딩영역 사라집니다. */}
                        <div className="loading">
                            <div className="spin">
                                <div className="path"></div>
                            </div>
                            <p>mySUNI가 열심히 검색중입니다. 잠시만 기다려주세요.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TabSearchContents
