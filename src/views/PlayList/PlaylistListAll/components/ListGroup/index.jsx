import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, Label} from 'semantic-ui-react';
import './style.css';

class ListGroup extends Component {
    render() {
        return (
            <div className="playlist-tbl">
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className="title">Playlist명</Table.HeaderCell>
                            <Table.HeaderCell>학습카드 수</Table.HeaderCell>
                            <Table.HeaderCell>만든 사람</Table.HeaderCell>
                            <Table.HeaderCell>좋아요</Table.HeaderCell>
                            <Table.HeaderCell>공유</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="title">
                                <Link to='/playlist/playlist-detail-reclist'><span className="ellipsis"><Label as='em' className='category reclist'>추천받은</Label> AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가?</span></Link>
                            </Table.Cell>
                            <Table.Cell>8</Table.Cell>
                            <Table.Cell>마스터 오브 캠핑</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>
                                <Button className='btn-share'><span className="blind">공유하기</span></Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                            <Link to='/playlist/playlist-detail-mylist'><span className="ellipsis"><Label as='em' className='category mylist'>내가만든</Label>[TM Speech] P4G 서울 정상회의 기조강연</span></Link>
                            </Table.Cell>
                            <Table.Cell>8</Table.Cell>
                            <Table.Cell>Benedict Cumberbatch</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>
                                <Button className='btn-share'><span className="blind">공유하기</span></Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                                <Link to='/playlist/playlist-detail-savelist'><span className="ellipsis"><Label as='em' className='category savelist'>내가담은</Label>[TM Speech] P4G 서울 정상회의 기조강연</span></Link>
                            </Table.Cell>
                            <Table.Cell>8</Table.Cell>
                            <Table.Cell>Benedict Cumberbatch</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>
                                <Button className='btn-share'><span className="blind">공유하기</span></Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                                <Link to='/playlist/playlist-detail-otherlist'><span className="ellipsis">우리팀 마음근력 키우기</span></Link>
                            </Table.Cell>
                            <Table.Cell>20</Table.Cell>
                            <Table.Cell>김써니</Table.Cell>
                            <Table.Cell>224</Table.Cell>
                            <Table.Cell>
                                <Button className='btn-share'><span className="blind">공유하기</span></Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                                <Link to='/playlist/playlist-detail-reclist'><span className="ellipsis"><Label as='em' className='category reclist'>추천받은</Label> AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가?</span></Link>
                            </Table.Cell>
                            <Table.Cell>8</Table.Cell>
                            <Table.Cell>마스터 오브 캠핑</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>
                                <Button className='btn-share'><span className="blind">공유하기</span></Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                            <Link to='/playlist/playlist-detail-mylist'><span className="ellipsis"><Label as='em' className='category mylist'>내가만든</Label>[TM Speech] P4G 서울 정상회의 기조강연</span></Link>
                            </Table.Cell>
                            <Table.Cell>8</Table.Cell>
                            <Table.Cell>Benedict Cumberbatch</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>
                                <Button className='btn-share'><span className="blind">공유하기</span></Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                                <Link to='/playlist/playlist-detail-savelist'><span className="ellipsis"><Label as='em' className='category savelist'>내가담은</Label>[TM Speech] P4G 서울 정상회의 기조강연</span></Link>
                            </Table.Cell>
                            <Table.Cell>8</Table.Cell>
                            <Table.Cell>Benedict Cumberbatch</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>
                                <Button className='btn-share'><span className="blind">공유하기</span></Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="title">
                                <Link to='/playlist/playlist-detail-otherlist'><span className="ellipsis">우리팀 마음근력 키우기</span></Link>
                            </Table.Cell>
                            <Table.Cell>20</Table.Cell>
                            <Table.Cell>김써니</Table.Cell>
                            <Table.Cell>224</Table.Cell>
                            <Table.Cell>
                                <Button className='btn-share'><span className="blind">공유하기</span></Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}
export default ListGroup;