import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class ResultTxt2 extends Component {

    render() {
        return (
            <div className="result">
                <div className="result_title">
                    <strong>Community (3)</strong>
                    {/* <Link to="/" className="link_more">+ 더보기</Link> */}
                </div>

                {/* 검색결과컨텐츠 */}
                <div className="result_contents">
                    <div className="search_title">
                        <Link to="/">'21년 상반기 제조/기술 <strong className="search_keyword">데이터</strong> 리더십 Essential (1차수)</Link>
                        <p className="search_detail">
                            SK 관계사의 고객 기반 혁신 현장을 가자!! SK의 고객 마케팅 프랙티스' [과정개요] - SKT ICT 패밀리, SK브로드
                        </p>
                    </div>
                </div>

                {/* 검색결과컨텐츠 */}
                <div className="result_contents">
                    <div className="search_title">
                        <Link to="/">애자일 코치 Meetup</Link>
                        <p className="search_detail">
                            [Hubert의 애자일 이야기] #8-2 우리는 어떤 회사에서 일하고 있나?(
                            <strong className="search_keyword">데이터</strong>기반 분석)
                        </p>
                    </div>
                </div>

                {/* 검색결과컨텐츠 */}
                <div className="result_contents">
                    <div className="search_title">
                        <Link to="/">커뮤니티 접근제어 테스트 비밀형</Link>
                        <p className="search_detail">
                            2021 커뮤니티 알림 <strong className="search_keyword">데이터</strong>테스트
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}


export default ResultTxt2
