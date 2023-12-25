import React, {Component} from 'react';
import {Table, Icon} from 'semantic-ui-react';

class CardListBoard extends Component {
    render() {
        return (
            <div className="mylearning-list-wrap">
                <Table className="ml-02-03">
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
                                    스탬프 <Icon className="list-up16"/>
                                </a>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <a href={()=>false}>
                                    취소/미이수일 <Icon className="list-down16"/>
                                </a>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>Global</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">[Global Comm_Biz.이메일] 이메일 작성 시뮬레이션 Test</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Management</Table.Cell>
                            <Table.Cell className="title">
                                <span className="ellipsis">AI와 Block chain과의 상관관계는 어떻게 되는가A?</span>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Advanced</Table.Cell>
                            <Table.Cell>00h 00m</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>2020.02.02</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default CardListBoard