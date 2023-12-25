import React, {Component} from 'react'
import { Button, Modal, Table, Radio, Popup, Icon } from 'semantic-ui-react'

class ClassSeriesDetailModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                <Modal size={size} open={open} onClose={this.close} className='base w1000 inner-scroll'>

                    <Modal.Header className='res'>
                        {/*Class Series Detail*/}차수세부내용
                        <span className="sub f12">차수를 선택해주세요.</span>
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-60vh">
                            <Table className='head-fix ml-05-p02'>
                                <colgroup>
                                    <col width='6%'/>
                                    <col width='7%'/>
                                    <col width='16%'/>
                                    <col width='28%'/>
                                    <col width='11%'/>
                                    <col width='11%'/>
                                    <col width='9%'/>
                                    <col width='12%'/>
                                </colgroup>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell/>
                                        <Table.HeaderCell>차수</Table.HeaderCell>
                                        <Table.HeaderCell>강사</Table.HeaderCell>
                                        <Table.HeaderCell>장소</Table.HeaderCell>
                                        <Table.HeaderCell>정원정보</Table.HeaderCell>
                                        <Table.HeaderCell>수강신청 기간</Table.HeaderCell>
                                        <Table.HeaderCell>시작일 및 종료일</Table.HeaderCell>
                                        <Table.HeaderCell>취소 패널티</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Radio
                                                name='radioGroup'
                                                value='value01'
                                                checked={this.state.value === 'value01'}
                                                onChange={this.handleChange}
                                            />
                                            {/*<Radio/>*/}
                                        </Table.Cell>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell><span>김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리김빛나리</span></Table.Cell>
                                        <Table.Cell><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>0000</Table.Cell>
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
                                        <Table.Cell>
                                            <Radio
                                                name='radioGroup'
                                                value='value02'
                                                checked={this.state.value === 'value02'}
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>2</Table.Cell>
                                        <Table.Cell><span>김빛나리김빛나리</span></Table.Cell>
                                        <Table.Cell><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>0000</Table.Cell>
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
                                        <Table.Cell>
                                            <Radio
                                                name='radioGroup'
                                                value='value03'
                                                checked={this.state.value === 'value03'}
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>3</Table.Cell>
                                        <Table.Cell><span>김빛나리김빛나리</span></Table.Cell>
                                        <Table.Cell><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>0000</Table.Cell>
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
                                        <Table.Cell>
                                            <Radio
                                                name='radioGroup'
                                                value='value04'
                                                checked={this.state.value === 'value04'}
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>4</Table.Cell>
                                        <Table.Cell><span>김빛나리김빛나리</span></Table.Cell>
                                        <Table.Cell><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>0000</Table.Cell>
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
                                        <Table.Cell>
                                            <Radio
                                                name='radioGroup'
                                                value='value05'
                                                checked={this.state.value === 'value05'}
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>5</Table.Cell>
                                        <Table.Cell><span>김빛나리김빛나리</span></Table.Cell>
                                        <Table.Cell><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>0000</Table.Cell>
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
                                        <Table.Cell><Radio
                                            name='radioGroup'
                                            value='value06'
                                            checked={this.state.value === 'value06'}
                                            onChange={this.handleChange}
                                        /></Table.Cell>
                                        <Table.Cell>6</Table.Cell>
                                        <Table.Cell><span>김빛나리김빛나리</span></Table.Cell>
                                        <Table.Cell><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>0000</Table.Cell>
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
                                        <Table.Cell>
                                            <Radio
                                                name='radioGroup'
                                                value='value07'
                                                checked={this.state.value === 'value07'}
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>7</Table.Cell>
                                        <Table.Cell><span>김빛나리김빛나리</span></Table.Cell>
                                        <Table.Cell><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>0000</Table.Cell>
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
                                        <Table.Cell>
                                            <Radio
                                                name='radioGroup'
                                                value='value08'
                                                checked={this.state.value === 'value08'}
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>8</Table.Cell>
                                        <Table.Cell><span>김빛나리김빛나리</span></Table.Cell>
                                        <Table.Cell><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>0000</Table.Cell>
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
                                        <Table.Cell>
                                            <Radio
                                                name='radioGroup'
                                                value='value09'
                                                checked={this.state.value === 'value09'}
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>9</Table.Cell>
                                        <Table.Cell><span>김빛나리김빛나리</span></Table.Cell>
                                        <Table.Cell><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>0000</Table.Cell>
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
                                        <Table.Cell>
                                            <Radio
                                                name='radioGroup'
                                                value='value10'
                                                checked={this.state.value === 'value10'}
                                                onChange={this.handleChange}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>10</Table.Cell>
                                        <Table.Cell><span>김빛나리김빛나리</span></Table.Cell>
                                        <Table.Cell><span>SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실 SK telecom 본사 대회의실 14층 A라운지 두번째 회의실 우측 맞은편 C회의실, B회의실</span></Table.Cell>
                                        <Table.Cell>0000</Table.Cell>
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
                                </Table.Body>
                            </Table>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions">
                        <Button className='w190 pop d' onClick={this.close}>Cancel</Button>
                        <Button className='w190 pop p' onClick={this.close}>Select Complete</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default ClassSeriesDetailModal;
