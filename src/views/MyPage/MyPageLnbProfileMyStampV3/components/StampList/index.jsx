
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Icon, Table} from 'semantic-ui-react';
// import MyStampModal from '../MyStampModal';

class StampList extends Component {
    //

    render() {
        return (
            <div className="stamp-list-wrapper">
                <Table>
                    <colgroup>
                        <col width="80px"/>
                        <col width="100px"/>
                        <col/>
                        <col width="160px"/>
                    </colgroup>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell>College</Table.HeaderCell>
                            <Table.HeaderCell>과정명</Table.HeaderCell>
                            <Table.HeaderCell>
                                획득일자
                                <Link to="#">
                                    {/*오름차순 정렬 시 아이콘: list-up16*/}
                                    <Icon className="list-down16">
                                        <span className="blind">내림차순 정렬</span>
                                    </Icon>
                                </Link>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    {/*목록*/}
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>15</Table.Cell>
                            <Table.Cell>BM Design & Storytelling</Table.Cell>
                            <Table.Cell className="title ellipsis">
                                <Link to="#">투자은행과의 파트너십</Link>
                            </Table.Cell>
                            <Table.Cell>2021.04.15</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>14</Table.Cell>
                            <Table.Cell>에너지 솔루션</Table.Cell>
                            <Table.Cell className="title ellipsis">
                                <Link to="#">[깨끗한 지구] ESG 경영의 새로운 축, RE100</Link>
                            </Table.Cell>
                            <Table.Cell>2021.04.10</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>13</Table.Cell>
                            <Table.Cell>AI</Table.Cell>
                            <Table.Cell className="title ellipsis">
                                <Link to="#">[코세라] Neural Networks and Deep : Learning Networks</Link>
                            </Table.Cell>
                            <Table.Cell>2021.04.10</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>12</Table.Cell>
                            <Table.Cell>행복</Table.Cell>
                            <Table.Cell className="title ellipsis">
                                <Link to="#">하루 10 행복홈트 - 몸챙김과 행복 (이해)</Link>
                            </Table.Cell>
                            <Table.Cell>2021.04.01</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>11</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title ellipsis">
                                <Link to="#">SK의 Portfolio Deep Change</Link>
                            </Table.Cell>
                            <Table.Cell>2021.03.30</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>10</Table.Cell>
                            <Table.Cell>Global</Table.Cell>
                            <Table.Cell className="title ellipsis">
                                <Link to="#">수강신청</Link>
                            </Table.Cell>
                            <Table.Cell>2021.03.25</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>9</Table.Cell>
                            <Table.Cell>AI</Table.Cell>
                            <Table.Cell className="title ellipsis">
                                <Link to="#">Big Data 입문 A to Z</Link>
                            </Table.Cell>
                            <Table.Cell>2021.03.20</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>8</Table.Cell>
                            <Table.Cell>미래반도체</Table.Cell>
                            <Table.Cell className="title ellipsis">
                                <Link to="#">[AI HW 개론] AI Platform</Link>
                            </Table.Cell>
                            <Table.Cell>2021.03.15</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>7</Table.Cell>
                            <Table.Cell>SV</Table.Cell>
                            <Table.Cell className="title ellipsis">
                                <Link to="#">타 주체들의 SV 창출 이해</Link>
                            </Table.Cell>
                            <Table.Cell>2021.03.10</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>6</Table.Cell>
                            <Table.Cell>SK경영</Table.Cell>
                            <Table.Cell className="title ellipsis">
                                <Link to="#">패기와 지성의 SK History</Link>
                            </Table.Cell>
                            <Table.Cell>2021.03.05</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}


export default StampList;