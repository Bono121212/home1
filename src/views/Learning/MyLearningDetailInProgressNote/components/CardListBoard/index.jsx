import React, {Component} from 'react';
import {Table, Checkbox, Icon} from 'semantic-ui-react';
import { Link } from "react-router-dom";

class CardListBoard extends Component {
    render() {
        return (
            <div className="mylearning-list-wrap">                
                <Table className="ml-02-02">
                    <colgroup>
                        <col width="4%"/>
                        <col width="4%"/>
                        <col width="15%"/>
                        <col width="25%"/>
                        <col width="11%"/>
                        <col width="11%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                    </colgroup>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className="ck">
                                <Checkbox>
                                    <span className="blind">전체선택</span>
                                </Checkbox>
                            </Table.HeaderCell>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell className="title">과정명</Table.HeaderCell>
                            <Table.HeaderCell>학습유형</Table.HeaderCell>
                            <Table.HeaderCell>Level</Table.HeaderCell>
                            <Table.HeaderCell>
                                학습시간 
                                <a href={()=>false}><Icon className="list-up16"/></a>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                            최근학습일 
                                <a href={()=>false}><Icon className="list-down16"/></a>
                            </Table.HeaderCell>
                            <Table.HeaderCell>진행률</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>20</Table.Cell>
                            <Table.Cell>BM Design & Storytelling</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Experiential</Table.Cell>
                            <Table.Cell>Intermediate</Table.Cell>
                            <Table.Cell>00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>4/10</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>19</Table.Cell>
                            <Table.Cell>AI</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">AI와 Block chain</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>7/10</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>18</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>4/5</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>17</Table.Cell>
                            <Table.Cell>BM Design & Storytelling</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>1/3</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>16</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>4/10</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>15</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>0/1</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>14</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>1/0</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>13</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>9/10</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>12</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>6/7</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>11</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>4/5</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox>
                                    <span className="blind">선택</span>
                                </Checkbox>
                            </Table.Cell>
                            <Table.Cell>10</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>4/10</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default CardListBoard