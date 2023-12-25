import React, {Component} from 'react';

import ResultSide from '../ResultSide';
import ResultTxt from '../ResultTxt';
import Paging from '../Paging';


class TabSearchContents extends Component {

    render() {
        return (
            <div className="tab_search_contents">
                <ResultSide />

                <div className="result_list rContents">
                    <div className="inner">
                        <p className="ttl_txt"><strong className="search_keyword">데이터</strong>에 대한 검색결과는 총 <strong>39건</strong>입니다.</p>

                        <ResultTxt />
                        <Paging />
                    </div>
                </div>
            </div>
        )
    }
}


export default TabSearchContents
