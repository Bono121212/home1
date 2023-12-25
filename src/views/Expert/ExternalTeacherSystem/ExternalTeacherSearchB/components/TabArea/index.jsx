import React, { Component, createRef } from 'react';
import { Segment, Sticky, Menu, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AdminSearch from "../AdminSearch";
import Paging from "../Paging";
import TableTitle from "../TableTitle";

class TabArea extends Component {
    contextRef = createRef()
    state = { activeItem: 'LearnerManagement' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku-teacher'>
                            <Menu.Item
                                name='LectureInfo'
                                active={activeItem === 'LectureInfo'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                강의 정보
                            </Menu.Item>
                            {/* <Menu.Item
                                name='TaskManagement'
                                active={activeItem === 'TaskManagement'}
                                onClick={this.handleItemClick}
                                as={Link} to="/learning/cube-detail-elearning-comment"
                            >
                                <span>과제 관리</span>
                            </Menu.Item>
                            <Menu.Item
                                name='TestManagement'
                                active={activeItem === 'TestManagement'}
                                onClick={this.handleItemClick}
                                as={Link} to="/learning/cube-detail-elearning-comment"
                            >
                                <span>테스트 관리</span>
                            </Menu.Item> */}
                            <Menu.Item
                                name='LearnerManagement'
                                active={activeItem === 'LearnerManagement'}
                                onClick={this.handleItemClick}
                                as={Link} to="/learning/cube-detail-elearning-comment"
                            >
                                <span>학습자 관리</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>

                <Segment className='full'>
                    <div className="course-overview-wrap">
                        <Segment className="full">
                            <div className="admin-container">

                                { /* 검색창 */}
                                <AdminSearch />

                                <TableTitle />
                                <table className="ui admin_table">
                                    <colgroup>
                                        <col width="104px" />
                                        <col width="310px" />
                                        <col width="180px" />
                                        <col width="250px" />
                                        <col width="180px" />
                                        <col width="180px" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </th>
                                            <th>소속사</th>
                                            <th>성명</th>
                                            <th>신청시간</th>
                                            <th>상태</th>
                                            <th>상태 변경일</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </td>
                                            <td>SK주식회사 홀딩스</td>
                                            <td>김써니</td>
                                            <td>2021.02.25 09:32:30</td>
                                            <td>승인대기</td>
                                            <td>2021.02.25</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </td>
                                            <td>SK이노베이션</td>
                                            <td>홍길동</td>
                                            <td>2021.02.25 09:32:30</td>
                                            <td>승인(학습중)</td>
                                            <td>2021.02.25</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </td>
                                            <td>SK E&#38;S</td>
                                            <td>조세호</td>
                                            <td>2021.02.25 09:32:30</td>
                                            <td>반려</td>
                                            <td>2021.02.25</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </td>
                                            <td>SK디스커버리</td>
                                            <td>박효신</td>
                                            <td>2021.02.25 09:32:30</td>
                                            <td>취소</td>
                                            <td>2021.02.25</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </td>
                                            <td>SK네트웍스</td>
                                            <td>김신</td>
                                            <td>2021.02.25 09:32:30</td>
                                            <td>승인대기</td>
                                            <td>2021.02.25</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </td>
                                            <td>SK에너지</td>
                                            <td>하늘에구름</td>
                                            <td>2021.02.25 09:32:30</td>
                                            <td>승인대기</td>
                                            <td>2021.02.25</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </td>
                                            <td>SK루브리컨츠</td>
                                            <td>이다희</td>
                                            <td>2021.02.25 09:32:30</td>
                                            <td>반려</td>
                                            <td>2021.02.25</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </td>
                                            <td>SK가스</td>
                                            <td>송중기</td>
                                            <td>2021.02.25 09:32:30</td>
                                            <td>승인대기</td>
                                            <td>2021.02.25</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </td>
                                            <td>SK머티리얼즈</td>
                                            <td>선우재덕</td>
                                            <td>2021.02.25 09:32:30</td>
                                            <td>반려</td>
                                            <td>2021.02.25</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox
                                                    className="base"
                                                    label=""
                                                    name="radioGroup"
                                                    value=""
                                                />
                                            </td>
                                            <td>SK머티리얼즈</td>
                                            <td>아이유</td>
                                            <td>2021.02.25 09:32:30</td>
                                            <td>반려</td>
                                            <td>2021.02.25</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Paging />
                            </div>
                        </Segment>
                    </div>
                </Segment>
            </div>
        )
    }
}

export default TabArea