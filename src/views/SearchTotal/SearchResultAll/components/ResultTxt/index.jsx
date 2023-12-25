import React, {Component, createRef} from 'react';
import { Segment, Sticky, Menu, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class ResultTxt extends Component {

    render() {
        return (
            <div className="result">
                <div className="result_title">
                    <strong>과정 (11)</strong>
                    <Link to="/" className="link_more">+ 더보기</Link>
                </div>

                <div className="result_contents">
                    <div className="sortbox">
                        <span>AI</span>
                        <span>AI Technologies Channel</span>
                    </div>
                    <div className="search_title">
                        <Link to="/">
                            <span>
                                NoSQL 이해와 활용 
                                <strong className="search_keyword">데이터</strong>
                                1 (What is NoSQL)
                            </span>
                        </Link>
                        <p className="search_detail">SK 관계사의 고객 기반 혁신 현장을 가다!! ‘SK의 고객 <strong className="search_keyword">데이터</strong> 마케팅 프랙티스’ [과정개요]  - SKT ICT패밀리, SK브로드</p>
                    </div>
                    <div className="tagbox">
                        <strong>태그</strong>
                        <div>
                            <span>태블로 마스터,</span>
                            <span>태블로</span>
                        </div>
                    </div>
                </div>

                <div className="result_contents">
                    <div className="sortbox">
                        <span>AI</span>
                        <span>AI Technologies Channel</span>
                    </div>
                    <div className="search_title">
                        <Link to="/">
                            <span>
                                <strong className="search_keyword">데이터</strong> 
                                3법, SK 구성원이 묻고 답하다
                            </span>
                        </Link>
                        <p className="search_detail"><strong className="search_keyword">데이터</strong> 3법에 대한 일반 구성원 인식 제고 및 관계사 담당자들의 전문성 강화를 위해 사내외 전문가를 모시고 의견을 들어보았습니다.</p>
                    </div>
                    <div className="tagbox">
                        <strong>태그</strong>
                        <div>
                            <span>태블로 마스터,</span>
                            <span>태블로</span>
                        </div>
                    </div>
                </div>

                <div className="result_contents">
                    <div className="sortbox">
                        <span>AI</span>
                        <span>AI Technologies Channel</span>
                    </div>
                    <div className="search_title">
                        <Link to="/">
                            <span>NoSQL 이해와 활용 1 (What is NoSQL)</span>
                            <span>Tableau Basic - 첫걸음 ③ <strong className="search_keyword">데이터</strong>  작업하기</span>
                        </Link>
                        <p className="search_detail">SK 관계사의 고객 기반 혁신 현장을 가다!! ‘SK의 고객 마케팅 프랙티스’ [과정개요]  - SKT ICT패밀리, SK브로드</p>
                    </div>
                    <div className="tagbox">
                        <strong>태그</strong>
                        <div>
                            <span>태블로 마스터,</span>
                            <span>태블로</span>
                        </div>
                    </div>
                </div>

                <div className="result_contents">
                    <div className="sortbox">
                        <span>AI</span>
                        <span>AI Technologies Channel</span>
                    </div>
                    <div className="search_title">
                        <Link to="/">
                            <span>NoSQL 이해와 활용 (What is NoSQL)  </span>
                            <span>
                                [<strong className="search_keyword">데이터</strong>시각화] Tableau 지식인
                            </span>
                        </Link>
                        <p className="search_detail">SK 관계사의 고객 기반 혁신 현장을 가다!! ‘SK의 고객 마케팅 프랙티스’ [과정개요]  - SKT ICT패밀리, SK브로드</p>
                    </div>
                    <div className="tagbox">
                        <strong>태그</strong>
                        <div>
                            <span>태블로 마스터,</span>
                            <span>태블로</span>
                        </div>
                    </div>
                </div>

                <div className="result_contents">
                    <div className="sortbox">
                        <span>AI</span>
                        <span>AI Technologies Channel</span>
                    </div>
                    <div className="search_title">
                        <Link to="/">
                            <span>Scala 이해와 활용 1 (Background of Scala ~ Control Structure)</span>
                        </Link>
                        <p className="search_detail">Scala Programming 언어를 이해하고, 빅<strong className="search_keyword">데이터</strong> 처리와 머신러닝을 위한 Spark의 스칼라 적용 개념을 학습하여 업무에</p>
                    </div>
                    <div className="tagbox">
                        <strong>태그</strong>
                        <div>
                            <span>태블로 마스터,</span>
                            <span>태블로</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ResultTxt
