import React, {Component} from 'react';
import {Table, Checkbox, Icon} from 'semantic-ui-react';
import { Link } from "react-router-dom";

class CardListBoard extends Component {
    render() {
        return (
            <div className="mylearning-list-wrap">                
                {/* 2021-12 !!! colgroup width %변경/ml-02-03에서 ml-02-02로 클래스명 변경해주세요.*/}
                <Table className="ml-02-02">                    
                    <colgroup>
                        <col width="4%"/>
                        <col width="4%"/>
                        <col width="15%"/>
                        <col width="21%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="8%"/>
                        <col width="8%"/>
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
                            <Table.HeaderCell className='title'>과정명</Table.HeaderCell>
                            <Table.HeaderCell>학습유형</Table.HeaderCell>
                            <Table.HeaderCell>Level</Table.HeaderCell>
                            <Table.HeaderCell>학습시간<a href={()=>false}><Icon className='list-down16'/><span className='blind'>내림차순 정렬</span></a></Table.HeaderCell>
                            <Table.HeaderCell>최근학습일<a href={()=>false}><Icon className='list-down16'/><span className='blind'>내림차순 정렬</span></a></Table.HeaderCell>
                            <Table.HeaderCell>진행률</Table.HeaderCell>
                            <Table.HeaderCell>학습상태</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>20</Table.Cell>
                            <Table.Cell>BM Design &amp; Storytelling</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>e-Learning</Table.Cell>
                            <Table.Cell>Intermediate</Table.Cell>
                            <Table.Cell>128h 12m</Table.Cell>
                            <Table.Cell>2021.12.30</Table.Cell>
                            <Table.Cell>100/140</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>19</Table.Cell>
                            <Table.Cell>BM Design &amp; Storytelling</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가AI와 Block chain과의 상관관계는 어떻게 되는가?</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Intermediate</Table.Cell>
                            <Table.Cell>128h 12m</Table.Cell>
                            <Table.Cell>2021.12.30</Table.Cell>
                            <Table.Cell>40/40</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>18</Table.Cell>
                            <Table.Cell>SK㈜_C&amp;C</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>138h 12m</Table.Cell>
                            <Table.Cell>2021.12.30</Table.Cell>
                            <Table.Cell>4/4</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>17</Table.Cell>
                            <Table.Cell>SK㈜_C&amp;C</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Intermediate</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>4/4</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>16</Table.Cell>
                            <Table.Cell>SK㈜_C&amp;C</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>4/4</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>15</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>4/4</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>14</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>4/4</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>13</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>4/4</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>12</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>4/4</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>11</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>4/4</Table.Cell>
                            <Table.Cell>학습완료</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>10</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>0/4</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>9</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>0/4</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>8</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>0/4</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>7</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>0/4</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>6</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis noteOn">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>0/4</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>0/4</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>0/4</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>0/4</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>0/4</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Checkbox><span className='blind'>선택</span></Checkbox></Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>Course</Table.Cell>
                            <Table.Cell className="title">
                                <Link to="/">
                                    <span className="ellipsis">[2021하반기] Digital 플랫폼 Sales 및 제안 전략 과정 영상</span>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>Video</Table.Cell>
                            <Table.Cell>Basic</Table.Cell>
                            <Table.Cell>0h 12m</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                            <Table.Cell>0/4</Table.Cell>
                            <Table.Cell>-</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default CardListBoard