import React, {Component} from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import AccordionChannelList from '../AccordionChannelList'
import ClearInputBox from "../ClearInputBox";

class ClassSeriesDetailModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <Modal size={size} open={open} onClose={this.close} className='base w1000 modal-channel-change'>

                <Modal.Header className='res'>
                    관심 Channel 변경
                    <span className="sub f12">맞춤형 학습카드 추천을 위한 관심 채널을 3개 이상 선택해주세요.</span>
                    <Button className='close24' onClick={this.close} ><Icon className='close24'/></Button>
                </Modal.Header>
                <Modal.Content>
                    <div className="channel-change">
                        <div className="table-css">
                            <div className="row head">
                                <div className="cell v-middle">
                                    <div className='cell-inner'>
                                        <span className="text01">Channel list</span>
                                        <ClearInputBox/>
                                    </div>
                                </div>
                                <div className="cell v-middle">
                                    <div className="cell-inner">
                                        <div>
                                            <span className="text01">Selected</span>
                                            <span className="count">
                                                <span className="text01 add">13</span><span className="text02"> / 134</span>
                                            </span>
                                        </div>
                                        <Button icon className='all-dt'><Icon className='delete14'/>전체삭제</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell vtop">
                                    <div className="select-area">
                                        <div className="scrolling-60vh">
                                            <AccordionChannelList/>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell vtop">
                                    <div className="select-area">
                                        <div className="scrolling-60vh">
                                            {/* .select-empty */}
                                            {/*<div className="select-empty">*/}
                                            {/*    Not Selected*/}
                                            {/*</div>*/}
                                            {/* // .select-empty */}
                                            {/* .select-item */}

                                            <div className="select-item">
                                                <Button className="del">AI Biz. Implementation</Button>
                                                <Button className="del">DT Biz.&amp; Implementation</Button>
                                                <Button className="del">AI Trend Watch</Button>
                                                <Button className="del">SKI계열 Biz. 이해(공통)</Button>
                                                <Button className="del">Deep Change(공통)</Button>
                                                <Button className="del">Trend View(공통)</Button>
                                                <Button className="del">직무역량(공통)</Button>
                                                <Button className="del">SKI계열 Leadership(공통)</Button>
                                                <Button className="del">Culture &amp; Value(공통)</Button>
                                                <Button className="del">CLX University(공통)</Button>
                                                <Button className="del">T-On(공통)</Button>
                                                <Button className="del">GC Green Channel(공통)</Button>
                                                <Button className="del">Newcomer(공통)</Button>
                                                <Button className="del">SKI계열 Biz. 이해(공통)</Button>
                                                <Button className="del">Deep Change(공통)</Button>
                                                <Button className="del">Trend View(공통)</Button>
                                                <Button className="del">직무역량(공통)</Button>
                                                <Button className="del">SKI계열 Leadership(공통)</Button>
                                                <Button className="del">Culture &amp; Value(공통)</Button>
                                                <Button className="del">CLX University(공통)</Button>
                                                <Button className="del">T-On(공통)</Button>
                                                <Button className="del">GC Green Channel(공통)</Button>
                                                <Button className="del">Newcomer(공통)</Button>
                                            </div>

                                            {/* // .select-item */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions className="actions">
                    {/* <Button className='w190 pop d' onClick={this.close}>Cancel</Button> */}
                    <Button className='w190 pop p' onClick={this.close}>변경</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ClassSeriesDetailModal;
