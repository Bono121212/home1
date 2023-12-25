
import React, {Component} from 'react';
import {Icon, Table} from 'semantic-ui-react';

class StampList extends Component {
    //
    render() {
        return (
            <div className="mystamp-list-wrap">
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell className="title">과정명</Table.HeaderCell>
                            <Table.HeaderCell>
                                스탬프
                                <a href={()=>false}>
                                    {/*오름차순 정렬 시 아이콘: list-up16*/}
                                    <Icon className="list-down16">
                                        <span className="blind">내림차순 정렬</span>
                                    </Icon>
                                </a>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                획득일자
                                <a href={()=>false}>
                                    {/*오름차순 정렬 시 아이콘: list-up16*/}
                                    <Icon className="list-down16">
                                        <span className="blind">내림차순 정렬</span>
                                    </Icon>
                                </a>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    {/*목록*/}
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>20</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>19</Table.Cell>
                            <Table.Cell>AI</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>18</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>17</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>16</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>15</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>14</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>13</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>12</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>11</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>10</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>9</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>8</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>7</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>6</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">
                                    AI와 Block chain과의 상관관계는 어떻게 되는가?
                                </span>
                            </Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                            <Table.Cell>
                                <a href={()=>false} className="btn-blue">학습하기</a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default StampList;