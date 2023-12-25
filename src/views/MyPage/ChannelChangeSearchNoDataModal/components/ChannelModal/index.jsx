import React, {Component} from 'react'
import {
    Button,
    Modal,
    Icon,
} from 'semantic-ui-react'
import ClearInputBox from '../ClearInputBox'

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
                                    <div className="cell-inner">
                                        <span className="text01">Channel list</span>
                                        <ClearInputBox/>
                                    </div>
                                </div>
                                <div className="cell v-middle">
                                    <div className="cell-inner">
                                        <div>
                                            <span className="text01">Selected</span>
                                            <span className="count">
                                                <span className="text01 add">0</span><span className="text02"> / 0</span>
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
                                            {/* .search-empty */}
                                            <div class="search-empty">
                                                <Icon className='no-contents50'/>
                                                <div>검색된 Channel이 없습니다.</div>
                                            </div>
                                            {/* // .search-empty */}
                                        </div>
                                    </div>
                                </div>
                                <div className="cell vtop">
                                    <div className="select-area">
                                        <div className="scrolling-60vh">
                                            {/* .search-empty */}
                                            <div class="search-empty">
                                                <Icon className='no-contents50'/>
                                                <div>선택된 Channel이 없습니다.</div>
                                            </div>
                                            {/* // .search-empty */}
                                            {/* // .select-empty */}
                                            {/* .select-item */}
                                            {/*<div className="select-item">*/}
                                            {/*    <button className="ui button del">AI 공통 1 (이것만 검색되라)</button>*/}
                                            {/*    <button className="ui button del">AI 공통 1 (이것만 검색되라)</button>*/}
                                            {/*</div>*/}
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
