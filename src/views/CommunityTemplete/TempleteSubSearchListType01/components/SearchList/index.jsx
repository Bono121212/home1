import React, {Component} from 'react';
import { Table, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

//import HomeFile from "../../../../../images/all/icon-community-file-copy-2.png";
//import secret from "../../../../../images/all/icon-community-secret-18-px.svg";


class SearchList extends Component {
    
    render() {

        return (
            <div className="list_box s_type">
                <Table>
                    <colgroup>
                        <col width="530px"/>
                        <col width="100px"/>
                        <col width="100px"/>
                        <col width="80px"/>
                        <col width="80px"/>
                    </colgroup>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className="title">제목</Table.HeaderCell>
                            <Table.HeaderCell className="writer">작성자</Table.HeaderCell>
                            <Table.HeaderCell className="date">작성일</Table.HeaderCell>
                            <Table.HeaderCell className="cnt">조회</Table.HeaderCell>
                            <Table.HeaderCell className="like">좋아요</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>                      
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="title">
                                <div className="t_inner important new">
                                    <Icon className="add_file" />
                                    <Link to="" className="ellipsis">[공지] TRENDING 정보게시판 이용안내, 자세한 내용을 이야기해보도록합니다.</Link>
                                    <span className="reply">[<strong>12</strong>]</span>
                                    <Icon className="secret" />
                                </div>
                                <div className="result_text">
                                    <p className="ellipsis l_two">게시글의 상세내용 중에 검색결과가 표시되는데 <span className="red">즉시검색 결과표시</span> 됩니다. 앞뒤 상세내용이 30자씩 보여진 후 줄임표시됩니다</p>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="writer"><span>캠핑마스터</span></Table.Cell>
                            <Table.Cell className="date">2021.05.21</Table.Cell>
                            <Table.Cell className="cnt">0</Table.Cell>
                            <Table.Cell className="like">0</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                                <div className="t_inner new">
                                    {/* <Icon className="add_file" /> */}
                                    <Link to="" className="ellipsis">네이버, 유료컨텐츠 실험 시작!</Link>
                                    <span className="reply">[<strong>1,004</strong>]</span>
                                    {/* <Icon className="secret" /> */}
                                </div>
                                <div className="result_text">
                                    <p className="ellipsis l_two">게시글의 상세내용 중에 검색결과가 표시되는데 <span className="red">즉시검색 결과표시</span> 됩니다. 앞뒤 상세내용이 30자씩 보여진 후 줄임표시됩니다</p>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="writer"><span>우녕자</span></Table.Cell>
                            <Table.Cell className="date">2020.08.30 </Table.Cell>
                            <Table.Cell className="cnt">34</Table.Cell>
                            <Table.Cell className="like">0</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                                <div className="t_inner">
                                    <Icon className="add_file" />
                                    <Link to="" className="ellipsis">구독 60만명 급감... 넷츨릭스 열기 급랭?</Link>
                                    <span className="reply">[<strong>76</strong>]</span>
                                    <Icon className="secret" />
                                </div>
                                <div className="result_text">
                                    <p className="ellipsis l_two">게시글의 상세내용 중에 검색결과가 표시되는데 <span className="red">즉시검색 결과표시</span> 됩니다. 앞뒤 상세내용이 30자씩 보여진 후 줄임표시됩니다</p>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="writer"><span>김선희</span></Table.Cell>
                            <Table.Cell className="date">2020.08.06</Table.Cell>
                            <Table.Cell className="cnt">77</Table.Cell>
                            <Table.Cell className="like">33</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                                <div className="t_inner">
                                    {/* <Icon className="add_file" /> */}
                                    <Link to="" className="ellipsis">네이버 vs 카카오, 북미 웹툰=웹소설 시장에서 격돌</Link>
                                    <span className="reply">[<strong>1,578</strong>]</span>
                                    {/* <Icon className="secret" /> */}
                                </div>
                                <div className="result_text">
                                    <p className="ellipsis l_two">게시글의 상세내용 중에 검색결과가 표시되는데 <span className="red">즉시검색 결과표시</span> 됩니다. 앞뒤 상세내용이 30자씩 보여진 후 줄임표시됩니다</p>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="writer"><span>연차도둑</span></Table.Cell>
                            <Table.Cell className="date">2020.09.09</Table.Cell>
                            <Table.Cell className="cnt">67</Table.Cell>
                            <Table.Cell className="like">5</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                                <div className="t_inner">
                                    {/* <Icon className="add_file" /> */}
                                    <Link to="" className="ellipsis">[공지] TRENDING 정보게시판 이용안내</Link>
                                    {/* <span className="reply">[<strong>99</strong>]</span> */}
                                    {/* <Icon className="secret" /> */}
                                </div>
                                <div className="result_text">
                                    <p className="ellipsis l_two">게시글의 상세내용 중에 검색결과가 표시되는데 <span className="red">즉시검색 결과표시</span> 됩니다. 앞뒤 상세내용이 30자씩 보여진 후 줄임표시됩니다</p>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="writer"><span>nickname</span></Table.Cell>
                            <Table.Cell className="date">2020.08.28</Table.Cell>
                            <Table.Cell className="cnt">689</Table.Cell>
                            <Table.Cell className="like">333</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>   
            </div>
        )
    }
}


export default SearchList
