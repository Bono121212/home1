import React, {Component} from 'react'
import { Button, Modal, Icon, Table, Popup } from 'semantic-ui-react'

class ClassSeriesDetailModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w1000 inner-scroll'>

                    <Modal.Header className='res'>
                        {/*Class Series Detail*/}차수세부내용
                        <span className="sub f12">차수의 상세 정보를 확인하세요.</span>
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-60vh">
                            <Table className='head-fix ml-05-p01'>
                                <colgroup>
                                    <col width='7%'/>
                                    <col width='13%'/>
                                    <col width='17%'/>
                                    <col width='20%'/>
                                    <col width='10%'/>
                                    <col width='10%'/>
                                    <col width='10%'/>
                                    <col width='7%'/>
                                </colgroup>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>차수</Table.HeaderCell>
                                        <Table.HeaderCell>강사</Table.HeaderCell>
                                        <Table.HeaderCell>담당자 정보 및 이메일</Table.HeaderCell>
                                        <Table.HeaderCell>교육장소/웹사이트</Table.HeaderCell>
                                        <Table.HeaderCell>정원정보</Table.HeaderCell>
                                        <Table.HeaderCell>수강신청기간</Table.HeaderCell>
                                        <Table.HeaderCell>교육기간</Table.HeaderCell>
                                        <Table.HeaderCell>취소 패널티</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리</li>
                                                <li>서지혜</li>
                                                <li>김수현</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red transition-scale'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>2</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>김빛나리</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <span className="empty-dash"/>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>3</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>김써니</li>
                                                <li>김수현</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>4</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>김빛나리</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>5</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>김빛나리</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>6</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ</li>
                                                <li>서지혜</li>
                                                <li>김수현</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>7</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>김수현</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>8</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>서지혜</li>
                                                <li>김수현</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>9</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>서지혜</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>10</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>김빛나리</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>11</Table.Cell>
                                        <Table.Cell>
                                            <ul className="teacher_list">
                                                <li>김빛나리</li>
                                            </ul>
                                        </Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>12</Table.Cell>
                                        <Table.Cell>김빛나리</Table.Cell>
                                        <Table.Cell>김빛나리<span className="dash"/>SK telecom<br/>test@test.com</Table.Cell>
                                        <Table.Cell className="el"><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>990/999</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>2020.01.20 ~<br/>2020.03.10</Table.Cell>
                                        <Table.Cell>
                                            <Popup
                                                content={<span>강좌 취소 시 다음 차수 완료에도 <br/> 불이익이 갈수 있음</span>}
                                                className='ui custom red'
                                                position='bottom right'
                                                trigger={<Button icon className='img-icon custom' content='Button'>
                                                    <Icon className='noti32'/><span className="blind">취소 패널티</span></Button>}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions">
                        <Button className='w190 pop p' onClick={this.close}>OK</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default ClassSeriesDetailModal;
