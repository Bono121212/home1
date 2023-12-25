import React, { Component, createRef } from 'react';
import { Segment, Table, List, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css';
import IndexRelease from './components/IndexRelease';
import IndexLogin from './components/IndexLogin';
import IndexOnboard from './components/IndexOnboard';
import IndexMain from './components/IndexMain';
import IndexCategory from './components/IndexCategory';
import IndexCertification from './components/IndexCertification';
import IndexCommunity from './components/IndexCommunity';
import IndexMyLearning from './components/IndexMyLearning';
import IndexLearning from './components/IndexLearning';
import IndexSearch from './components/IndexSearch';
import IndexMypage from './components/IndexMypage';
import IndexFooter from './components/IndexFooter';
import IndexTeacher from './components/IndexTeacher';
import IndexCareerPlatform from './components/IndexCareerPlatform';
import IndexCommon from './components/IndexCommon';
import IndexEtc from './components/IndexEtc';

class PageList2022 extends Component {
    contextRef = createRef()
    state = { activeItem: 'Overview' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    spyScrollClick = (e) => {
        //let gap = 165;
        let id = e.target.getAttribute("href");
        id = id.replace("#/", "");

        let pos = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - 176;

        window.scrollTo(0, pos);
    }

    render() {
        return (
            <section className='content index-page bg-white'>
                <div ref={this.contextRef}>
                    <Sticky context={this.contextRef} className='tab-menu offset0' style={{borderBottom: "0"}}>
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
                                <List.Item><Link to="#CareerPlatform" onClick={this.spyScrollClick}>커리어플랫폼</Link></List.Item>
                                <List.Item><Link to="#Common" onClick={this.spyScrollClick}>공통</Link></List.Item>
                                <List.Item><Link to="#ETC" onClick={this.spyScrollClick}>기타</Link></List.Item>
                                {/* <List.Item><Link to="#Approval" onClick={this.spyScrollClick}>Approval</Link></List.Item>
                                <List.Item><Link to="#Introduction" onClick={this.spyScrollClick}>Introduction</Link></List.Item>
                                <List.Item><Link to="#executives" onClick={this.spyScrollClick}>신임임원</Link></List.Item> */}
                            </List>
                        </div>
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
							</Table>
						</Segment>
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
                            <Table.Body>
                                <IndexRelease />
                                <IndexLogin />
                                <IndexOnboard />
                                <IndexMain />
                                <IndexCategory />
                                <IndexCertification />
                                <IndexCommunity />
                                <IndexMyLearning />
                                <IndexLearning />
                                <IndexSearch />
                                <IndexMypage />
                                <IndexFooter />
                                <IndexTeacher />
                                <IndexCareerPlatform />
                                <IndexCommon />
                                <IndexEtc />
                            </Table.Body>
                        </Table>

                    </Segment>
                </div>
            </section>

        )
    }
}


export default PageList2022
