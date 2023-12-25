import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Table } from "semantic-ui-react";

class TableBody extends Component {
    render() {
        return (
            <div className="external-table-wrap">
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className="category">구분</Table.HeaderCell>
                            <Table.HeaderCell className="type">타입</Table.HeaderCell>
                            <Table.HeaderCell className="title">제목</Table.HeaderCell>
                            <Table.HeaderCell className="done">이수</Table.HeaderCell>
                            <Table.HeaderCell className="new">신규 학습</Table.HeaderCell>
                            <Table.HeaderCell className="reply">신규 댓글</Table.HeaderCell>
                            <Table.HeaderCell className="send">과제 제출</Table.HeaderCell>
                            <Table.HeaderCell className="wait">승인 대기</Table.HeaderCell>
                            <Table.HeaderCell className="grade">채점 대기</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="category">AI</Table.Cell>
                            <Table.Cell className="type">Video</Table.Cell>
                            <Table.Cell className="title"><Link to="/"><span>AI/DT 시대의 고객 경험 디자인 디자인 디자인 디자인 디자인 디자인 디자인 디자인 디자인</span></Link></Table.Cell>
                            <Table.Cell className="done"><span>19,235</span></Table.Cell>
                            <Table.Cell className="new">5</Table.Cell>
                            <Table.Cell className="reply">12</Table.Cell>
                            <Table.Cell className="send">12</Table.Cell>
                            <Table.Cell className="wait">0</Table.Cell>
                            <Table.Cell className="grade">12</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="category">AI</Table.Cell>
                            <Table.Cell className="type">Video</Table.Cell>
                            <Table.Cell className="title"><Link to="/"><span>Data로 생각하는 인재되기 (16가지 역량)</span></Link></Table.Cell>
                            <Table.Cell className="done"><span>19,235</span></Table.Cell>
                            <Table.Cell className="new">5</Table.Cell>
                            <Table.Cell className="reply">12</Table.Cell>
                            <Table.Cell className="send">12</Table.Cell>
                            <Table.Cell className="wait">0</Table.Cell>
                            <Table.Cell className="grade">12</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="category">반도체</Table.Cell>
                            <Table.Cell className="type">Video</Table.Cell>
                            <Table.Cell className="title"><Link to="/"><span>반도체 Industry 이해 Part1. 반도체 산업의 기본개념과 시장 경쟁구도</span></Link></Table.Cell>
                            <Table.Cell className="done"><span>9,245</span></Table.Cell>
                            <Table.Cell className="new">3</Table.Cell>
                            <Table.Cell className="reply">33</Table.Cell>
                            <Table.Cell className="send">42</Table.Cell>
                            <Table.Cell className="wait">1</Table.Cell>
                            <Table.Cell className="grade">5</Table.Cell>
                        </Table.Row>
                        
                        <Table.Row>
                            <Table.Cell className="category">DT</Table.Cell>
                            <Table.Cell className="type">Video</Table.Cell>
                            <Table.Cell className="title"><Link to="/"><span>&lt; ST, DT를 만나다 &gt;- SK하이닉스 편</span></Link></Table.Cell>
                            <Table.Cell className="done"><span>3,212</span></Table.Cell>
                            <Table.Cell className="new">6</Table.Cell>
                            <Table.Cell className="reply">13</Table.Cell>
                            <Table.Cell className="send">11</Table.Cell>
                            <Table.Cell className="wait">5</Table.Cell>
                            <Table.Cell className="grade">12</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="category">A</Table.Cell>
                            <Table.Cell className="type">Video</Table.Cell>
                            <Table.Cell className="title"><Link to="/"><span>Data로 생각하는 인재되기 (16가지 역량)</span></Link></Table.Cell>
                            <Table.Cell className="done"><span>3,212</span></Table.Cell>
                            <Table.Cell className="new">3</Table.Cell>
                            <Table.Cell className="reply">12</Table.Cell>
                            <Table.Cell className="send">34</Table.Cell>
                            <Table.Cell className="wait">7</Table.Cell>
                            <Table.Cell className="grade">12</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="category">반도체</Table.Cell>
                            <Table.Cell className="type">Video</Table.Cell>
                            <Table.Cell className="title"><Link to="/"><span>반도체 Industry 이해 Part1. 반도체 산업의 기본개념과 시장 경쟁구도</span></Link></Table.Cell>
                            <Table.Cell className="done"><span>9,245</span></Table.Cell>
                            <Table.Cell className="new">3</Table.Cell>
                            <Table.Cell className="reply">12</Table.Cell>
                            <Table.Cell className="send">34</Table.Cell>
                            <Table.Cell className="wait">1</Table.Cell>
                            <Table.Cell className="grade">5</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="category">DT</Table.Cell>
                            <Table.Cell className="type">Video</Table.Cell>
                            <Table.Cell className="title"><Link to="/"><span>&lt; ST, DT를 만나다 &gt;- SK하이닉스 편</span></Link></Table.Cell>
                            <Table.Cell className="done"><span>3,212</span></Table.Cell>
                            <Table.Cell className="new">6</Table.Cell>
                            <Table.Cell className="reply">13</Table.Cell>
                            <Table.Cell className="send">11</Table.Cell>
                            <Table.Cell className="wait">5</Table.Cell>
                            <Table.Cell className="grade">12</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="category">A</Table.Cell>
                            <Table.Cell className="type">Video</Table.Cell>
                            <Table.Cell className="title"><Link to="/"><span>Data로 생각하는 인재되기 (16가지 역량)</span></Link></Table.Cell>
                            <Table.Cell className="done"><span>3,212</span></Table.Cell>
                            <Table.Cell className="new">3</Table.Cell>
                            <Table.Cell className="reply">12</Table.Cell>
                            <Table.Cell className="send">34</Table.Cell>
                            <Table.Cell className="wait">7</Table.Cell>
                            <Table.Cell className="grade">12</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default TableBody;