import React, {Component} from 'react';
import {Table, Icon} from 'semantic-ui-react';

class CardListBoard extends Component {
    render() {
        return (
            <div className="mylearning-list-wrap">
                <Table className="ml-02-03">
                    <colgroup>
                        <col width="8%"/>
                        <col width="12%"/>
                        <col width="20%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                    </colgroup>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell className="title">과정명</Table.HeaderCell>
                            <Table.HeaderCell>학습유형</Table.HeaderCell>
                            <Table.HeaderCell>Level</Table.HeaderCell>
                            <Table.HeaderCell>
                                <a href={()=>false}>
                                    학습시간 <Icon className="list-up16"/>
                                </a>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <a href={()=>false}>
                                    최근학습일 <Icon className="list-up16"/>
                                </a>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <a href={()=>false}>
                                    진행률 <Icon className="list-down16"/>
                                </a>
                            </Table.HeaderCell>
                            <Table.HeaderCell>학습상태</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>20</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가?</span>
                            </Table.Cell>
                            <Table.Cell>Experiential</Table.Cell>
                            <Table.Cell>Intermediate</Table.Cell>
                            <Table.Cell>00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                            <Table.Cell>학습중</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>19</Table.Cell>
                            <Table.Cell>AI</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                            <Table.Cell>학습중</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>18</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                            <Table.Cell>학습중</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>17</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                            <Table.Cell>학습중</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>16</Table.Cell>
                            <Table.Cell>BM Design &amp; Storytelling</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                            <Table.Cell>학습중</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>15</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                            <Table.Cell>학습중</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>14</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>3/3</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>13</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                            <Table.Cell>학습중</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>12</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                            <Table.Cell>학습중</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>11</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                            <Table.Cell>학습중</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>10</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2021.11.22</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                            <Table.Cell>학습중</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default CardListBoard