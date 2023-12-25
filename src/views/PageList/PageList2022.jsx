import React, { Component, createRef } from 'react';
import { Segment, Table, List, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css';

class PageList2023 extends Component {
    contextRef = createRef()
    state = { activeItem: 'Overview' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    spyScrollClick = (e) => {
        //let gap = 165;
        let id = e.target.getAttribute("href");
        id = id.replace("#/", "");

        let pos = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - 110;

        window.scrollTo(0, pos);
    }

    render() {
        return (
            <section className='content index-page bg-white'>
                <div ref={this.contextRef}>
                    <Sticky context={this.contextRef} className='tab-menu offset0'>
                        <div className="cont-inner" style={{ width: '90rem' }}>
                            <div className='page-gnb'>
                                <div className='page-logo'>
                                    <img src="https://ma.mysuni.sk.com/suni-asset/public/images/all/header-logo.png" alt="" />
                                </div>
                                <div className="page-btns">
                                    <a href="https://ma.mysuni.sk.com/suni-asset/public/mobile-pub/_guide/ia/index.html" rel="noopener noreferrer" className="page_change">모바일</a>
                                </div>
                            </div>
                            <List horizontal className='page-list-menu'>
                                <List.Item><Link to="#Release" onClick={this.spyScrollClick}>배포예정</Link></List.Item>
                                <List.Item><Link to="#Login" onClick={this.spyScrollClick}>회원가입/로그인</Link></List.Item>
                                <List.Item><Link to="#Onboard" onClick={this.spyScrollClick}>온보딩</Link></List.Item>
                                <List.Item><Link to="#Main" onClick={this.spyScrollClick}>Main</Link></List.Item>
                                <List.Item><Link to="#Category" onClick={this.spyScrollClick}>Category</Link></List.Item>
                                <List.Item><Link to="#Certification" onClick={this.spyScrollClick}>Certification</Link></List.Item>
                                <List.Item><Link to="#Community" onClick={this.spyScrollClick}>커뮤니티</Link></List.Item>
                                <List.Item><Link to="#MyLearning" onClick={this.spyScrollClick}>My Learning</Link></List.Item>
                                <List.Item><Link to="#Learning" onClick={this.spyScrollClick}>학습과정</Link></List.Item>
                                {/* <List.Item><Link to="#Recommend" onClick={this.spyScrollClick}>추천</Link></List.Item> */}
                                <List.Item><Link to="#Search" onClick={this.spyScrollClick}>검색</Link></List.Item>
                                <List.Item><Link to="#MyPage" onClick={this.spyScrollClick}>My Page</Link></List.Item>
                                <List.Item><Link to="#Footer" onClick={this.spyScrollClick}>Footer</Link></List.Item>
                                {/* <List.Item><Link to="#Introduction" onClick={this.spyScrollClick}>Introduction</Link></List.Item> */}
                                <List.Item><Link to="#Expert" onClick={this.spyScrollClick}>강사서비스</Link></List.Item>
                                <List.Item><Link to="#Common" onClick={this.spyScrollClick}>공통</Link></List.Item>
                                <List.Item><Link to="#ETC" onClick={this.spyScrollClick}>기타</Link></List.Item>
                                {/* <List.Item><Link to="#Approval" onClick={this.spyScrollClick}>Approval</Link></List.Item>
                                <List.Item><Link to="#Introduction" onClick={this.spyScrollClick}>Introduction</Link></List.Item>
                                <List.Item><Link to="#executives" onClick={this.spyScrollClick}>신임임원</Link></List.Item> */}
                            </List>
                        </div>
                    </Sticky>

                    <Segment basic>
                        <Table celled structured selectable>
                            <colgroup>
                                <col width='30%' />
                                {/* <col width='5%' /> */}
                                <col width='20%' />
                                <col width='10%' />
                                <col width='10%' />
                                <col width='30%' />
                            </colgroup>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>화면명</Table.HeaderCell>
                                    {/* <Table.HeaderCell textAlign='center'>화면 아이디</Table.HeaderCell> */}
                                    <Table.HeaderCell textAlign='center'>경로</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>작업자</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>작업일</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>배포정보</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <>{/* @@배포예정 */}
                                    <Table.Row verticalAlign='top' id="Release">
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>배포예정</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* @@학습과정 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 샘플/템플릿</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/sample/note-sample' target="_blank">
                                                <span className='text-purple'>Note Sample </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/sample/note-sample'>
                                                /sample/note-sample
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/sample/card-sample' target="_blank">
                                                <span className='text-purple'>Card Sample</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-004</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/sample/card-sample'>
                                                /sample/card-sample
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-temp' target="_blank">
                                                <span className='text-purple'>카드 Overview Template</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>REQ-004</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-temp'>
                                                /learning/card-overview-temp
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-overview-temp' target="_blank">
                                                <span className='text-purple'>단독 큐브 Overview Template</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>REQ-004</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-overview-temp'>
                                                /learning/single-overview-temp
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-overview-temp' target="_blank">
                                                <span className='text-purple'>유형별 큐브 Overview Template</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>REQ-004</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-overview-temp'>
                                                /learning/cube-overview-temp
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 Overview</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-always' target="_blank">
                                                <span className='text-purple'>Card Overview 상시형</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-005</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-always'>
                                                /learning/card-overview-always
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-always-fail' target="_blank">
                                                <span className='text-purple'>Card Overview 상시형 (미이수)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-005</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-always-fail'>
                                                /learning/card-overview-always-fail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-preiod' target="_blank">
                                                <span className='text-purple'>Card Overview 기간형</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-006</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-preiod'>
                                                /learning/card-overview-preiod
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-09</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-preiod-02' target="_blank">
                                                <span className='text-purple'>Card Overview 기간형 (과정 포함)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-006</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-preiod-02'>
                                                /learning/card-overview-preiod-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-09</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-live' target="_blank">
                                                <span className='text-purple'>Card Overview 라이브형</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-007</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-live'>
                                                /learning/card-overview-live
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-10</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-inquery-modal' target="_blank">
                                                <span className='text-purple'>Card Overview 문의하기 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-007</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-inquery-modal'>
                                                /learning/card-overview-inquery-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-10</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-inquery-modal-error' target="_blank">
                                                <span className='text-purple'>Card Overview 문의하기 팝업(필수입력)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-007</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-inquery-modal-error'>
                                                /learning/card-overview-inquery-modal-error
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-10</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Video</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video' target="_blank">
                                                <span className='text-purple'>Video</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-009</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video'>
                                                /learning/cube-video
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-video' target="_blank">
                                                <span className='text-purple'>Video (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>REQ-009</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-video'>
                                                /learning/single-video
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Audio</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-audio' target="_blank">
                                                <span className='text-purple'>Audio</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-orange'>REQ-010</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-audio'>
                                                /learning/cube-audio
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-audio' target="_blank">
                                                <span className='text-purple'>Audio (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-orange'>REQ-010</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-audio'>
                                                /learning/single-audio
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Document</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* 2020-10-15 LM-DO-10 추가*/}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-document' target="_blank">
                                                <span className='text-purple'>Document</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-orange'>LM-DO-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-document'>
                                                /learning/cube-document
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-document' target="_blank">
                                                <span className='text-purple'>Document (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-orange'>LM-DO-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-document'>
                                                /learning/single-document
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Assignment</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment' target="_blank">
                                                <span className='text-purple'>Assignment Post 목록</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment'>
                                                /learning/cube-assignment
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-post-nodata' target="_blank">
                                                <span className='text-purple'>Assignment Post 목록 (데이터 없을시)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-post-nodata'>
                                                /learning/cube-assignment-post-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-post-empty' target="_blank">
                                                <span className='text-purple'>Assignment Post 목록 (검색결과 없을시)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-post-empty'>
                                                /learning/cube-assignment-post-empty
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-post-write' target="_blank">
                                                <span className='text-purple'>Assignment Post 등록 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-post-write'>
                                                /learning/cube-assignment-post-write
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-post-detail' target="_blank">
                                                <span className='text-purple'>Assignment Post 상세 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-post-detail'>
                                                /learning/cube-assignment-post-detail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-report-write' target="_blank">
                                                <span className='text-purple'>Assignment Report (작성전)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-report-write'>
                                                /learning/cube-assignment-report-write
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-report-grading' target="_blank">
                                                <span className='text-purple'>Assignment Report (채점중)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-report-grading'>
                                                /learning/cube-assignment-report-grading
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-report-fail' target="_blank">
                                                <span className='text-purple'>Assignment Report (불합격)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-report-fail'>
                                                /learning/cube-assignment-report-fail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-report-pass' target="_blank">
                                                <span className='text-purple'>Assignment Report (합격)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-report-pass'>
                                                /learning/cube-assignment-report-pass
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-assignment' target="_blank">
                                                <span className='text-purple'>Assignment (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-RE-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-assignment'>
                                                /learning/single-assignment
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Discussion</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-discussion' target="_blank">
                                                <span className='text-purple'>Discussion</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-DI-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-discussion'>
                                                /learning/cube-discussion
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-discussion-nodata' target="_blank">
                                                <span className='text-purple'>Discussion (Nodata)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-DI-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-discussion-nodata'>
                                                /learning/cube-discussion-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-discussion' target="_blank">
                                                <span className='text-purple'>Discussion (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-DI-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-discussion'>
                                                /learning/single-discussion
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Webpage</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-webpage' target="_blank">
                                                <span className='text-purple'>Webpage</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-webpage'>
                                                /learning/cube-webpage
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-webpage' target="_blank">
                                                <span className='text-purple'>Webpage (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-webpage'>
                                                /learning/single-webpage
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-webpage-embed' target="_blank">
                                                <span className='text-purple'>Webpage (embedded)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-webpage-embed'>
                                                /learning/cube-webpage-embed
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-webpage-embed' target="_blank">
                                                <span className='text-purple'>Webpage (embedded)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-webpage-embed'>
                                                /learning/single-webpage-embed
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-webpage-coursera' target="_blank">
                                                <span className='text-purple'>Webpage (외부교육)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-webpage-coursera'>
                                                /learning/cube-webpage-coursera
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Class</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-class' target="_blank">
                                                <span className='text-purple'>Class 학습중</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-EC-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-class'>
                                                /learning/cube-class
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-08</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-class-absence' target="_blank">
                                                <span className='text-purple'>Class 불참</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-EC-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-class-absence'>
                                                /learning/cube-class-absence
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-08</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-class' target="_blank">
                                                <span className='text-purple'>Class (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-EC-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-class'>
                                                /learning/single-class
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-08</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-class-enrolment-modal' target="_blank">
                                                <span className='text-purple'>Class (단일큐브) - 수강신청</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>IN-02-01</span>)<br/> */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-class-enrolment-modal'>
                                                /learning/single-class-enrolment-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-08</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Live</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-live' target="_blank">
                                                <span className='text-purple'>Live</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-live'>
                                                /learning/cube-live
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-live-popup' target="_blank">
                                                <span className='text-purple'>Live 알림팝업 신청하기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-live-popup'>
                                                /learning/cube-live-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-live-popup02' target="_blank">
                                                <span className='text-purple'>Live 알림팝업 신청취소</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-live-popup02'>
                                                /learning/cube-live-popup02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-live' target="_blank">
                                                <span className='text-purple'>Live (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-live'>
                                                /learning/single-live
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : TEST</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test' target="_blank">
                                                <span className='text-purple'>TEST 응시하기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test'>
                                                /learning/cube-test
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-02' target="_blank">
                                                <span className='text-purple'>TEST 응시하기 (응시 제한없음)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-02'>
                                                /learning/cube-test-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-text' target="_blank">
                                                <span className='text-purple'>TEST 응시중 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-text'>
                                                /learning/cube-test-text
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-complete' target="_blank">
                                                <span className='text-purple'>TEST 채점결과 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-complete'>
                                                /learning/cube-test-complete
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-pass' target="_blank">
                                                <span className='text-purple'>TEST 응시완료 (이수)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-pass'>
                                                /learning/cube-test-pass
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-fail' target="_blank">
                                                <span className='text-purple'>TEST 응시완료 (미이수)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-fail'>
                                                /learning/cube-test-fail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-confirm' target="_blank">
                                                <span className='text-purple'>TEST 응시완료 (채점중)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-confirm'>
                                                /learning/cube-test-confirm
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-test' target="_blank">
                                                <span className='text-purple'>TEST (단일큐브) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-test'>
                                                /learning/single-test
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Talk</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-talk' target="_blank">
                                                <span className='text-purple'>Talk</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-talk'>
                                                /learning/cube-talk
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Survey</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* 2020-10-15 LM-SU-10 추가*/}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey' target="_blank">
                                                <span className='text-purple'>Survey</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-SU-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey'>
                                                /learning/cube-survey
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey-basic' target="_blank">
                                                <span className='text-purple'>Survey 진행 (일반) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-SU-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey-basic'>
                                                /learning/cube-survey-basic
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey-core' target="_blank">
                                                <span className='text-purple'>Survey 공통설문 (필수만족도) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-SU-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey-core'>
                                                /learning/cube-survey-core
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey-chart-core' target="_blank">
                                                <span className='text-purple'>Survey 공통설문 결과 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'></span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey-chart-core'>
                                                /learning/cube-survey-chart-core
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey-complete' target="_blank">
                                                <span className='text-purple'>Survey 응시 참여완료</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>LM-SU-15</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey-complete'>
                                                /learning/cube-survey-complete
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey-done' target="_blank">
                                                <span className='text-purple'>Survey 재진입 응답완료</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-SU-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey-done'>
                                                /learning/cube-survey-done
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-survey' target="_blank">
                                                <span className='text-purple'>Survey (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-SU-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-survey'>
                                                /learning/single-survey
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 - Blended Chapter</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-blendedchapter' target="_blank">
                                                <span className='text-purple'>Blended Chapter</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-blendedchapter'>
                                                /learning/cube-blendedchapter
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-10</Table.Cell>
                                        <Table.Cell>22-09-20 Blended 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-blendedchapter-case2' target="_blank">
                                                <span className='text-purple'>Blended Chapter Case2</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-blendedchapter-case2'>
                                                /learning/cube-blendedchapter-case2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-16</Table.Cell>
                                        <Table.Cell>22-09-20 Blended 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-blendedchapter-case3' target="_blank">
                                                <span className='text-purple'>Blended Chapter Case3</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-blendedchapter-case3'>
                                                /learning/cube-blendedchapter-case3
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-10-13</Table.Cell>
                                        <Table.Cell>22-09-20 Blended 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-blendedchapter-quiz' target="_blank">
                                                <span className='text-purple'>Blended Chapter Video quiz</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-blendedchapter-quiz'>
                                                /learning/cube-blendedchapter-quiz
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-16</Table.Cell>
                                        <Table.Cell>22-09-20 Blended 추가</Table.Cell>
                                    </Table.Row>
                                    {/* @@학습과정 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>신규 가입자 웹컴</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-KOR.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-blue'>SUNI 소개 - 한국어</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-01-01-KOR</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-KOR.html' rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/introduction/IN-01-01-KOR.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-10-12</Table.Cell>
                                        <Table.Cell>
                                            <p>22-10-13 날짜미정 신규가입자 웰컴</p>
                                        </Table.Cell>
                                    </Table.Row>
                                </>{/* //배포예정 */}
                                <>{/* @@로그인 */}
                                    <Table.Row verticalAlign='top' id='Login'>
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>회원가입/로그인</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* @외부사용자 회원가입 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>외부사용자 회원가입</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/joining-form' target="_blank">
                                                <span className='text-purple'> 외부사용자 회원가입</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-20-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/joining-form'>
                                                login/joining-form
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-03</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/joining-form-loader' target="_blank">
                                                <span className='text-purple'>외부사용자 회원가입코드 인증</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-20-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/joining-form-loader'>
                                                login/joining-form-loader
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-03</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/joining-form-popup-confirm' target="_blank">
                                                <span className='text-purple'>외부사용자 회원가입코드 인증완료</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-20-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/joining-form-popup-confirm'>
                                                login/joining-form-popup-confirm
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-03</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/joining-form-popup' target="_blank">
                                                <span className='text-purple'>외부사용자 회원가입코드 불일치</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-20-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/joining-form-popup'>
                                                login/joining-form-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-03</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/privacy-agree-extra' target="_blank">
                                                <span className='text-purple'>외부사용자 개인정보 수집 및 이용 동의 및 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-30-10, REG-30-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/privacy-agree-extra'>
                                                login/privacy-agree-extra
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-03</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/privacy-agree-extra-error' target="_blank">
                                                <span className='text-purple'>외부사용자 개인정보수집 및 동의 메세지 err메세지</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-30-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/privacy-agree-extra-error'>
                                                login/privacy-agree-extra-error
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-03</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/regi-form' target="_blank">
                                                <span className='text-purple'>회원가입 대상(B2B)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-40-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/regi-form'>
                                                login/regi-form
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-03</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/regi-form-error' target="_blank">
                                                <span className='text-purple'>회원가입 대상(B2B) 비밀번호 validation/소속단체 직접입력 선택시</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-40-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/regi-form-error'>
                                                login/regi-form-error
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-03</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/regi-end' target="_blank">
                                                <span className='text-purple'>외부사용자 회원가입완료</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-50-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/regi-end'>
                                                login/regi-end
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-03</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/password-change' target="_blank">
                                                <span className='text-purple'>외부사용자 가입후 비밀번호 변경</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-70-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/password-change'>
                                                login/password-change
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-08</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='login/password-change-error' target="_blank">
                                                <span className='text-purple'>외부사용자 가입후 비밀번호 불일치</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REG-70-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='login/password-change-error'>
                                                login/password-change-error
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-06-08</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    {/* //외부사용자 회원가입 */}
                                    {/* @로그인 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>로그인</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-01-01.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>로그인</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>Language_LO-01-01_Login_B_2</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-01-01.html" rel="noopener noreferrer">
                                                open1223/dist/html/login/LO-01-01.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-01-01-error.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>로그인 (에러)</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>Language_LO-01-01_Login_B_2</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-01-01-error.html" rel="noopener noreferrer">
                                                open1223/dist/html/login/LO-01-01-error.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-02-01.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>비밀번호 변경</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-02-01.html" rel="noopener noreferrer">
                                                open1223/dist/html/login/LO-02-01.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-02-01-error.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>비밀번호 변경 (에러)</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-02-01-error.html" rel="noopener noreferrer">
                                                open1223/dist/html/login/LO-02-01-error.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-03-01.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>비밀번호 변경 (완료)</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-03-01.html" rel="noopener noreferrer">
                                                open1223/dist/html/login/LO-03-01.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-04-01.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>비밀번호 초기화</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-04-01.html" rel="noopener noreferrer">
                                                open1223/dist/html/login/LO-04-01.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-04-01-error.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>비밀번호 초기화 (에러)</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/login/LO-04-01-error.html" rel="noopener noreferrer">
                                                open1223/dist/html/login/LO-04-01-error.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-01.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>회원가입</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-01.html" rel="noopener noreferrer">
                                                open1223/dist/html/regi/REG-01-01.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-01-pwd.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>회원가입 (auth true)</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-01-pwd.html" rel="noopener noreferrer">
                                                open1223/dist/html/regi/REG-01-01-pwd.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-02.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>회원가입 - 가입 인증</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-02.html" rel="noopener noreferrer">
                                                open1223/dist/html/regi/REG-01-02.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-03.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>회원가입 - 개인정보 수집 및 이용동의 안내</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/REG-01-03.html" rel="noopener noreferrer">
                                                open1223/dist/html/regi/REG-01-03.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/password-change-info' target="_blank">
                                                <span className='text-purple'>비밀번호 변경안내</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/password-change-info'>
                                                /login/password-change-info
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-09-15</Table.Cell>
                                        <Table.Cell>22-10-13 비밀번호 변경주기</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/password-change-info-error' target="_blank">
                                                <span className='text-purple'>비밀번호 변경안내(에러)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/password-change-info-error'>
                                                /login/password-change-info-error
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-09-15</Table.Cell>
                                        <Table.Cell>22-10-13 비밀번호 변경주기</Table.Cell>
                                    </Table.Row>
                                    {/* //로그인 */}
                                    {/* @로그인(Admin) */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>로그인(Admin)</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_01_IdPassword.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>Admin 로그인 디자인</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>Admin 로그인 디자인</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_01_IdPassword.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/admin/AdminLogin_01_IdPassword.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>Admin 이메일 인증 디자인</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>Admin 이메일 인증 디자인</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/admin/AdminLogin_02_Email.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>21-03-17</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email-sendCode.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>Admin 이메일 인증보내기 디자인</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>Admin 이메일 인증보내기 디자인</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email-sendCode.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/admin/AdminLogin_02_Email-sendCode.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>21-03-17</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email-timeOut.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>Admin 이메일 타임아웃 디자인</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>Admin 이메일 타임아웃 디자인</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/admin/AdminLogin_02_Email-timeOut.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/admin/AdminLogin_02_Email-timeOut.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>21-03-17</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/AdminLogin_REG-80-20.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>Admin - 관리자 확인 화면</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>Admin - 관리자 확인 화면</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/AdminLogin_REG-80-20.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/regi/AdminLogin_REG-80-20.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-07-02</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/AdminLogin_REG-80-20-case.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>Admin - 관리자 확인 화면(활성화)</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>Admin - 관리자 확인 화면(활성화)</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/regi/AdminLogin_REG-80-20-case.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/regi/AdminLogin_REG-80-20-case.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-07-02</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/password-info-modal' target="_blank">
                                                <span className='text-blue'>초기 패스워드 안내팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LO-01-01-P01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/password-info-modal'>
                                                /login/password-info-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    {/* //로그인(Admin) */}
                                </>{/* //로그인 */}
                                <>{/* @@온보딩 */}
                                    {/* @온보딩 */}
                                    <Table.Row verticalAlign='top' id="Onboard">
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>온보딩</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/privacy-agree' target="_blank">
                                                <span className='text-purple'>개인정보 제공동의</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LO-06-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/privacy-agree'>
                                                /login/privacy-agree
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-12-02</Table.Cell>
                                        <Table.Cell>22-12-02 운영 현행화</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/interest-settings-job-plan' target="_blank">
                                                <span className='text-purple'>관심사 설정  &gt; 현재직무 선택</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LO-07-02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/interest-settings-job-plan'>
                                                /login/interest-settings-job-plan
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-12-02</Table.Cell>
                                        <Table.Cell>22-12-02 운영 현행화</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/interest-settings-job-plan-case01' target="_blank">
                                                <span className='text-purple'>관심사 설정  &gt; 관심직무 선택</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LO-07-02-case1</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/interest-settings-job-plan-case01'>
                                                /login/interest-settings-job-plan-case01
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-12-02</Table.Cell>
                                        <Table.Cell>22-12-02 운영 현행화</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/interest-settings-part' target="_blank">
                                                <span className='text-purple'>관심사 설정  &gt; 관심분야 선택</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LO-07-01, LO-07-01-case1</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/interest-settings-part'>
                                                /login/interest-settings-part
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-12-02</Table.Cell>
                                        <Table.Cell>22-12-02 운영 현행화</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/interest-settings-learning-type' target="_blank">
                                                <span className='text-purple'>관심사 설정  &gt; 학습목표 선택</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LO-07-03, LO-07-03-case1</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/interest-settings-learning-type'>
                                                /login/interest-settings-learning-type
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-12-02</Table.Cell>
                                        <Table.Cell>22-12-02 운영 현행화</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/interest-settings-complete' target="_blank">
                                                <span className='text-purple'>관심사 설정  &gt; 맞춤형 학습 추천 로딩(GIf ani 별도)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LO-07-04</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/interest-settings-complete'>
                                                /login/interest-settings-complete
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-12-02</Table.Cell>
                                        <Table.Cell>22-12-02 운영 현행화</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/interest-settings-suni-intro' target="_blank">
                                                <span className='text-blue'>관심사 설정  &gt; SUNI 소개</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LO-07-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/interest-settings-suni-intro'>
                                                /login/interest-settings-suni-intro
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/interest-settings-start' target="_blank">
                                                <span className='text-blue'>관심사 설정시작화면</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LO-07-06</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/interest-settings-start'>
                                                /login/interest-settings-start
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>22-04-06 상단 구성 변경 및 이미지 교체</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/login/new-privacy-agree' target="_blank">
                                                <span className='text-blue'>개인정보 동의 재시행 안내, 개인정보 동의, 현 직무 선택, 관심 직무 선택, 관심분야, 학습방식</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LO-08-01, LO-08-02, LO-08-03, LO-08-04, LO-08-05, LO-08-06</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/login/new-privacy-agree'>
                                                /login/new-privacy-agree
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-08-14</Table.Cell>
                                        <Table.Cell>20-08-14 추가</Table.Cell>
                                    </Table.Row>
                                    {/* //온보딩 */}
                                </>{/* //온보딩 */}
                                <>{/* @@Main */}
                                    <Table.Row verticalAlign='top' id="Main">
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>Main</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/main-index-new' target="_blank">
                                                <span className="text-purple">Main</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className="text-purple">AL-MA-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/main-index-new'>
                                                /main/main-index-new
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-19</Table.Cell>
                                        <Table.Cell>
                                            <p>22-01-25 운영 Playlist</p>
                                            <p>22-10-05 Foundation Skill 추가</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/main-index-new-no-badge' target="_blank">
                                                <span className="text-purple">Main (진행중인 뱃지 없음)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className="text-purple">New_Main_02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/main-index-new-no-badge'>
                                                /main/main-index-new-no-badge
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영/장은진</Table.Cell>
                                        <Table.Cell>21-11-03</Table.Cell>
                                        <Table.Cell>20-21-11 UI/UX 개선</Table.Cell>
                                    </Table.Row>
                                    {/* 2021-02-23 LM-PB-11 팝업 추가*/}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/ClassSeriesDetailModal' target="_blank">
                                                <span className='text-purple'>Main &gt; 목표설정popup</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PB-11</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/ClassSeriesDetailModal'>
												/main/ClassSeriesDetailModal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>21-02-23</Table.Cell>
                                        <Table.Cell><span>(3차고도화)퍼스널보드  &gt; 오픈 커뮤니티 (Tab)  &gt; 개인게시판(팝업) </span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/AddPersonalLearningFormNew' target="_blank">
                                                <span className='text-blue'>Main &gt; 개인학습 입력화면</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>ML-03-01 ML-03-01-2</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/AddPersonalLearningFormNew'>
                                                /learning/AddPersonalLearningFormNew
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/sample/MainTopBanner' target="_blank">
                                                <span className='text-purple'>header &gt; 상단 탑배너 영역잡기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/sample/MainTopBanner'>
                                                /sample/MainTopBanner
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/main-personal-board-profile-new' target="_blank">
                                                <span className="text-purple">header &gt; 프로필 카드 NEW</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className="text-purple">New_Main_01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/main-personal-board-profile-new'>
                                                /main/main-personal-board-profile-new
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-05-24</Table.Cell>
                                        <Table.Cell><span>20-21-11 UI/UX 개선</span><span>22-05-24 외부강사용 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/MainLearningViewAll' target="_blank">
                                                <span className='text-purple'>수강신청과정 모아보기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>Footer_A(open)</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/MainLearningViewAll'>
                                                /main/MainLearningViewAll
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-12-26</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    {/* @추천 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>추천</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/recommend/RecommendDetailChannelOpenV2' target="_blank">
                                                <span className='text-purple'>추천상세 목록  &gt; 관심채널 보기 영역 확장 (3차고도화)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PB-21</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/recommend/RecommendDetailChannelOpenV2'>
                                                /recommend/RecommendDetailChannelOpenV2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 관심채널 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/recommend/RecommendDetailNoData' target="_blank">
                                                <span className='text-purple'>추천상세 목록 (No Data)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>RC-01-02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/recommend/RecommendDetailNoData'>
                                                /recommend/RecommendDetailNoData
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 관심채널 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/recommend/RecommendViewallChannelChange' target="_blank">
                                                <span className='text-purple'>추천상세 목록  &gt; 전체보기 목록</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>RC-01-02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/recommend/RecommendViewallChannelChange'>
                                                /recommend/RecommendViewallChannelChange
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 관심채널 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/recommend/RecommendViewNoData' target="_blank">
                                                <span className='text-purple'>추천상세 목록  &gt; 전체보기 목록(No Data)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>RC-01-02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/recommend/RecommendViewNoData'>
                                                /recommend/RecommendViewNoData
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 관심채널 현행화</span></Table.Cell>
                                    </Table.Row>
                                    {/* //추천 */}
                                    {/* @관심채널 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>관심채널</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/channel-change-modal' target="_blank">
                                                <span className='text-purple'>관심 채널 변경 팝업  &gt; 선택 값 없음, 선택 후</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>MY-01-01-P02, MY-01-01-P02-2</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/channel-change-modal'>
                                                /mypage/channel-change-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-02-18</Table.Cell>
                                        <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/channel-change-search-modal' target="_blank">
                                                <span className='text-purple'>관심 채널 변경 팝업  &gt; 검색 후</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>/MY-01-01-P02-3</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/channel-change-search-modal'>
                                                /mypage/channel-change-search-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-02-18</Table.Cell>
                                        <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/channel-change-search-nodata-modal' target="_blank">
                                                <span className='text-purple'>관심 채널 변경 팝업  &gt; 검색 결과 값 없음</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>MY-01-01-P02-4</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/channel-change-search-nodata-modal'>
                                                /mypage/channel-change-search-nodata-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-02-18</Table.Cell>
                                        <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
                                    </Table.Row>
                                    {/* //관심채널 */}
                                    {/* @Hot Topic */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Hot Topic</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/hot-topic/HotTopicList' target="_blank">
                                                <span className="text-purple">Hot Topic 리스트</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className="text-purple"></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/hot-topic/HotTopicList'>
                                                /hot-topic/HotTopicList
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영/장은진</Table.Cell>
                                        <Table.Cell><p>21-10-26</p><p>22-03-18</p></Table.Cell>
                                        <Table.Cell>
                                            <p>20-21-11 UI/UX 개선, 20-21-12 핫토픽 별점삭제 후 만족도 추가,</p>
                                            <p>22-03-18 new label추가</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/hot-topic/HotTopicPage' target="_blank">
                                                <span className="text-purple">Hot Topic 전체보기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className="text-purple">Hot_Topic_00</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/hot-topic/HotTopicPage'>
                                                /hot-topic/HotTopicPage
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell><p>22-03-18</p></Table.Cell>
                                        <Table.Cell><p>22-04-05 전체 둘러보기 - 신규, 기존 hottopic카드 icon교체, new label추가</p></Table.Cell>
                                    </Table.Row>
                                    {/* // Hot Topic */}
                                </>{/* //Main */}
                                <>{/* @@Category */}
                                    <Table.Row verticalAlign='top' id="Category">
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>Category</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/categoryDetail' target="_blank">
                                                <span className='text-purple'>헤더 Category 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>공통</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/categoryDetail'>
                                                /common/categoryDetail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-02-18</Table.Cell>
                                        <Table.Cell>
                                            <p>22-04-05 채널 2Depth 추가</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/CollegeAllNew' target="_blank">
                                                <span className='text-purple'>Category 전체보기 - 3Depth 전체선택</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>NEW_CO-05-01-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/CollegeAllNew'>
                                                /common/CollegeAllNew
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-02-18</Table.Cell>
                                        <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/CollegeAllNewSelected' target="_blank">
                                                <span className='text-purple'>Category 전체보기 - 3Depth 메뉴선택</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>NEW_CO-05-01-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/CollegeAllNewSelected'>
                                                /common/CollegeAllNewSelected
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-02-18</Table.Cell>
                                        <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/CollegeAllNewNoDepth' target="_blank">
                                                <span className='text-purple'>Category 전체보기 - 전체선택 - 3Depth 없음</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>NEW_CO-05-01-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/CollegeAllNewNoDepth'>
                                                /common/CollegeAllNewNoDepth
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-02-18</Table.Cell>
                                        <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/CollegeAllNewNoDepthSelected' target="_blank">
                                                <span className='text-purple'>Category 전체보기 - 메뉴선택 - 3Depth 없음</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>NEW_CO-05-01-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/CollegeAllNewNoDepthSelected'>
                                                /common/CollegeAllNewNoDepthSelected
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-02-18</Table.Cell>
                                        <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/CollegeAllNewSelectedAll' target="_blank">
                                                <span className='text-purple'>Category 전체보기 - 특정 채널 전체보기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>NEW_CO-05-01-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/CollegeAllNewSelectedAll'>
                                                /common/CollegeAllNewSelectedAll
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-02-18</Table.Cell>
                                        <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
                                    </Table.Row>
                                </>{/* //Category */}
                                <>{/* @@Certification */}
                                    <Table.Row verticalAlign='top' id='Certification'>
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>Certification</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/certification/BadgeSample' target="_blank">
                                                <span className='text-purple'>Badge UI</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>[Type A] Badge_UI</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/certification/BadgeSample'>
                                                /certification/BadgeSample
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>20-21-12 수정</p><p>21-12-03 퍼블완료</p><p>22-08-19 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/certification/AllBadgeListSlideV2' target="_blank">
                                                <span className='text-purple'>Badge List(tab)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/certification/AllBadgeListSlideV2'>
                                                /certification/AllBadgeListSlideV2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell>
                                            <p>22-04-05 Badge UI 개선</p>
                                            <p>22-10-05 Badge UI 개선</p>
                                            <p>22-10-05 Foundation Skill 추가</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/certification/ChallengingBadgeListV2' target="_blank">
                                                <span className='text-purple'>도전중 Badge(tab)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/certification/ChallengingBadgeListV2'>
                                                /certification/ChallengingBadgeListV2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>22-04-05 Badge UI 개선</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/certification/EarnedBadgeListV2' target="_blank">
                                                <span className='text-purple'>MyBadge(tab)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/certification/EarnedBadgeListV2'>
                                                /certification/EarnedBadgeListV2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                </>{/* //Certification */}
                                <>{/* @@커뮤니티 */}
                                    <Table.Row verticalAlign='top' id='Community'>
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>커뮤니티</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>GNB &gt; Community Main</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* 2020-10-19 CO-MA-20 추가*/}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/mycommunity-Main' target="_blank">
                                                <span className='text-purple'>마이 커뮤니티 (Tab)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/mycommunity-Main'>
                                                /community/mycommunity-Main
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-10-19</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/mycommunity-Main-new' target="_blank">
                                                <span className='text-purple'>마이 커뮤니티 (Tab) - 전체.Active </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/mycommunity-Main-new'>
                                                /community/mycommunity-Main-new
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-10-19</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/mycommunity-Main-new-favorites' target="_blank">
                                                <span className='text-purple'>마이 커뮤니티 (Tab) - 즐겨찾기.Active</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/mycommunity-Main-new-favorites'>
                                                /community/mycommunity-Main-new-favorites
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-10-19</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/MycommunityMainFavoritesNodata' target="_blank">
                                                <span className='text-purple'>마이 커뮤니티 (Tab) - 즐겨찾기.Active (Nodata)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/MycommunityMainFavoritesNodata'>
                                                /community/MycommunityMainFavoritesNodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-10-19</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/MycommunityMainIngNodata' target="_blank">
                                                <span className='text-purple'>마이 커뮤니티 (Tab) - 운영중.Active (Nodata)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/MycommunityMainIngNodata'>
                                                /community/MycommunityMainIngNodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-10-19</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/MycommunityOpen' target="_blank">
                                                <span className='text-purple'>오픈 커뮤니티 (Tab) - 즐겨찾기(별)추가</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/MycommunityOpen'>
                                                /community/MycommunityOpen
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-10-20</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/MycommunityOpenNodata' target="_blank">
                                                <span className='text-purple'>오픈 커뮤니티 (Tab) - 즐겨찾기(별)추가 (Nodata)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/MycommunityOpenNodata'>
                                                /community/MycommunityOpenNodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-10-20</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    {/* 2021-02-19 CO-MA-10 팝업 추가*/}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/MycommunityOpenPopup' target="_blank">
                                                <span className='text-purple'>오픈 커뮤니티 (Tab)  &gt; 비밀번호 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/MycommunityOpenPopup'>
                                                /community/MycommunityOpenPopup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>21-02-19</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    {/* 2020-10-19 LM-MA-30 추가*/}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/MycommunityMainFollow' target="_blank">
                                                <span className='text-purple'>Follwing Feed (Tab)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/MycommunityMainFollow'>
                                                /community/MycommunityMainFollow
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-06-03</Table.Cell>
                                        <Table.Cell><p>20-10-192차 고도화 (유컴패니온)</p><p>22-06-07 Follower Feed에서 Following Feed로 변경</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/MycommunityMainFollowNodata' target="_blank">
                                                <span className='text-purple'>Follwing Feed (Tab) - nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/MycommunityMainFollowNodata'>
                                                /community/mycommunity-follow-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-06-03</Table.Cell>
                                        <Table.Cell><p>22-06-07 Follower Feed에서 Following Feed로 변경 및 Nodata화면 추가</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/my-profile/modal-follower' target="_blank">
                                                <span className='text-purple'>커뮤니티 프로파일  &gt; Modal Follower </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-PR-12</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/my-profile/modal-follower'>
                                                /community/my-profile/modal-follower
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>2차 고도화 (유컴패니온) &gt; 운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Community ProfileCard Modal</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/profilecard-playlist' target="_blank">
                                                <span className='text-purple'>Playlist(tab)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/profilecard-playlist'>
                                                /playlist/playlist-popup/profilecard-playlist
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>운영 playlist</span><br /><span>22-01-17 ui변경</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/profilecard-playlist-global' target="_blank">
                                                <span className='text-purple'>Playlist(tab) - (외국인 계정)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/profilecard-playlist-global'>
                                                /playlist/playlist-popup/profilecard-playlist-global
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>운영 playlist</span><br /><span>22-02-17 ui변경</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/profilecard-playlist-nodata' target="_blank">
                                                <span className='text-purple'>Playlist(tab) - (생성하거나 추천받은 플레이리스트가 없을 경우)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-31</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/profilecard-playlist-nodata'>
                                                /playlist/playlist-popup/profilecard-playlist-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/profilecard-playlist-nocard' target="_blank">
                                                <span className='text-purple'>Playlist(tab) - (생성하거나 추천받은 플레이리스트가 없을 경우)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-32</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/profilecard-playlist-nocard'>
                                                /playlist/playlist-popup/profilecard-playlist-nocard
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/profile/modal-popup-com' target="_blank">
                                                <span className='text-purple'>커뮤니티(tab) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-PR-22</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/profile/modal-popup-com'>
                                                /community/profile/modal-popup-com
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>배포완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/profile/modal-popup-com-nodata' target="_blank">
                                                <span className='text-purple'>커뮤니티(tab) Nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-PR-22</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/profile/modal-popup-com-nodata'>
                                                /community/profile/modal-popup-com-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>배포완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/profile/modal-popup-feed' target="_blank">
                                                <span className='text-purple'>Feed(tab) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-PR-23</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/profile/modal-popup-feed'>
                                                /community/profile/modal-popup-feed
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>배포완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/profile/modal-popup-feed-nodata' target="_blank">
                                                <span className='text-purple'>Feed(tab) Nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-PR-23</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/profile/modal-popup-feed-nodata'>
                                                /community/profile/modal-popup-feed-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>배포완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/profile/modal-popup-feed-external' target="_blank">
                                                <span className='text-purple'>Feed(tab) 외부강사용</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-PR-23</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/profile/modal-popup-feed-external'>
                                                /community/profile/modal-popup-feed-external
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티, 피드만 제공</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community/profile/modal-popup-global' target="_blank">
                                                <span className='text-purple'>ProfileCard(다국어 적용) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-PR-21</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community/profile/modal-popup-global'>
                                                /community/profile/modal-popup-global
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>배포완료</Table.Cell>
                                        <Table.Cell>운영(다국어)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>CommunityTemplete Main/Intro</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/main-header' target="_blank">
                                                <span className='text-purple'>CommunityTemplete Header</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-10-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/main-header'>
                                                /community-templete/main-header
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/main-search' target="_blank">
                                                <span className='text-purple'>CommunityTemplete Main Search</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-10-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/main-search'>
                                                /community-templete/main-search
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/main-search-nodata' target="_blank">
                                                <span className='text-purple'>Main Search Nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-10-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/main-search-nodata'>
                                                /community-templete/main-search-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/intro100' target="_blank">
                                                <span className='text-purple'>Intro 100%</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/intro100'>
                                                /community-templete/intro100
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/intro1200' target="_blank">
                                                <span className='text-purple'>Intro 1200px</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/intro1200'>
                                                /community-templete/intro1200
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-a' target="_blank">
                                                <span className='text-purple'>Templete Main - 기본</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-a'>
                                                /community-templete/templete-a
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-b' target="_blank">
                                                <span className='text-purple'>Templete Main - 뉴스/매거진</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-b'>
                                                /community-templete/templete-b
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-c' target="_blank">
                                                <span className='text-purple'>Templete Main - 멀티미디어</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-c'>
                                                /community-templete/templete-c
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>CommunityTemplete - list/detail</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-list-type-01' target="_blank">
                                                <span className='text-purple'>템플릿 - 리스트형 - 890</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-list-type-01'>
                                                /community-templete/templete-sub-list-type-01
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜/장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell><span></span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-list-type-02' target="_blank">
                                                <span className='text-purple'>템플릿 - 리스트형 - 1200</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-list-type-02'>
                                                /community-templete/templete-sub-list-type-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜/장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-search-list-type-01' target="_blank">
                                                <span className='text-purple'>템플릿 - 리스트형 검색결과 - 890</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-search-list-type-01'>
                                                /community-templete/templete-sub-search-list-type-01
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜/장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-search-list-type-02' target="_blank">
                                                <span className='text-purple'>템플릿 - 리스트형 검색결과 - 1200</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-search-list-type-02'>
                                                /community-templete/templete-sub-search-list-type-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜/장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-image-type-01' target="_blank">
                                                <span className='text-purple'>템플릿 - 카드형 - 890</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-image-type-01'>
                                                /community-templete/templete-sub-image-type-01
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜/장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-image-type-02' target="_blank">
                                                <span className='text-purple'>템플릿 - 카드형 - 1200</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-image-type-02'>
                                                /community-templete/templete-sub-image-type-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜/장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-search-image-type-01' target="_blank">
                                                <span className='text-purple'>템플릿 - 카드형 검색결과 - 890</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-search-image-type-01'>
                                                /community-templete/templete-sub-search-image-type-01
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜/장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-search-image-type-02' target="_blank">
                                                <span className='text-purple'>템플릿 - 카드형 검색결과 - 1200</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-search-image-type-02'>
                                                /community-templete/templete-sub-search-image-type-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜/장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-detail-type-01' target="_blank">
                                                <span className='text-purple'>템플릿 - 상세보기 890</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-detail-type-01'>
                                                /community-templete/templete-sub-detail-type-01
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>
                                            <p>22-04-05 중요 등록 기능 추가</p>
                                            <p>22-07-06 이전/다음글 비공개 아이콘추가</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-detail-type-02' target="_blank">
                                                <span className='text-purple'>템플릿 - 상세보기 1200</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-detail-type-02'>
                                                /community-templete/templete-sub-detail-type-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>
                                            <p>22-04-05 중요 등록 기능 추가</p>
                                            <p>22-07-06 이전/다음글 비공개 아이콘추가</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-edit-type-01' target="_blank">
                                                <span className='text-purple'>템플릿 - 글쓰기 기본 890</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-edit-type-01'>
                                                /community-templete/templete-sub-edit-type-01
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-edit-type-02' target="_blank">
                                                <span className='text-purple'>템플릿 - 글쓰기 기본 1200</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-edit-type-02'>
                                                /community-templete/templete-sub-edit-type-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-edit-type-01b' target="_blank">
                                                <span className='text-purple'>템플릿 - 글쓰기 : 말풍선/업로드중  890</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-edit-type-01b'>
                                                /community-templete/templete-sub-edit-type-01b
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-edit-type-02b' target="_blank">
                                                <span className='text-purple'>템플릿 - 글쓰기 : 말풍선/업로드중  1200</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-edit-type-02b'>
                                                /community-templete/templete-sub-edit-type-02b
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-rcm-list-type-01' target="_blank">
                                                <span className='text-purple'>템플릿 - 학습카드 리스트 890</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-40</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-rcm-list-type-01'>
                                                /community-templete/templete-sub-rcm-list-type-01
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-rcm-list-type-02' target="_blank">
                                                <span className='text-purple'>템플릿 - 학습카드 리스트 1200</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-60-40</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-rcm-list-type-02'>
                                                /community-templete/templete-sub-rcm-list-type-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>CommunityTemplete - 커뮤니티 정보 popup &gt; 멤버</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list890-tab1' target="_blank">
                                                <span className='text-purple'>멤버관리 890 - 탭:전체관리</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list890-tab1'>
                                                /community-templete/templete-member-list890-tab1
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list1200-tab1' target="_blank">
                                                <span className='text-purple'>멤버관리 1200 - 탭:전체관리</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list1200-tab1'>
                                                /community-templete/templete-member-list1200-tab1
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list890-tab2' target="_blank">
                                                <span className='text-purple'>멤버관리 890 - 탭:관리자</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-21</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list890-tab2'>
                                                /community-templete/templete-member-list890-tab2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list1200-tab2' target="_blank">
                                                <span className='text-purple'>멤버관리 1200 - 탭:관리자</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-21</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list1200-tab2'>
                                                /community-templete/templete-member-list1200-tab2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list890-tab3' target="_blank">
                                                <span className='text-purple'>멤버관리 890 - 탭:그룹</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-22</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list890-tab3'>
                                                /community-templete/templete-member-list890-tab3
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list1200-tab3' target="_blank">
                                                <span className='text-purple'>멤버관리 1200 - 탭:그룹</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-22</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list1200-tab3'>
                                                /community-templete/templete-member-list1200-tab3
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list890-tab3-nodata' target="_blank">
                                                <span className='text-purple'>멤버관리 890 - 탭:그룹 없을때</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-23</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list890-tab3-nodata'>
                                                /community-templete/templete-member-list890-tab3-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list1200-tab3-nodata' target="_blank">
                                                <span className='text-purple'>멤버관리 1200 - 탭:그룹 없을때</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-23</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list1200-tab3-nodata'>
                                                /community-templete/templete-member-list1200-tab3-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list890-tab4' target="_blank">
                                                <span className='text-purple'>멤버관리 890 - 탭:가입대기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-24</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list890-tab4'>
                                                community-templete/templete-member-list890-tab4
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list1200-tab4' target="_blank">
                                                <span className='text-purple'>멤버관리 1200 - 탭:가입대기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-24</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list1200-tab4'>
                                                /community-templete/templete-member-list1200-tab4
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list890-tab4-nodata' target="_blank">
                                                <span className='text-purple'>멤버관리 890 - 탭:가입대기 - 없을때</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-25</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list890-tab4-nodata'>
                                                /community-templete/templete-member-list890-tab4-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-member-list1200-tab4-nodata' target="_blank">
                                                <span className='text-purple'>멤버관리 1200 - 탭:가입대기 - 없을때</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-25</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-member-list1200-tab4-nodata'>
                                                /community-templete/templete-member-list1200-tab4-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>CommunityTemplete Admin- 템플릿 관리(tab)</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-list' target="_blank">
                                                <span className='text-purple'>템플릿 관리 &gt; 디자인 보관함</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-30-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-list'>
                                                /admin/admin-templete-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-list-popup' target="_blank">
                                                <span className='text-purple'>템플릿 관리 &gt; 디자인 보관함 - 디자인명 수정 - 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-30-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-list-popup'>
                                                /admin/admin-templete-list-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-add-a' target="_blank">
                                                <span className='text-purple'>템플릿 관리 &gt; 디자인 보관함 &gt; 템플릿 추가 - 기본선택시</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-30-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-add-a'>
                                                /admin/admin-templete-add-a
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-add-b' target="_blank">
                                                <span className='text-purple'>템플릿 관리 &gt; 디자인 보관함 &gt; 템플릿 추가 - 뉴스/매거진선택시</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-30-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-add-b'>
                                                /admin/admin-templete-add-b
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-add-c' target="_blank">
                                                <span className='text-purple'>템플릿 관리 &gt; 디자인 보관함 &gt; 템플릿 추가 - 멀티미디어선택시</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-30-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-add-c'>
                                                /admin/admin-templete-add-c
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit' target="_blank">
                                                <span className='text-purple'>템플릿관리 - 디자인 수정 - 기본</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-40-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit'>
                                                /admin/admin-templete-edit
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-preview' target="_blank">
                                                <span className='text-purple'>템플릿관리 - 디자인 수정 - 기본 미리보기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-40-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-preview'>
                                                /admin/admin-templete-edit-preview
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-b' target="_blank">
                                                <span className='text-purple'>템플릿관리 - 디자인 수정 - 뉴스/매거진</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-40-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-b'>
                                                /admin/admin-templete-edit-b
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-preview-b' target="_blank">
                                                <span className='text-purple'>템플릿관리 - 디자인 수정 - 뉴스/매거진 미리보기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-40-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-preview-b'>
                                                /admin/admin-templete-edit-preview-b
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-c' target="_blank">
                                                <span className='text-purple'>템플릿관리 - 디자인 수정 - 멀티미디어</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-40-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-c'>
                                                /admin/admin-templete-edit-c
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-preview-c' target="_blank">
                                                <span className='text-purple'>템플릿관리 - 디자인 수정 - 멀티미디어 미리보기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-40-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-preview-c'>
                                                /admin/admin-templete-edit-preview-c
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>CommunityTemplete Admin - 템플릿 관리(tab) &gt; 디자인 추가/수정 &gt; 편집팝업</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp1010' target="_blank">
                                                <span className='text-purple'>*공통* 컴포넌트(컴) 선택</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-10-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp1010'>
                                                /admin/admin-templete-edit-pop-cp1010
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-img-slide' target="_blank">
                                                <span className='text-purple'>(컴)이미지 - (스)슬라이드 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-40-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-img-slide'>
                                                /admin/admin-templete-edit-pop-cp2010-img-slide
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-img-grid' target="_blank">
                                                <span className='text-purple'>(컴)이미지 - (스)그리드 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-40-11</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-img-grid'>
                                                /admin/admin-templete-edit-pop-cp2010-img-grid
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-img-slide' target="_blank">
                                                <span className='text-purple'>(컴)이미지 - (스)슬라이드 - (컨) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-40-12</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-img-slide'>
                                                /admin/admin-templete-edit-pop-cp3010-img-slide
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-img-grid' target="_blank">
                                                <span className='text-purple'>(컴)이미지 - (스)그리드 - (컨) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-40-13</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-img-grid'>
                                                /admin/admin-templete-edit-pop-cp3010-img-grid
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-board' target="_blank">
                                                <span className='text-purple'>(컴)게시판 - (스)텍스트</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-50-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-board'>
                                                /admin/admin-templete-edit-pop-cp2010-board
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-board-img-txt' target="_blank">
                                                <span className='text-purple'>(컴)게시판 - (스)이미지텍스트</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-60-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-board-img-txt'>
                                                /admin/admin-templete-edit-pop-cp2010-board-img-txt
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-board' target="_blank">
                                                <span className='text-purple'>(컴)게시판 - (스) - (컨)게시판</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-60-13</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-board'>
                                                /admin/admin-templete-edit-pop-cp3010-board
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-board-post' target="_blank">
                                                <span className='text-purple'>(컴)게시판 - (스) - (컨)게시글</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-60-14</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-board-post'>
                                                /admin/admin-templete-edit-pop-cp3010-board-post
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-board-post2' target="_blank">
                                                <span className='text-purple'>(컴)게시판 - (스) - (컨)게시글</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-60-15</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-board-post2'>
                                                /admin/admin-templete-edit-pop-cp3010-board-post2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-board-post-search' target="_blank">
                                                <span className='text-purple'>(컴)게시판 - (스) - (컨)게시글 : 검색</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-30-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-board-post-search'>
                                                /admin/admin-templete-edit-pop-cp3010-board-post-search
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-board-post-search-result' target="_blank">
                                                <span className='text-purple'>(컴)게시판 - (스) - (컨)게시글 : 검색결과</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-30-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-board-post-search-result'>
                                                /admin/admin-templete-edit-pop-cp3010-board-post-search-result
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-html' target="_blank">
                                                <span className='text-purple'>(컴)HTML - (컨)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-70-11</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-html'>
                                                /admin/admin-templete-edit-pop-cp3010-html
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-video' target="_blank">
                                                <span className='text-purple'>(컴)동영상 - (스)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-80-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-video'>
                                                /admin/admin-templete-edit-pop-cp2010-video
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-video-post' target="_blank">
                                                <span className='text-purple'>(컴)동영상 - (스) - (컨)게시글</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-80-11</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-video-post'>
                                                /admin/admin-templete-edit-pop-cp3010-video-post
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/' target="_blank">
                                                <span className='text-purple'>(컴)동영상 - (스) - (컨)유튜브</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-80-12</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/'>
                                                /admin/admin-templete-edit-pop-cp3010-video-youtube
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-tab' target="_blank">
                                                <span className='text-purple'>(컴)주제분류탭 - (스)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-90-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp2010-tab'>
                                                /admin/admin-templete-edit-pop-cp2010-tab
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-tab' target="_blank">
                                                <span className='text-purple'>(컴)주제분류탭 - (스) - (컨)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CP-90-11</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-tab'>
                                                /admin/admin-templete-edit-pop-cp3010-tab
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-lcard1' target="_blank">
                                                <span className='text-purple'>(컴)학습카드 - (컨)  1</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>SD-10-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-lcard1'>
                                                /admin/admin-templete-edit-pop-cp2010-lcard1
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-lcard2' target="_blank">
                                                <span className='text-purple'>(컴)학습카드 - (컨) 2</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>SD-10-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-lcard2'>
                                                /admin/admin-templete-edit-pop-cp3010-lcard2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-lcard-post-search' target="_blank">
                                                <span className='text-purple'>(컴)학습카드 - (컨)  게시글: 검색</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>SD-10-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-lcard-post-search'>
                                                /admin/admin-templete-edit-pop-cp3010-lcard-post-search
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-lcard-post-search-result' target="_blank">
                                                <span className='text-purple'>(컴)학습카드 - (컨)  게시글: 검색결과</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>SD-10-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-templete-edit-pop-cp3010-lcard-post-search-result'>
                                                /admin/admin-templete-edit-pop-cp3010-lcard-post-search-result
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>CommunityTemplete Admin- 인트로관리(tab)</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-intro-list' target="_blank">
                                                <span className='text-purple'>인트로관리(tab)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>ID-10-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-intro-list'>
                                                /admin/admin-intro-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-intro-list-popup' target="_blank">
                                                <span className='text-purple'>인트로관리(tab) - 팝업(인트로명변경)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>ID-10-11</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-intro-list-popup'>
                                                /admin/admin-intro-list-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-intro-list-nodata' target="_blank">
                                                <span className='text-purple'>인트로관리(tab) - 관리디자인없을떄</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>ID-10-12</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-intro-list-nodata'>
                                                /admin/admin-intro-list-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-intro-add-popup' target="_blank">
                                                <span className='text-purple'>인트로관리(tab) - 인트로추가 popup</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>ID-20-11</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-intro-add-popup'>
                                                /admin/admin-intro-add-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-intro-design1200' target="_blank">
                                                <span className='text-purple'>인트로관리(tab) -컴포넌트 선택 - 1200px사용</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>ID-30-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-intro-design1200'>
                                                /admin/admin-intro-design1200
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-intro-design1200-sample' target="_blank">
                                                <span className='text-purple'>인트로관리(tab) -컴포넌트 선택 - 1200px사용 Sample</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>ID-30-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-intro-design1200-sample'>
                                                /admin/admin-intro-design1200-sample
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-intro-design100' target="_blank">
                                                <span className='text-purple'>인트로관리(tab) - 컴포넌트 선택 - 100%사용</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>ID-30-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-intro-design100'>
                                                /admin/admin-intro-design100
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-intro-design100-sample' target="_blank">
                                                <span className='text-purple'>인트로관리(tab) -컴포넌트 선택 - 100%사용 Sample</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>ID-30-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-intro-design100-sample'>
                                                /admin/admin-intro-design100-sample
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-intro-design-html' target="_blank">
                                                <span className='text-purple'>인트로관리(tab) -컴포넌트 선택 - 글쓰기 HTML</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>ID-40-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-intro-design-html'>
                                                /admin/admin-intro-design-html
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Community Admin - 멤버관리(tab)</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-member-list' target="_blank">
                                                <span className='text-purple'>멤버관리(tab)  &gt; 멤버(tab) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-ME-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-member-list'>
                                                /admin/admin-member-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-member-alert-popup' target="_blank">
                                                <span className='text-green'>멤버 관리(tab)  &gt; 멤버 (팝업)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-ME-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-member-alert-popup'>
                                                /admin/admin-member-alert-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-member-alert-popup-reject' target="_blank">
                                                <span className='text-purple'>멤버관리(tab)  &gt; 멤버 (팝업)  &gt; 반려 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-ME-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-member-alert-popup-reject'>
                                                /admin/admin-member-alert-popup-reject
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-member-list-nodata' target="_blank">
                                                <span className='text-green'>멤버관리(tab) &gt; 멤버 (커뮤니티에 멤버가 없을 경우)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-ME-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-member-list-nodata'>
                                                /admin/admin-member-list-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-member-holding-list' target="_blank">
                                                <span className='text-purple'>멤버관리(tab)  &gt; 가입 대기(tab)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-AP-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-member-holding-list'>
                                                /admin/admin-member-holding-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-member-holding-list-nodata' target="_blank">
                                                <span className='text-green'>멤버관리(tab)  &gt; 가입 대기 (가입 대기가 없을 경우)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-AP-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-member-holding-list-nodata'>
                                                /admin/admin-member-holding-list-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-member-registration' target="_blank">
                                                <span className='text-green'>멤버관리(tab) &gt; 멤버 일괄 등록(tab)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-AP-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-member-registration'>
                                                /admin/admin-member-registration
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-group-list' target="_blank">
                                                <span className='text-green'>멤버관리(tab) &gt; 그룹(tab)  &gt; list</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-GR-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-group-list'>
                                                /admin/admin-group-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-group-list-nodata' target="_blank">
                                                <span className='text-green'>멤버관리(tab) &gt; 그룹(tab) &gt; list (그룹이 없을 경우)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-GR-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-group-list-nodata'>
                                                /admin/admin-group-list-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-group-create' target="_blank">
                                                <span className='text-green'>멤버관리(tab) &gt; 그룹(tab)  &gt; Create</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-GR-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-group-create'>
                                                /admin/admin-group-create
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-group-alert-popup' target="_blank">
                                                <span className='text-green'>멤버관리(tab) &gt; 그룹(tab) &gt; Create (팝업)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-GR-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-group-alert-popup'>
                                                /admin/admin-group-alert-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-group-detail-list' target="_blank">
                                                <span className='text-green'>멤버관리(tab) &gt; 그룹(tab) &gt; Detail</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-GR-40</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-group-detail-list'>
                                                /admin/admin-group-detail-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-group-detail-list-nodata' target="_blank">
                                                <span className='text-green'>멤버관리(tab) &gt; 그룹(tab) &gt; Detail  &gt; 그룹 멤버가 없을 경우</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-GR-60</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-group-detail-list-nodata'>
                                                /admin/admin-group-detail-list-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-member-group-add' target="_blank">
                                                <span className='text-green'>멤버관리(tab) &gt; 그룹(tab) &gt; Detail  &gt; [그룹 멤버 추가] 버튼 선택 시</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-GR-50</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-member-group-add'>
                                                /admin/admin-member-group-add
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Community Admin - 메뉴관리(tab)</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/menu-default-add-list' target="_blank">
                                                <span className='text-purple'>메뉴관리 &gt; 목록 타입 선택 개발</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-50-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/menu-default-add-list'>
                                                /admin/menu-default-add-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>김영혜</Table.Cell>
                                        <Table.Cell>완료</Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/menu-default' target="_blank">
                                                <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 추가</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-ME-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/menu-default'>
                                                /admin/menu-default
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/menu-default-add' target="_blank">
                                                <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-ME-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/menu-default-add'>
                                                /admin/menu-default-add
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/menu-default-add-category' target="_blank">
                                                <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형 - 카테고리</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-ME-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/menu-default-add-category'>
                                                /admin/menu-default-add-category
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/menu-default-add-discussion' target="_blank">
                                                <span className='text-purple'>메뉴 관리(tab) &gt; 메뉴 유형 - 토론게시판</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-ME-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/menu-default-add-discussion'>
                                                /admin/menu-default-add-discussion
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/menu-default-add-survey' target="_blank">
                                                <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형 - survey</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-ME-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/menu-default-add-survey'>
                                                /admin/menu-default-add-survey
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/menu-default-add-survey-popup' target="_blank">
                                                <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형 - survey popup</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-ME-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/menu-default-add-surveypopup'>
                                                /admin/menu-default-add-surveypopup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/menu-default-add-link' target="_blank">
                                                <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형 - link</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-ME-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/menu-default-add-link'>
                                                /admin/menu-default-add-link
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/menu-default-add-html' target="_blank">
                                                <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형 - html</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-MA-ME-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/menu-default-add-html'>
                                                /admin/menu-default-add-html
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Community Admin - 통계(tab)</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-community-chart-visit-default' target="_blank">
                                                <span className='text-purple'>통계(tab) &gt; 방문수(tab) 검색전 (NEW)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-ST-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-community-chart-visit-default'>
                                                /admin/admin-community-chart-visit-default
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-07-15 배포완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-community-chart-visit' target="_blank">
                                                <span className='text-purple'>통계(tab) &gt; 방문수(tab) &gt; 통계 방문수 (NEW)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-ST-11</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-community-chart-visit'>
                                                /admin/admin-community-chart-visit
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-07-15 배포완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-community-chart-visit-3m' target="_blank">
                                                <span className='text-purple'>통계(tab) &gt; 방문수(tab) - 3개월 선택시(NEW)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-ST-12</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-community-chart-visit-3m'>
                                                /admin/admin-community-chart-visit-3m
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-07-15 배포완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-community-chart-member-default' target="_blank">
                                                <span className='text-purple'>통계(tab) &gt; 멤버(tab) - 검색전(NEW)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-ST-40</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-community-chart-member-default'>
                                                /admin/admin-community-chart-member-default
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-07-15 배포완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/admin/admin-community-chart-member' target="_blank">
                                                <span className='text-purple'>커뮤니티 관리  &gt; 홈 관리  &gt; 통계 멤버 (NEW)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-MA-ST-41</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/admin/admin-community-chart-member'>
                                                /admin/admin-community-chart-member
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-07-15 배포완료</Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                </>{/* //커뮤니티 */}
                                <>{/* @@My Learning */}
                                <Table.Row verticalAlign='top' id="MyLearning">
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>My Learning</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/my-learning-detail-inprogress-note' target="_blank">
                                                <span className='text-purple'>학습중 List(In progress)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'> ML-02-02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/my-learning-detail-inprogress-note'>
                                                /learning/my-learning-detail-inprogress-note
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>21-11-01 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/in-mylist-playlist' target="_blank">
                                                <span className='text-purple'>찜한 과정 List(InMyList)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/in-mylist-playlist'>
                                                /playlist/in-mylist-playlist
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-01 운영 playlist버튼 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/my-learning-detail-required' target="_blank">
                                                <span className='text-blue'>핵인싸 과정 List(Required)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>ML-02-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/my-learning-detail-required'>
                                                /learning/my-learning-detail-required
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/my-learning-detail-enrolled' target="_blank">
                                                <span className='text-blue'>학습예정 List(Enrolled)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>ML-02-04</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/my-learning-detail-enrolled'>
                                                /learning/my-learning-detail-enrolled
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/my-learning-detail-completed' target="_blank">
                                                <span className='text-blue'>mySUNI 학습완료 List(Completed)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'> ML-02-06</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/my-learning-detail-completed'>
                                                /learning/my-learning-detail-completed
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-08-10</Table.Cell>
                                        <Table.Cell>
                                            <p>20-22-02 현행화</p>
                                            <p>22-08-16 수료증 추가</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/my-learning-detail-aplcompleted' target="_blank">
                                                <span className='text-blue'>개인학습 완료 List(APLCompleted)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>ML-02-09</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/my-learning-detail-aplcompleted'>
                                                /learning/my-learning-detail-aplcompleted
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>0623</Table.Cell>
                                        <Table.Cell><span>0623 추가</span><br /><span>20-22-02현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/my-learning-detail-apldetail' target="_blank">
                                                <span className='text-blue'>개인학습 완료 List(APLCompleted)  &gt; detail</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>ML-02-09-03</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/my-learning-detail-apldetail'>
                                                /learning/my-learning-detail-apldetail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>0623</Table.Cell>
                                        <Table.Cell><span>0623 추가</span><br /><span>20-22-02현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/my-learning-detail-retry' target="_blank">
                                                <span className='text-blue'>취소/미이수(Retry)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>ML-02-08</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/my-learning-detail-retry'>
                                                /learning/my-learning-detail-retry
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/my-learning-detail-common-new' target="_blank">
                                                <span className='text-purple'>List Nodata 공통</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PB-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/my-learning-detail-common-new'>
                                                /learning/my-learning-detail-common-new
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>3차 고도화 (유컴패니온)</span><span>2022 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/learning-approver-appointment-modal' target="_blank">
                                                <span className='text-blue'>Home  &gt; Learnig Detail  &gt; 승인자 설정 Popup</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>ML-05-P08</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/learning-approver-appointment-modal'>
                                                /learning/learning-approver-appointment-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-05-07</Table.Cell>
                                        <Table.Cell><span className="text-grey">20-05-07 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/learning-detail-linkedin-modal' target="_blank">
                                                <span
                                                    className='text-red'>Home  &gt; Learning Card  &gt; Detail (LinkedIn 안내)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>ML-05-P05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/learning-detail-linkedin-modal'>
                                                /learning/learning-detail-linkedin-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>2차 고도화 (유컴패니온)</span><br /><span>20-22-02현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/learning-detail-coursera-modal' target="_blank">
                                                <span
                                                    className='text-red'>Home  &gt; Learning Card  &gt; Detail (coursera 안내)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>ML-05-P05_Coursera</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/learning-detail-coursera-modal'>
                                                /learning/learning-detail-coursera-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>22-05-12</span></Table.Cell>
                                    </Table.Row>
                                </>{/* //My Learning */}
                                <>{/* @@학습과정 */}
                                    <Table.Row verticalAlign='top' id='Learning'>
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>학습과정</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* @@학습과정 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 샘플/템플릿</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/sample/note-sample' target="_blank">
                                                <span className='text-purple'>Note Sample </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/sample/note-sample'>
                                                /sample/note-sample
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/sample/card-sample' target="_blank">
                                                <span className='text-purple'>Card Sample</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-004</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/sample/card-sample'>
                                                /sample/card-sample
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-temp' target="_blank">
                                                <span className='text-purple'>카드 Overview Template</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>REQ-004</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-temp'>
                                                /learning/card-overview-temp
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-overview-temp' target="_blank">
                                                <span className='text-purple'>단독 큐브 Overview Template</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>REQ-004</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-overview-temp'>
                                                /learning/single-overview-temp
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-overview-temp' target="_blank">
                                                <span className='text-purple'>유형별 큐브 Overview Template</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>REQ-004</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-overview-temp'>
                                                /learning/cube-overview-temp
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 Overview</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-always' target="_blank">
                                                <span className='text-purple'>Card Overview 상시형</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-005</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-always'>
                                                /learning/card-overview-always
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-always-fail' target="_blank">
                                                <span className='text-purple'>Card Overview 상시형 (미이수)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-005</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-always-fail'>
                                                /learning/card-overview-always-fail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-preiod' target="_blank">
                                                <span className='text-purple'>Card Overview 기간형</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-006</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-preiod'>
                                                /learning/card-overview-preiod
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-09</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-preiod-02' target="_blank">
                                                <span className='text-purple'>Card Overview 기간형 (과정 포함)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-006</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-preiod-02'>
                                                /learning/card-overview-preiod-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-09</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-live' target="_blank">
                                                <span className='text-purple'>Card Overview 라이브형</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-007</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-live'>
                                                /learning/card-overview-live
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-10</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-inquery-modal' target="_blank">
                                                <span className='text-purple'>Card Overview 문의하기 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-007</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-inquery-modal'>
                                                /learning/card-overview-inquery-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-10</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/card-overview-inquery-modal-error' target="_blank">
                                                <span className='text-purple'>Card Overview 문의하기 팝업(필수입력)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-007</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/card-overview-inquery-modal-error'>
                                                /learning/card-overview-inquery-modal-error
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-10</Table.Cell>
                                        <Table.Cell>
                                            <p>날짜미정 Cube/Card UI 개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Video</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video' target="_blank">
                                                <span className='text-purple'>Video</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>REQ-009</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video'>
                                                /learning/cube-video
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-video' target="_blank">
                                                <span className='text-purple'>Video (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>REQ-009</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-video'>
                                                /learning/single-video
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-04</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>교육유형 : Video &gt; 퀴즈</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz popup</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-61</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz'>
                                                /learning/cube-video-quiz
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-defaut' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz(default)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-62</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-defaut'>
                                                /learning/cube-video-quiz-defaut
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-01-single' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz 01(Single)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-61</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-01-single'>
                                                /learning/cube-video-quiz-01-single
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-image-zoom' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz 02(ImageZoom)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-62</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-image-zoom'>
                                                /learning/cube-video-quiz-image-zoom
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-03-short' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz 03(Short)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-63</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-03-short'>
                                                /learning/cube-video-quiz-03-short
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-04-descriptive' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz 04(Descriptive)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-64</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-04-descriptive'>
                                                /learning/cube-video-quiz-04-descriptive
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-05-result-survey' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz 05(Result Survey)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-73</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-05-result-survey'>
                                                /learning/cube-video-quiz-05-result-survey
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-wrong' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz(오답의 경우)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-72</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-wrong'>
                                                /learning/cube-video-quizWrong
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-answer-ok' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz(답안 제출 완료)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-74</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-answer-ok'>
                                                /learning/cube-video-quizAnswerOk
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-finish' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz(참여 완료)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-76</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-finish'>
                                                /learning/cube-video-quizFinish
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-sample' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz(다음 영상 안내)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-76</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-sample'>
                                                /learning/cube-video-quizSample
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-description' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz(다른 사람 의견 보기)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-75</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-description'>
                                                /learning/cube-video-quizDescription
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-video-quiz-alert-close' target="_blank">
                                                <span className='text-purple'>Video &gt; Quiz(퀴즈풀고 이어보기 화면)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>C1-12-71</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-video-quiz-alert-close'>
                                                /learning/cube-video-quiz-alert-close
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Audio</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-audio' target="_blank">
                                                <span className='text-purple'>Audio</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-orange'>REQ-010</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-audio'>
                                                /learning/cube-audio
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-audio' target="_blank">
                                                <span className='text-purple'>Audio (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-orange'>REQ-010</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-audio'>
                                                /learning/single-audio
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Document</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* 2020-10-15 LM-DO-10 추가*/}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-document' target="_blank">
                                                <span className='text-purple'>Document</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-orange'>LM-DO-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-document'>
                                                /learning/cube-document
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-document' target="_blank">
                                                <span className='text-purple'>Document (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-orange'>LM-DO-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-document'>
                                                /learning/single-document
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Assignment</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment' target="_blank">
                                                <span className='text-purple'>Assignment Post 목록</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment'>
                                                /learning/cube-assignment
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-post-nodata' target="_blank">
                                                <span className='text-purple'>Assignment Post 목록 (데이터 없을시)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-post-nodata'>
                                                /learning/cube-assignment-post-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-post-empty' target="_blank">
                                                <span className='text-purple'>Assignment Post 목록 (검색결과 없을시)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-post-empty'>
                                                /learning/cube-assignment-post-empty
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-post-write' target="_blank">
                                                <span className='text-purple'>Assignment Post 등록 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-post-write'>
                                                /learning/cube-assignment-post-write
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-post-detail' target="_blank">
                                                <span className='text-purple'>Assignment Post 상세 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-post-detail'>
                                                /learning/cube-assignment-post-detail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-report-write' target="_blank">
                                                <span className='text-purple'>Assignment Report (작성전)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-report-write'>
                                                /learning/cube-assignment-report-write
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-report-grading' target="_blank">
                                                <span className='text-purple'>Assignment Report (채점중)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-report-grading'>
                                                /learning/cube-assignment-report-grading
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-report-fail' target="_blank">
                                                <span className='text-purple'>Assignment Report (불합격)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-report-fail'>
                                                /learning/cube-assignment-report-fail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-assignment-report-pass' target="_blank">
                                                <span className='text-purple'>Assignment Report (합격)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-assignment-report-pass'>
                                                /learning/cube-assignment-report-pass
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-assignment' target="_blank">
                                                <span className='text-purple'>Assignment (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-RE-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-assignment'>
                                                /learning/single-assignment
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-14</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Discussion</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-discussion' target="_blank">
                                                <span className='text-purple'>Discussion</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-DI-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-discussion'>
                                                /learning/cube-discussion
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-discussion-nodata' target="_blank">
                                                <span className='text-purple'>Discussion (Nodata)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-DI-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-discussion-nodata'>
                                                /learning/cube-discussion-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-discussion' target="_blank">
                                                <span className='text-purple'>Discussion (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-DI-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-discussion'>
                                                /learning/single-discussion
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Webpage</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-webpage' target="_blank">
                                                <span className='text-purple'>Webpage</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-webpage'>
                                                /learning/cube-webpage
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-webpage' target="_blank">
                                                <span className='text-purple'>Webpage (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-webpage'>
                                                /learning/single-webpage
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-webpage-embed' target="_blank">
                                                <span className='text-purple'>Webpage (embedded)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-webpage-embed'>
                                                /learning/cube-webpage-embed
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-webpage-embed' target="_blank">
                                                <span className='text-purple'>Webpage (embedded)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-webpage-embed'>
                                                /learning/single-webpage-embed
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-webpage-coursera' target="_blank">
                                                <span className='text-purple'>Webpage (외부교육)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-webpage-coursera'>
                                                /learning/cube-webpage-coursera
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Class</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-class' target="_blank">
                                                <span className='text-purple'>Class 학습중</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-EC-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-class'>
                                                /learning/cube-class
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-08</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-class-absence' target="_blank">
                                                <span className='text-purple'>Class 불참</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-EC-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-class-absence'>
                                                /learning/cube-class-absence
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-08</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-class' target="_blank">
                                                <span className='text-purple'>Class (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-EC-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-class'>
                                                /learning/single-class
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-08</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-class-absence' target="_blank">
                                                <span className='text-purple'>Class - 불참/미이수</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-class-absence'>
                                                /learning/cube-class-absence
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-22</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-class-enrolment-modal' target="_blank">
                                                <span className='text-purple'>Class (단일큐브) - 수강신청</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>IN-02-01</span>)<br/> */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-class-enrolment-modal'>
                                                /learning/single-class-enrolment-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-08</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Live</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-live' target="_blank">
                                                <span className='text-purple'>Live</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-live'>
                                                /learning/cube-live
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-live-popup' target="_blank">
                                                <span className='text-purple'>Live 알림팝업 신청하기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-live-popup'>
                                                /learning/cube-live-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-live-popup02' target="_blank">
                                                <span className='text-purple'>Live 알림팝업 신청취소</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-live-popup02'>
                                                /learning/cube-live-popup02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-live' target="_blank">
                                                <span className='text-purple'>Live (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-live'>
                                                /learning/single-live
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-11</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : TEST</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test' target="_blank">
                                                <span className='text-purple'>TEST 응시하기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test'>
                                                /learning/cube-test
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-02' target="_blank">
                                                <span className='text-purple'>TEST 응시하기 (응시 제한없음)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-02'>
                                                /learning/cube-test-02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-text' target="_blank">
                                                <span className='text-purple'>TEST 응시중 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-text'>
                                                /learning/cube-test-text
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-complete' target="_blank">
                                                <span className='text-purple'>TEST 채점결과 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-complete'>
                                                /learning/cube-test-complete
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-pass' target="_blank">
                                                <span className='text-purple'>TEST 응시완료 (이수)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-pass'>
                                                /learning/cube-test-pass
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-fail' target="_blank">
                                                <span className='text-purple'>TEST 응시완료 (미이수)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-fail'>
                                                /learning/cube-test-fail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-test-confirm' target="_blank">
                                                <span className='text-purple'>TEST 응시완료 (채점중)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-test-confirm'>
                                                /learning/cube-test-confirm
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-test' target="_blank">
                                                <span className='text-purple'>TEST (단일큐브) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-TE-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-test'>
                                                /learning/single-test
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Talk</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-talk' target="_blank">
                                                <span className='text-purple'>Talk</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>LM-RE-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-talk'>
                                                /learning/cube-talk
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 : Survey</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* 2020-10-15 LM-SU-10 추가*/}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey' target="_blank">
                                                <span className='text-purple'>Survey</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-SU-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey'>
                                                /learning/cube-survey
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey-basic' target="_blank">
                                                <span className='text-purple'>Survey 진행 (일반) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-SU-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey-basic'>
                                                /learning/cube-survey-basic
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey-core' target="_blank">
                                                <span className='text-purple'>Survey 과정평가 (필수만족도) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-SU-05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey-core'>
                                                /learning/cube-survey-core
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey-chart-core' target="_blank">
                                                <span className='text-purple'>Survey 과정평가 결과 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'></span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey-chart-core'>
                                                /learning/cube-survey-chart-core
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey-complete' target="_blank">
                                                <span className='text-purple'>Survey 응시 참여완료</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>LM-SU-15</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey-complete'>
                                                /learning/cube-survey-complete
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-survey-done' target="_blank">
                                                <span className='text-purple'>Survey 재진입 응답완료</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-SU-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-survey-done'>
                                                /learning/cube-survey-done
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/single-survey' target="_blank">
                                                <span className='text-purple'>Survey (단일큐브)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-SU-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/single-survey'>
                                                /learning/single-survey
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-11-18</Table.Cell>
                                        <Table.Cell>
                                            <p>23-02-04 Card/Cube 구조개선</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>학습과정 교육유형 - Blended Chapter</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-blendedchapter' target="_blank">
                                                <span className='text-purple'>Blended Chapter</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-blendedchapter'>
                                                /learning/cube-blendedchapter
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-10</Table.Cell>
                                        <Table.Cell>22-09-20 Blended 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-blendedchapter-case2' target="_blank">
                                                <span className='text-purple'>Blended Chapter Case2</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-blendedchapter-case2'>
                                                /learning/cube-blendedchapter-case2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-16</Table.Cell>
                                        <Table.Cell>22-09-20 Blended 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-blendedchapter-case3' target="_blank">
                                                <span className='text-purple'>Blended Chapter Case3</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-blendedchapter-case3'>
                                                /learning/cube-blendedchapter-case3
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-10-13</Table.Cell>
                                        <Table.Cell>22-09-20 Blended 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-blendedchapter-quiz' target="_blank">
                                                <span className='text-purple'>Blended Chapter Video quiz</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-blendedchapter-quiz'>
                                                /learning/cube-blendedchapter-quiz
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-16</Table.Cell>
                                        <Table.Cell>22-09-20 Blended 추가</Table.Cell>
                                    </Table.Row>
                                    {/* @@학습과정 */}
                                </>{/* //학습과정 */}
                                <>{/* @@검색 */}
                                    <Table.Row verticalAlign='top' id='Search'>
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>검색</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='searchTotal/search-result-new' target="_blank">
                                                <span className='text-purple'>통합 검색 전체 결과 - 검색옵션 &gt; 교육일정 &gt; [달력] 선택후  </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>SE-20-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/searchTotal/search-result-new'>
                                                /searchTotal/search-result-new
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>20-21-11 UI/UX 개선</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='searchTotal/search-result-new-suggest' target="_blank">
                                                <span className='text-purple'>통합 검색 전체 결과 - (ex:오타) 제안단어로 검색</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>SE-20-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/searchTotal/search-result-new-suggest'>
                                                /searchTotal/search-result-new-suggest
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>20-21-10 퍼블완료</Table.Cell>
                                        <Table.Cell>20-21-11 UI/UX 개선</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='searchTotal/search-result-new-re' target="_blank">
                                                <span className='text-purple'>통합 검색 결과 내 재검색 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>SE-20-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/searchTotal/search-result-new-re'>
                                                /searchTotal/search-result-new-re
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>20-21-10 퍼블완료</Table.Cell>
                                        <Table.Cell>20-21-11 UI/UX 개선</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='searchTotal/search-result-nodata' target="_blank">
                                                <span className='text-purple'>통합 검색 결과가 없는 경우 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>SE-20-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/searchTotal/search-result-nodata'>
                                                /searchTotal/search-result-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>20-21-10 퍼블완료</Table.Cell>
                                        <Table.Cell>20-21-11 UI/UX 개선</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='searchTotal/search-result-badge-new' target="_blank">
                                                <span className='text-purple'>통합 검색 - Badge tab </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='searchTotal/search-result-badge-new'>
                                                searchTotal/search-result-badge-new
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>20-21-11 UI/UX 개선</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                </>{/* //검색 */}
                                <>{/* @@MyPage */}
                                    <Table.Row verticalAlign='top' id="MyPage">
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>My Page</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* @MyPage */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>MyPage &gt; 나의 학습 현황</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-dashboard' target="_blank">
                                                <span className='text-purple'>나의 학습 현황</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-dashboard'>
                                                /mypage/my-page-lnb-dashboard
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/learning-time-detail-modal' target="_blank">
                                                <span className='text-purple'>학습 이수 시간 상세보기 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>MY-01-01-P03, MY-01-01-P03-case2, MY-01-01-P03-case3</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/learning-time-detail-modal'>
                                                /mypage/learning-time-detail-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-01-19</Table.Cell>
                                        <Table.Cell><span>0630 UI 및 데이터 변경</span><br /><span>22-01-19 복습시간 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>MyPage &gt; My Badge</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-profile-my-badge-v4' target="_blank">
                                                <span className='text-purple'>MyBadge List</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>[LNB_B]_My Page_01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-profile-my-badge-v4'>
                                                /mypage/my-page-lnb-profile-my-badge-v4
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>20-21-12 수정</p><p>21-12-03 퍼블완료</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-profile-my-badge-nodata-v3' target="_blank">
                                                <span className='text-purple'>MyBadge List Nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-profile-my-badge-nodata-v3' target='_blank'>
                                                /mypage/my-page-lnb-profile-my-badge-nodata-v3
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-12-03 퍼블완료</Table.Cell>
                                        <Table.Cell>20-21-12 수정</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>MyPage &gt; My Stamp</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-profile-my-stamp-v3' target="_blank">
                                                <span className='text-purple'>My Stamp List</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>[LNB_A]_My Page_03_Stamp</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-profile-my-stamp-v3'>
                                                /mypage/my-page-lnb-profile-my-stamp-v3
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-12-03 퍼블완료</Table.Cell>
                                        <Table.Cell>20-21-12 수정</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-profile-my-stamp-nodata-v3' target="_blank">
                                                <span className='text-purple'>My Stamp List Nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-profile-my-stamp-nodata-v3'>
                                                /mypage/my-page-lnb-profile-my-stamp-nodata-v3
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-12-03 퍼블완료</Table.Cell>
                                        <Table.Cell>20-21-12 수정</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>MyPage &gt; Note</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-note-all-v3' target="_blank">
                                                <span className='text-purple'>Note 모아보기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>[LNB_A]_My Page_04_Note</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-note-all-v3'>
                                                /mypage/my-page-lnb-note-all-v3
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-12-03 퍼블완료</Table.Cell>
                                        <Table.Cell>20-21-12 수정</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-note-folder-v3' target="_blank">
                                                <span className='text-purple'>Note 폴더보기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-note-folder-v3'>
                                                /mypage/my-page-lnb-note-folder-v3
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-12-06 퍼블완료</Table.Cell>
                                        <Table.Cell>20-21-12 수정</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>MyPage &gt; PlayList</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-playlist-list' target="_blank">
                                                <span className='text-purple'>PlayList List</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-40</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-playlist-list'>
                                                /mypage/my-page-lnb-playlist-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 버튼추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-playlist-list-nodata' target="_blank">
                                                <span className='text-purple'>Playlist List(생성하거나 추천받은 플레이리스트가 없을 경우)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-41</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-playlist-list-nodata' >
                                                /mypage/my-page-lnb-playlist-list-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 버튼추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-playlist-detail-mylist' target="_blank">
                                                <span className='text-purple'>Playlist &gt; Detail(내가만든 리스트)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-44</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-playlist-detail-mylist' >
                                                /mypage/my-page-lnb-playlist-detail-mylist
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>
                                            <p>22-01-17 공유하기 버튼변경</p>
                                            <p>22-04-05 전체 둘러보기 - 우측상단버튼</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-playlist-detail-mylist-nodata' target="_blank">
                                                <span className='text-purple'>Playlist &gt; Detail(내가만든 리스트) - 과정추가 전</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-45</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-playlist-detail-mylist-nodata' >
                                                /mypage/my-page-lnb-playlist-detail-mylist-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-playlist-detail-modify-mylist' target="_blank">
                                                <span className='text-purple'>Playlist &gt; Detail(내가만든 리스트) &gt; 편집하기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-57</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-playlist-detail-modify-mylist' >
                                                /mypage/my-page-lnb-playlist-detail-modify-mylist
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-playlist-comment-mylist' target="_blank">
                                                <span className='text-purple'>Playlist &gt; Comment(내가만든 리스트)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-46</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-playlist-comment-mylist' >
                                                /mypage/my-page-lnb-playlist-comment-mylist
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-playlist-comment-mylist-nodata' target="_blank">
                                                <span className='text-purple'>Playlist &gt; Comment(내가만든 리스트) - 데이터 없을 때</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-47</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-playlist-comment-mylist-nodata' >
                                                /mypage/my-page-lnb-playlist-comment-mylist-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-playlist-detail-recommended' target="_blank">
                                                <span className='text-purple'>Playlist &gt; Detail (추천받은 리스트) </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-48</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-playlist-detail-recommended' >
                                                /mypage/my-page-lnb-playlist-detail-recommended
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-playlist-detail-like' target="_blank">
                                                <span className='text-purple'>Playlist &gt; Detail(내가담은 리스트)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-49</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-playlist-detail-like' >
                                                /mypage/my-page-lnb-playlist-detail-like
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>MyPage &gt; 프로필설정</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-page-lnb-profile-edit-v3' target="_blank">
                                                <span className='text-purple'>프로필설정</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>[LNB_B]_My Page_02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-page-lnb-profile-edit-v3'>
                                                /mypage/my-page-lnb-profile-edit-v3
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-12-03 퍼블완료</Table.Cell>
                                        <Table.Cell>20-21-12 수정</Table.Cell>
                                    </Table.Row>
                                    {/* @Playlist */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>PlayList</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-list-all' target="_blank">
                                                <span className='text-purple'>PlayList 전체 둘러보기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PL-CA-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-list-all'>
                                                /playlist/playlist-list-all
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-list-all-noData' target="_blank">
                                                <span className='text-purple'>PlayList 전체 둘러보기(목록없음)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PL-CA-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-list-all-noData'>
                                                /playlist/playlist-list-all-noData
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-detail-otherlist' target="_blank">
                                                <span className='text-purple'>PlayList 타인의 리스트</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PL-DE-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-detail-otherlist'>
                                                /playlist/playlist-detail-otherlist
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-detail-mylist' target="_blank">
                                                <span className='text-purple'>PlayList 내가만든 리스트</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PL-DE-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-detail-mylist'>
                                                /playlist/playlist-detail-mylist
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-detail-savelist' target="_blank">
                                                <span className='text-purple'>PlayList 내가담은 리스트</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PL-DE-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-detail-savelist'>
                                                /playlist/playlist-detail-savelist
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-detail-savelist' target="_blank">
                                                <span className='text-purple'>PlayList 추천받은 리스트</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PL-DE-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-detail-reclist'>
                                                /playlist/playlist-detail-reclist
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-03-07</Table.Cell>
                                        <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/create-playlist-popup' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 플레이리스트 만들기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-42</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/create-playlist-popup'>
                                                /playlist/playlist-popup/create-playlist-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/create-playlist-popup-error' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 플레이리스트 만들기 글자수 초과</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/create-playlist-popup-error'>
                                                /playlist/playlist-popup/create-playlist-popup-error
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/add-playlist-popup' target="_blank">
                                                <span className='text-purple'>Card Overview &gt; 플레이리스트 추가</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-11</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/add-playlist-popup'>
                                                /playlist/playlist-popup/add-playlist-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/add-playlist-popup-nodata' target="_blank">
                                                <span className='text-purple'>Card Overview &gt; 플레이리스트 추가(생성한 플레이리스트가 없을 경우) &amp; 입력한 플레이리스트 명이 길경우</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-14</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/add-playlist-popup-nodata'>
                                                /playlist/playlist-popup/add-playlist-popup-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/modal-select-card' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 플레이리스트 만들기 &gt; Card 선택 </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-43</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/modal-select-card'>
                                                /playlist/playlist-popup/modal-select-card
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-userlist-popup01' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천받은 구성원 popup</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-56</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-userlist-popup01' >
                                                /playlist/playlist-popup/share-userlist-popup01
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-userlist-popup02' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 담아간 구성원 popup</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-56</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-userlist-popup02' >
                                                /playlist/playlist-popup/share-userlist-popup02
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup10' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천하기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-50</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup10' >
                                                /playlist/playlist-popup/share-playlist-popup10
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup11' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천하기 (플레이리스트 공유 대상자 Select 화면)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-51</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup11' >
                                                /playlist/playlist-popup/share-playlist-popup11
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup12' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천하기(검색 결과 없을 경우 화면)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-52</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup12' >
                                                /playlist/playlist-popup/share-playlist-popup12
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup20' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천하기(mySUNI 사용자 화면) &gt; 검색전</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-53</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup20' >
                                                /playlist/playlist-popup/share-playlist-popup20
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup21' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천하기(mySUNI 사용자 화면) &gt; 검색 후</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup21' >
                                                /playlist/playlist-popup/share-playlist-popup21
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup22' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천하기(mySUNI 사용자 화면) &gt; 검색 후 nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup22' >
                                                /playlist/playlist-popup/share-playlist-popup22
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup30' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천하기(팔로워) &gt; 검색 전</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-54</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup30' >
                                                /playlist/playlist-popup/share-playlist-popup30
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup31' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천하기(팔로워) &gt; 검색결과</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup31' >
                                                /playlist/playlist-popup/share-playlist-popup31
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup32' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천하기(팔로워) &gt; 검색결과 nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup32' >
                                                /playlist/playlist-popup/share-playlist-popup32
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup33' target="_blank">
                                                <span className='text-purple'>Playlist &gt; 추천하기(팔로워) &gt; 팔로워없음</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-PL-</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/playlist/playlist-popup/share-playlist-popup33' >
                                                /playlist/playlist-popup/share-playlist-popup33
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    {/* //Playlist */}
                                    {/* @Foundation Skill */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Foundation Skill</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/foundationskill/foundationskill-apply' target="_blank">
                                                <span className='text-purple'>Foundation Skill 신청하기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/foundationskill/foundationskill-apply'>
                                                /foundationskill/foundationskill-apply
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-19</Table.Cell>
                                        <Table.Cell>
                                            <p>22-09-20 Foundation Skill 베타테스터 모집</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/foundationskill/foundationskill-apply-2nd' target="_blank">
                                                <span className='text-purple'>Foundation Skill 신청하기 2차</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/foundationskill/foundationskill-apply-2nd'>
                                                /foundationskill/foundationskill-apply-2nd
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-19</Table.Cell>
                                        <Table.Cell>
                                            <p>22-09-20 Foundation Skill 베타테스터 모집</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/foundationskill/foundationskill-apply-comp' target="_blank">
                                                <span className='text-purple'>Foundation Skill 신청완료</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/foundationskill/foundationskill-apply-comp'>
                                                /foundationskill/foundationskill-apply-comp
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-19</Table.Cell>
                                        <Table.Cell>
                                            <p>22-09-20 Foundation Skill 베타테스터 모집</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/foundationskill/foundationskill-apply-page' target="_blank">
                                                <span className='text-purple'>Foundation Skill 신청하기(페이지)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/foundationskill/foundationskill-apply-page'>
                                                /foundationskill/foundationskill-apply-page
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-09-20</Table.Cell>
                                        <Table.Cell>
                                            <p>22-09-20 Foundation Skill 베타테스터 모집</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/foundationskill/foundationskill-apply-page-comp' target="_blank">
                                                <span className='text-purple'>Foundation Skill 신청완료(페이지)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/foundationskill/foundationskill-apply-page-comp'>
                                                /foundationskill/foundationskill-apply-page-comp
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-09-20</Table.Cell>
                                        <Table.Cell>
                                            <p>22-09-20 Foundation Skill 베타테스터 모집</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/foundationskill/foundationskill-list' target="_blank">
                                                <span className="text-purple">Foundation Skill 목록</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span>AL-MA-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/foundationskill/foundationskill-list'>
                                            /foundationskill/foundationskill-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell>
                                            <p>22-10-05 Foundation Skill 추가</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/mypage/my-foundationSkill' target="_blank">
                                                <span className='text-purple'>My Foundation Skill</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/mypage/my-foundationSkill'>
                                                /mypage/my-foundationSkill
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell>
                                            <p>22-10-05 Foundation Skill 추가</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>설정변경</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/main-setting-ko' target="_blank">
                                                <span className="text-purple">설정변경안내</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span>AL-MA-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/main-setting-ko'>
                                                /main/main-setting-ko
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><p>22-10-18 설정변경 안내</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Tutorial</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/MainTutorialV5Ko' target="_blank">
                                                <span className="text-purple">Mobile Tutorial ko</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span>AL-MA-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/MainTutorialV5Ko'>
                                                /main/MainTutorialV5Ko
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><p>22-08-28 배포 모바일 어플 open 튜토리얼</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/MainTutorialV5Zh' target="_blank">
                                                <span className="text-purple">Mobile Tutorial zh</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span>AL-MA-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/MainTutorialV5Zh'>
                                                /main/MainTutorialV5Zh
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><p>22-08-28 배포 모바일 어플 open 튜토리얼</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/MainTutorialV5En' target="_blank">
                                                <span className="text-purple">Mobile Tutorial en</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span>AL-MA-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/MainTutorialV5En'>
                                                /main/MainTutorialV5En
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><p>22-08-28 배포 모바일 어플 open 튜토리얼</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/MainTutorialPlaylist' target="_blank">
                                                <span className="text-purple">Playlist Tutorial kor</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span>AL-MA-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/MainTutorialPlaylist'>
                                                /main/MainTutorialPlaylist
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/MainTutoriaPlaylistZh' target="_blank">
                                                <span className="text-purple">Playlist Tutorial chn</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span>AL-MA-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/MainTutoriaPlaylistZh'>
                                                /main/MainTutoriaPlaylistZh
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/main/MainTutoriaPlaylistEn' target="_blank">
                                                <span className="text-purple">Playlist Tutorial eng</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/* (<span>AL-MA-10</span>) */}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/main/MainTutoriaPlaylistEn'>
                                                /main/MainTutoriaPlaylistEn
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>운영 playlist</Table.Cell>
                                    </Table.Row>
                                    {/* //Foundation Skill */}
                                </>{/* //MyPage */}
                                <>{/* @@Footer */}
                                    <Table.Row verticalAlign='top' id='Footer'>
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>Footer</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* @게시판 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>고객센터</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/notice-list-new' target="_blank">
                                                <span className='text-blue'>Notice  &gt; List 일반사용자</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>QA-NO-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/notice-list-new'>
                                                /support/notice-list-new
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/notice-list-new-nodata' target="_blank">
                                                <span className='text-blue'>Notice  &gt; List - nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>QA-NO-10-nodata</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/notice-list-new-nodata'>
                                                /support/notice-list-new-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/faq-user-list' target="_blank">
                                                <span className='text-blue'>FAQ  &gt; List </span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>QA-FA-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/faq-user-list'>
                                                /support/faq-user-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/faq-user-list-nodata' target="_blank">
                                                <span className='text-blue'>FAQ  &gt; List - nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>QA-FA-10-nodata</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/faq-user-list-nodata'>
                                                /support/faq-user-list-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/user-qa-list' target="_blank">
                                                <span className='text-blue'>나의 이용문의  &gt; List</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>QA-QA-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/user-qa-list'>
                                                /support/user-qa-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/user-qa-write' target="_blank">
                                                <span className='text-blue'>나의 이용문의  &gt; WRITEFORM</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>QA-QA-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/user-qa-write'>
                                                /support/user-qa-write
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/user-qa-write-modal-faq' target="_blank">
                                                <span className='text-blue'>나의 이용문의  &gt; WRITEFORM  &gt; 자주찾는 질문 popup</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>QA-QA-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/user-qa-write-modal-faq'>
                                                /support/user-qa-write-modal-faq
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/user-qa-write-modal-faq-nodata' target="_blank">
                                                <span className='text-blue'>나의 이용문의  &gt; WRITEFORM  &gt; 자주찾는 질문 popup -nodata</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>QA-QA-30-nodata</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/user-qa-write-modal-faq-nodata'>
                                                /support/user-qa-write-modal-faq-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/qa-admin-answer-view-survey' target="_blank">
                                                <span className='text-purple'>Q &amp; A 관리  &gt; 만족도 조사 입력 폼</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>QA-QA-40</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/qa-admin-answer-view-survey'>
                                                /support/qa-admin-answer-view-survey
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-06-03</Table.Cell>
                                        <Table.Cell><p>22-06-03 만족도 조사 평점에서 thumbupdown으로 변경</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/qa-admin-answer-view-survey-done' target="_blank">
                                                <span className='text-purple'>Q &amp; A 관리  &gt; 만족도 조사 입력완료</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>QA-QA-50</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/qa-admin-answer-view-survey-done'>
                                                /support/qa-admin-answer-view-survey-done
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-06-03</Table.Cell>
                                        <Table.Cell><p>22-02-22 재문의하기 버튼추가</p><p>22-06-03 만족도 조사 평점에서 thumbupdown으로 변경</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/qa-admin-list' target="_blank">
                                                <span className='text-blue'>Q &amp; A 관리  &gt; List</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>QA-AD-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/qa-admin-list'>
                                                /support/qa-admin-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/qa-admin-answer' target="_blank">
                                                <span className='text-blue'>Q &amp; A 관리  &gt; 문의답변 입력 form</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>QA-AD-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/qa-admin-answer'>
                                                /support/qa-admin-answer
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/qa-admin-answer-view' target="_blank">
                                                <span className='text-purple'>Q &amp; A 관리  &gt; 문의답변 view</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>QA-AD-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/qa-admin-answer-view'>
                                                /support/qa-admin-answer-view
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-06-03</Table.Cell>
                                        <Table.Cell><p>22-06-03 만족도 조사 평점에서 thumbupdown으로 변경</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/support/QnA_Email_01.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-blue'>문의 접수(문의확인) 이메일 폼</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>EM-00-03</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/support/QnA_Email_01.html' rel="noopener noreferrer">
                                                open1223/dist/html/support/QnA_Email_01.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/support/QnA_Email_02.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-blue'>문의 답변 이메일 폼</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>EM-00-03</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/support/QnA_Email_02.html' rel="noopener noreferrer">
                                                open1223/dist/html/support/QnA_Email_02.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>21-10-07 배포</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/notice-view-user' target="_blank">
                                                <span className='text-blue'>Notice  &gt; view 일반 사용자</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>SU-01-03</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/notice-view-user'>
                                                /support/notice-view-user
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 comment 현행화 </span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/support/notice-view-admin' target="_blank">
                                                <span className='text-blue'>Notice  &gt; view Admin 계정</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>SU-01-04</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/support/notice-view-admin'>
                                                /support/notice-view-admin
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 comment 현행화 </span></Table.Cell>
                                    </Table.Row>
                                    {/* //고객센터 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>mySUNI 소개</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/introduction/all-introduction'>
                                                <span className='text-blue'>SUNI 소개</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-01-01</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/introduction/all-introduction'>
                                                /introduction/all-introduction
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row> */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-KOR.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-blue'>SUNI 소개 - 한국어</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-01-01-KOR</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-KOR.html' rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/introduction/IN-01-01-KOR.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-09-28</Table.Cell>
                                        <Table.Cell>
                                            <p>22-10-05 신규가입자 웰컴</p>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                                                <span className='text-blue'>SUNI 소개 - 중국어</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-01-01-CHN</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                                                open1223/dist/html/introduction/IN-01-01-CHN.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-ENG.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-blue'>SUNI 소개 - 영어</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-01-01-ENG</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-ENG.html' rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/introduction/IN-01-01-ENG.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Category 소개</span>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/introduction/category-introduction-v2' target="_blank">
                                                <span className='text-purple'>Category 커리큘럼 V2</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>IN-02-01</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/introduction/category-introduction-v2'>
                                                /introduction/category-introduction-v2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>22년 상반기 커리큘럼 업데이트</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/introduction/category-introduction-v2-eng' target="_blank">
                                                <span className='text-purple'>Category 커리큘럼 V2 영문</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>IN-02-01</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/introduction/category-introduction-v2-eng'>
                                                /introduction/category-introduction-v2-eng
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>22년 상반기 커리큘럼 업데이트</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/introduction/category-introduction-v2-chn' target="_blank">
                                                <span className='text-purple'>Category 커리큘럼 V2 중문</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>IN-02-01</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/introduction/category-introduction-v2-chn'>
                                                /introduction/category-introduction-v2-chn
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>22년 상반기 커리큘럼 업데이트</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Certification 소개</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/introduction/certification-system-introduction-ko-v2' target="_blank">
                                                <span className='text-purple'>Certification 소개(국문)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/introduction/certification-system-introduction-ko-v2'>
                                                /introduction/certification-system-introduction-ko-v2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-10-04</Table.Cell>
                                        <Table.Cell>22-10-05 배포예정</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/introduction/certification-system-introduction-en' target="_blank">
                                                <span className='text-blue'>Certification 소개(영문)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-03-01</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/introduction/certification-system-introduction-en'>
                                                /introduction/certification-system-introduction-en
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>0814 인증제도소개 화면 변경</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/introduction/certification-system-introduction-zh' target="_blank">
                                                <span className='text-blue'>Certification 소개(중문)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-03-01</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/introduction/certification-system-introduction-zh'>
                                                /introduction/certification-system-introduction-zh
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>0814 인증제도소개 화면 변경</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-KOR.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-blue'>Certification 소개 - 한국어</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-03-01-KOR</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-KOR.html' rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/introduction/IN-03-01-KOR.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>다국어 - html(한국어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                                                <span className='text-blue'>Certification 소개 - 중국어</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-03-01-CHN</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                                                open1223/dist/html/introduction/IN-03-01-CHN.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>다국어 - html(중국어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-ENG.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-blue'>Certification 소개 - 영어</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-01-01-ENG</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-ENG.html' rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/introduction/IN-03-01-ENG.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>다국어 - html(영어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>홍보자료</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/introduction/certification-system-introduction' target="_blank">
                                                <span className='text-blue'>홍보 자료</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-04-01</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/introduction/promotion-data'>
                                                /introduction/promotion-data
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>홍보자료 탭 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-KOR.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-blue'>홍보 자료 - 한국어</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-04-01-KOR</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-KOR.html' rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/introduction/IN-04-01-KOR.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>다국어 - html(한국어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                                                <span className='text-blue'>홍보 자료 - 중국어</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-04-01-CHN</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                                                open1223/dist/html/introduction/IN-04-01-CHN.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>다국어 - html(중국어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-ENG.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-blue'>홍보 자료 - 영어</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>IN-04-01-ENG</span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-ENG.html' rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/introduction/IN-04-01-ENG.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>다국어 - html(영어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
                                    </Table.Row>
                                    {/* //홍보자료 */}
                                    {/* @승인관리 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>승인관리</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/approval/approval-required-list' target="_blank">
                                                <span className='text-blue'>유료과정  &gt; 승인요청 List</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>AP-01-01-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/approval/approval-required-list'>
                                                /approval/approval-required-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-04-16</Table.Cell>
                                        <Table.Cell>
                                            <span className="text-grey">20-04-16 추가, 0429 UI추가, 신청현황 팝업</span><br />
                                            <span className="text-grey">20-05-14 신청현황 삭제, 목록 데이터 추가</span>
                                            20-07-07 승인메뉴 별도 분리
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/approval/approval-required-approve-modal' target="_blank">
                                                <span className='text-blue'>유료과정  &gt; 승인요청 list  &gt; 일괄 승인 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>MY-03-01-P01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/approval/approval-required-approve-modal'>
                                                /approval/approval-required-approve-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-04-16</Table.Cell>
                                        <Table.Cell><span className="text-grey">20-04-16 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/approval/approval-required-reject-modal' target="_blank">
                                                <span className='text-blue'>유료과정  &gt; 승인요청 list  &gt; 일괄 반려 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>MY-03-01-P02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/approval/approval-required-reject-modal'>
                                                /approval/approval-required-reject-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-04-16</Table.Cell>
                                        <Table.Cell><span className="text-grey">20-04-16 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/approval/approval-rejected-list' target="_blank">
                                                <span className='text-blue'>유료과정  &gt; 반려 list</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>AP-01-01-02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/approval/approval-rejected-list'>
                                                /approval/approval-rejected-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-04-16</Table.Cell>
                                        <Table.Cell><span className="text-grey">20-04-16 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/approval/approval-completed-list' target="_blank">
                                                <span className='text-blue'>유료과정  &gt; 승인완료 list</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>AP-01-01-03</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/approval/approval-completed-list'>
                                                /approval/approval-completed-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-04-17</Table.Cell>
                                        <Table.Cell><span className="text-grey">20-04-17 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/approval/approval-required-detail' target="_blank">
                                                <span className='text-blue'>유료과정  &gt; Detail(승인대기 시)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>AP-01-02-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/approval/approval-required-detail'>
                                                /approval/approval-required-detail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-04-16</Table.Cell>
                                        <Table.Cell><span className="text-grey">20-04-16 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/approval/approval-rejected-detail' target="_blank">
                                                <span className='text-blue'>유료과정  &gt; Detail(승인 혹은 반려 시)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>AP-01-02-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/approval/approval-rejected-detail'>
                                                /approval/approval-rejected-detail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>20-04-16</Table.Cell>
                                        <Table.Cell><span className="text-grey">20-04-16 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/approval/apl-approval-list' target="_blank">
                                                <span className='text-blue'>개인학습  &gt; List, 내역없음</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>AP-02-01-01, AP-02-01-02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/approval/apl-approval-list'>
                                                /approval/apl-approval-list
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>0623</Table.Cell>
                                        <Table.Cell>0623 추가</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/approval/apl-approval-detail' target="_blank">
                                                <span className='text-blue'>개인학습  &gt; Detail, 반려사유 등록팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>AP-02-02, AP-02-02-P01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/approval/apl-approval-detail'>
                                                /approval/apl-approval-detail
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>0623</Table.Cell>
                                        <Table.Cell>0623 추가</Table.Cell>
                                    </Table.Row>
                                    {/* //승인관리 */}
                                </>{/* //Support */}
                                <>{/* @@강사서비스 */}
                                    <Table.Row verticalAlign='top' id='Expert'>
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>강사서비스</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/all-lecturer-common' target="_blank">
                                                <span className='text-blue'>사내 / 외부강사 공통</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>EX-01-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/all-lecturer-common'>
                                                /expert/all-lecturer-common
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/teacher-lecture' target="_blank">
                                                <span className='text-blue'>Teacher`s Lecture</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>EX-02-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/teacher-lecture'>
                                                /expert/teacher-lecture
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/teacher-lecture-nodata' target="_blank">
                                                <span className='text-blue'>Teacher`s Lecture_없는경우</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>EX-02-02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/teacher-lecture-nodata'>
                                                /expert/teacher-lecture-nodata
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-main' target="_blank">
                                                <span className='text-purple'>강사전용학습관리시스템  &gt; 메인</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-10-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-main'>
                                                /expert/external-teacher-main
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-main-profile' target="_blank">
                                                <span className='text-purple'>강사전용학습관리시스템  &gt; 메인 &gt; 프로필 설정</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-10-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-main-profile'>
                                                /expert/external-teacher-main-profile
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-05-24</Table.Cell>
                                        <Table.Cell><span>프로필 edit modal 추가</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-main-cube-tab' target="_blank">
                                                <span className='text-purple'>강사전용학습관리시스템  &gt; 메인  &gt; cubeTab</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-10-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-main-cube-tab'>
                                                /expert/external-teacher-main-cube-tab
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-intro' target="_blank">
                                                <span className='text-purple'>강사전용학습관리시스템  &gt; 소개</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-intro'>
                                                /expert/external-teacher-intro
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-overview' target="_blank">
                                                <span className='text-purple'> · tab1 강의정보 (상세)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-20</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-overview'>
                                                /expert/external-teacher-overview
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-comment' target="_blank">
                                                <span className='text-purple'> · tab1 강의정보 (댓글)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-22</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-comment'>
                                                /expert/external-teacher-comment
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-task' target="_blank">
                                                <span className='text-purple'> · tab2 과제관리 (목록)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-30</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-task'>
                                                /expert/external-teacher-task
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-modal-score' target="_blank">
                                                <span className='text-purple'> · tab2 과제관리 - 팝업(과제채점)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-31</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-modal-score'>
                                                /expert/external-teacher-modal-score
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-modal-view2-task' target="_blank">
                                                <span className='text-purple'> · tab2 과제관리 - 팝업(문제보기2)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-41</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-modal-view2-task'>
                                                /expert/external-teacher-modal-view2-task
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-modal-task-all' target="_blank">
                                                <span className='text-purple'> · tab2 과제관리 - 팝업(결과보기)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-42</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-modal-task-all'>
                                                /expert/external-teacher-modal-task-all
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-test' target="_blank">
                                                <span className='text-purple'> · tab3 테스트관리 (목록)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-40</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-test'>
                                                /expert/external-teacher-test
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-modal-view' target="_blank">
                                                <span className='text-purple'> · tab3 테스트관리 - 팝업(문제보기)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-41</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-modal-view'>
                                                /expert/external-teacher-modal-view
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-modal-view2' target="_blank">
                                                <span className='text-purple'> · tab3 테스트관리 - 팝업(문제보기2)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-41</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-modal-view2'>
                                                /expert/external-teacher-modal-view2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-modal-test-all' target="_blank">
                                                <span className='text-purple'> · tab3 테스트관리 - 팝업(결과보기)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-42</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-modal-test-all'>
                                                /expert/external-teacher-modal-test-all
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-search-a' target="_blank">
                                                <span className='text-purple'> · tab4 학습자관리 (검색 및 목록A)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-52</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-search-a'>
                                                /expert/external-teacher-search-a
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/expert/external-teacher-search-b' target="_blank">
                                                <span className='text-purple'> · tab4 학습자관리 (검색 및 목록B)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>PMS-20-50</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/expert/external-teacher-search-b'>
                                                /expert/external-teacher-search-b
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                </>{/* //강사서비스 */}
                                <>{/* @@공통 */}
                                    <Table.Row verticalAlign='top' id='Common'>
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>공통</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/style' target="_blank">
                                                <span className='text-blue'>Element</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center' />
                                        <Table.Cell className='link-address'>
                                            <Link to='/style'>
                                                /style
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/editor-emoji-popup' target="_blank">
                                                <span className='text-purple'>NAMO Editor Emoji</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>namo_emoji_A</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/editor-emoji-popup'>
                                                /common/editor-emoji-popup
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell><span>emoji editor 용</span></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/privacy-policy-modal' target="_blank">
                                                <span className='text-blue'>개인정보 처리방침</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-03-02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/privacy-policy-modal'>
                                                /common/privacy-policy-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/personal-info-modal' target="_blank">
                                                <span className='text-purple'>외부교육 개인정보 연동팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-IF-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/personal-info-modal'>
                                                /common/personal-info-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/personal-info-modal-no-chk' target="_blank">
                                                <span className='text-purple'>외부교육 개인정보 연동팝업 - 체크 없을떄</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>LM-IF-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/personal-info-modal-no-chk'>
                                                /common/personal-info-modal-no-chk
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/site-map-modal' target="_blank">
                                                <span className='text-blue'>서비스 전체보기</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CO-05-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/site-map-modal'>
                                                /common/site-map-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>11-11-18</Table.Cell>
                                        <Table.Cell>운영(현행화수정)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Badge Case</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/certification/AllBadgeListDetailV2' target="_blank">
                                                <span className='text-blue'>Badge 상세 화면</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>badge</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/certification/AllBadgeListDetailV2'>
                                                /certification/AllBadgeListDetailV2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/certification/all-badge-list-detail-case-v2' target="_blank">
                                                <span className='text-blue'>Badge 케이스마다 상세화면</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>badge</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/certification/all-badge-list-detail-case-v2'>
                                                /certification/all-badge-list-detail-case-v2
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>22-08-23</Table.Cell>
                                        <Table.Cell><p>22-10-05 Badge UI 개선</p></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>Comment Case New</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/sample/comment-case-new' target="_blank">
                                                <span className='text-purple'>Comment Case New</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/sample/comment-case-new'>
                                                /sample/comment-case-new
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>22-08-17</Table.Cell>
                                        <Table.Cell>
											<p>22-08-23 댓글이미지 확대</p>
										</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/sample/comment-case-new-zoom' target="_blank">
                                                <span className='text-purple'>Comment Case New Zoom</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/sample/comment-case-new-zoom'>
                                                /sample/comment-case-new-zoom
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>조찬기</Table.Cell>
                                        <Table.Cell>22-08-17</Table.Cell>
                                        <Table.Cell>
											<p>22-08-23 댓글이미지 확대</p>
										</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/cube-comment-new' target="_blank">
                                                <span className='text-purple'>comment New 적용된 card/cube comment tab</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/cube-comment-new'>
                                                /learning/cube-comment-new
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>퍼블 완료</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/learning/learning-discuss-comment-new' target="_blank">
                                                <span className='text-purple'>comment New 적용된 talk</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/learning/learning-discuss-comment-new'>
                                                /learning/learning-discuss-comment-new
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>퍼블 완료</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/community-templete/templete-sub-detail-type-02-comment' target="_blank">
                                                <span className='text-purple'>comment New, 만족도 적용된 커뮤니티(Type02)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>CM-70-10</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/community-templete/templete-sub-detail-type-02-comment'>
                                                /community-templete/templete-sub-detail-type-02-comment
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>퍼블완료</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>기타</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/error404' target="_blank">
                                                <span className='text-blue'>404 error</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-08-01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/error404'>
                                                /common/error404
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/system-error' target="_blank">
                                                <span className='text-blue'>시스템 점검 안내</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>CO-08-02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/system-error'>
                                                /common/system-error
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/loading' target="_blank">
                                                <span className='text-blue'>loading</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/*(<span className='text-orange'>CO-05-08-01</span>)*/}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/loading'>
                                                /common/loading
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/modal-set' target="_blank">
                                                <span className='text-blue'>Modal set(Alert/Confirm)</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            {/*(<span className='text-orange'>CO-05-08-01</span>)*/}
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/modal-set'>
                                                /common/modal-set
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/common/browser-align' target="_blank">
                                                <span className='text-purple'>ie Redirect</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/common/browser-align'>
                                                /common/browser-align
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>장은진</Table.Cell>
                                        <Table.Cell>11/11</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/print/report-eduResult.html' rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>프린트출력화면 - 교육결과 리포트</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'></span>)<br />
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/print/report-eduResult.html' rel="noopener noreferrer">
                                                open1223/dist/html/print/report-eduResult.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell>최은영</Table.Cell>
                                        <Table.Cell>퍼블완료</Table.Cell>
                                        <Table.Cell>운영</Table.Cell>
                                    </Table.Row>
                                </>{/* //공통 */}
                                <>{/* @@기타 */}
                                    <Table.Row verticalAlign='top' id='ETC'>
                                        <Table.Cell colSpan='5' className='table-tit'>
                                            <span className='text-bold'>기타</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    {/* @시스템 팝업 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>시스템 팝업</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/etc/common-info-modal' target="_blank">
                                                <span className='text-blue'>핵인사팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>	ET-01-P01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/etc/common-info-modal'>
                                                /etc/common-info-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/etc/welcome-message-modal' target="_blank">
                                                <span className='text-blue'>웰컴팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>	ET-02-P01</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/etc/welcome-message-modal'>
                                                /etc/welcome-message-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <Link to='/etc/system-info-modal' target="_blank">
                                                <span className='text-blue'>시스템 안내 팝업</span>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>	ET-02-P02</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <Link to='/etc/system-info-modal'>
                                                /etc/system-info-modal
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                    </Table.Row>
                                    {/* //시스템 팝업 */}
                                    {/* @신임임원 */}
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell colSpan='5' className='table-sub-tit'>
                                            <span className='text-bold'>신임임원</span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-red'>HTML 신임임원 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>99_HTML_신임임원_01_사전학습</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-red'>HTML 신임임원 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>99_HTML_신임임원_02_1일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_1day.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-red'>HTML 신임임원 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>99_HTML_신임임원_02_2일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_2day.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-red'>HTML 신임임원 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>99_HTML_신임임원_02_3일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_3day.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-red'>HTML 신임임원 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>99_HTML_신임임원_02_4일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_4day.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_home.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-red'>HTML 신임임원 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-orange'>99_HTML_신임임원_02_3일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_home.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_home.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_new.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_02_1일차_new</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_new.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_1day_new.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_new.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_02_2일차_new</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_new.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_2day_new.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_new.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_02_3일차_new</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_new.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_3day_new.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_new.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_02_4일차_new</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_new.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_4day_new.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>


                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_new.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_02_5일차_new</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_new.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_5day_new.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>


                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_img.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세 (이미지대체) </span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>HTML_신임리더_HOME</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_img.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/leader_detail_home_img.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>


                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>HTML_신임리더_HOME</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/leader_detail_home.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_03.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_03_1일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_03.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_1day_03.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_03.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_03_2일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_03.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_2day_03.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_03.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_03_3일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_03.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_3day_03.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_03.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_03_4일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_03.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_4day_03.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_03.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_03_5일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_03.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_5day_03.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_03.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>HTML_신임리더_HOME_03</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_03.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/leader_detail_home_03.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_04.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>HTML_신임리더_HOME_04</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_04.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/leader_detail_home_04.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_04.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_04_1일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_04.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_1day_04.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_04.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_04_2일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_04.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_2day_04.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_04.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_04_3일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_04.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_3day_04.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_04.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_04_4일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_04.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_4day_04.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_04.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_04_5일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_04.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_5day_04.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_05.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>HTML_신임리더_HOME_05</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_05.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/leader_detail_home_05.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_05.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_05_1일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_05.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_1day_05.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_05.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_05_2일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_05.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_2day_05.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_05.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_05_3일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_05.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_3day_05.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_05.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_05_4일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_05.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_4day_05.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>

                                    <Table.Row verticalAlign='top'>
                                        <Table.Cell>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_05.html" rel="noopener noreferrer" target="_blank">
                                                <span className='text-purple'>HTML 신임리더 상세</span>
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell textAlign='center'>
                                            (<span className='text-purple'>99_HTML_신임리더_05_5일차</span>)
                                        </Table.Cell>
                                        <Table.Cell className='link-address'>
                                            <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_05.html" rel="noopener noreferrer" target="_blank">
                                                open1223/dist/html/community/executives_detail_5day_05.html
                                            </a>
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
                                    </Table.Row>
                                    {/* //신임임원 */}
                                </>{/* //기타 */}
                            </Table.Body>
                        </Table>

                    </Segment>
                </div>
            </section>

        )
    }
}


export default PageList2023
