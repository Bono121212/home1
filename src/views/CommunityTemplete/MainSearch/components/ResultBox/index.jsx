import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
//import Calendar from '../Calendar';
//import ClearInputBoxSearch from '../ClearInputBoxSearch';

class ResultBox extends Component {
    
    render() {

        return (
            <div className="result_box">
                <Table>
                    <colgroup>
                        <col width="240px"/>
                        <col width="420px"/>
                        <col width="100px"/>
                        <col width="120px"/>
                        <col width="100px"/>
                        <col width="100px"/>
                        <col width="120px"/>
                    </colgroup>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className="r_board">게시판</Table.HeaderCell>
                            <Table.HeaderCell className="r_title">제목</Table.HeaderCell>
                            <Table.HeaderCell className="r_writer">작성자</Table.HeaderCell>
                            <Table.HeaderCell className="r_date">작성일</Table.HeaderCell>
                            <Table.HeaderCell className="r_cnt">조회</Table.HeaderCell>
                            <Table.HeaderCell className="r_reply">댓글</Table.HeaderCell>
                            <Table.HeaderCell className="r_like">좋아요</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>                      
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="r_board"><span className="ellipsis">CES 2021 관련 자료 CES 2021 관련 자료 CES 2021 관련 자료 </span></Table.Cell>
                            <Table.Cell className="r_title"><span className="ellipsis">All-Digital CES 2021을 직접 참관하신 SK구성원들에게 물었습니다.</span> </Table.Cell>
                            <Table.Cell className="r_writer"><span className="ellipsis">홍길동이의아버지를아버지라</span></Table.Cell>
                            <Table.Cell className="r_date">2021.05.21</Table.Cell>
                            <Table.Cell className="r_cnt">15</Table.Cell>
                            <Table.Cell className="r_reply">10</Table.Cell>
                            <Table.Cell className="r_like">10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="r_board"><span className="ellipsis">[뇌피셜] 내가 본 CES 2021</span></Table.Cell>
                            <Table.Cell className="r_title"><span className="ellipsis">CES 2021 참석자들에게 평가를 요청한 항목 (aka. All-digital 설계할 때는 말입니다요 하하하하</span> </Table.Cell>
                            <Table.Cell className="r_writer">홍길동</Table.Cell>
                            <Table.Cell className="r_date">2021.05.21</Table.Cell>
                            <Table.Cell className="r_cnt">15</Table.Cell>
                            <Table.Cell className="r_reply">10</Table.Cell>
                            <Table.Cell className="r_like">10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="r_board"><span className="ellipsis">CES 2021 Q&A 센터</span></Table.Cell>
                            <Table.Cell className="r_title"><span className="ellipsis">All-Digital CES 2021을 직접 참관하신 SK구성원들에게 물었습니다.</span> </Table.Cell>
                            <Table.Cell className="r_writer">홍길동</Table.Cell>
                            <Table.Cell className="r_date">2021.05.21</Table.Cell>
                            <Table.Cell className="r_cnt">15</Table.Cell>
                            <Table.Cell className="r_reply">10</Table.Cell>
                            <Table.Cell className="r_like">10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="r_board"><span className="ellipsis">지디넷 CES 2021 섹션</span></Table.Cell>
                            <Table.Cell className="r_title"><span className="ellipsis">All-Digital CES 2021을 직접 참관하신 SK구성원들에게 물었습니다.</span> </Table.Cell>
                            <Table.Cell className="r_writer">홍길동</Table.Cell>
                            <Table.Cell className="r_date">2021.05.21</Table.Cell>
                            <Table.Cell className="r_cnt">15</Table.Cell>
                            <Table.Cell className="r_reply">10</Table.Cell>
                            <Table.Cell className="r_like">10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="r_board"><span className="ellipsis">CES 2021 관련 자료 CES 2021 관련 자료 CES 2021 관련 자료 </span></Table.Cell>
                            <Table.Cell className="r_title"><span className="ellipsis">All-Digital CES 2021을 직접 참관하신 SK구성원들에게 물었습니다.</span> </Table.Cell>
                            <Table.Cell className="r_writer"><span className="ellipsis">홍길동이의아버지를아버지라</span></Table.Cell>
                            <Table.Cell className="r_date">2021.05.21</Table.Cell>
                            <Table.Cell className="r_cnt">15</Table.Cell>
                            <Table.Cell className="r_reply">10</Table.Cell>
                            <Table.Cell className="r_like">10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="r_board"><span className="ellipsis">[뇌피셜] 내가 본 CES 2021</span></Table.Cell>
                            <Table.Cell className="r_title"><span className="ellipsis">CES 2021 참석자들에게 평가를 요청한 항목 (aka. All-digital 설계할 때는 말입니다요 하하하하</span> </Table.Cell>
                            <Table.Cell className="r_writer">홍길동</Table.Cell>
                            <Table.Cell className="r_date">2021.05.21</Table.Cell>
                            <Table.Cell className="r_cnt">15</Table.Cell>
                            <Table.Cell className="r_reply">10</Table.Cell>
                            <Table.Cell className="r_like">10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="r_board"><span className="ellipsis">CES 2021 Q&A 센터</span></Table.Cell>
                            <Table.Cell className="r_title"><span className="ellipsis">All-Digital CES 2021을 직접 참관하신 SK구성원들에게 물었습니다.</span> </Table.Cell>
                            <Table.Cell className="r_writer">홍길동</Table.Cell>
                            <Table.Cell className="r_date">2021.05.21</Table.Cell>
                            <Table.Cell className="r_cnt">15</Table.Cell>
                            <Table.Cell className="r_reply">10</Table.Cell>
                            <Table.Cell className="r_like">10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="r_board"><span className="ellipsis">지디넷 CES 2021 섹션</span></Table.Cell>
                            <Table.Cell className="r_title"><span className="ellipsis">All-Digital CES 2021을 직접 참관하신 SK구성원들에게 물었습니다.</span> </Table.Cell>
                            <Table.Cell className="r_writer">홍길동</Table.Cell>
                            <Table.Cell className="r_date">2021.05.21</Table.Cell>
                            <Table.Cell className="r_cnt">15</Table.Cell>
                            <Table.Cell className="r_reply">10</Table.Cell>
                            <Table.Cell className="r_like">10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="r_board"><span className="ellipsis">CES 2021 Q&A 센터</span></Table.Cell>
                            <Table.Cell className="r_title"><span className="ellipsis">All-Digital CES 2021을 직접 참관하신 SK구성원들에게 물었습니다.</span> </Table.Cell>
                            <Table.Cell className="r_writer">홍길동</Table.Cell>
                            <Table.Cell className="r_date">2021.05.21</Table.Cell>
                            <Table.Cell className="r_cnt">15</Table.Cell>
                            <Table.Cell className="r_reply">10</Table.Cell>
                            <Table.Cell className="r_like">10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell className="r_board"><span className="ellipsis">지디넷 CES 2021 섹션</span></Table.Cell>
                            <Table.Cell className="r_title"><span className="ellipsis">All-Digital CES 2021을 직접 참관하신 SK구성원들에게 물었습니다.</span> </Table.Cell>
                            <Table.Cell className="r_writer">홍길동</Table.Cell>
                            <Table.Cell className="r_date">2021.05.21</Table.Cell>
                            <Table.Cell className="r_cnt">15</Table.Cell>
                            <Table.Cell className="r_reply">10</Table.Cell>
                            <Table.Cell className="r_like">10</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>   
            </div>
        )
    }
}


export default ResultBox
