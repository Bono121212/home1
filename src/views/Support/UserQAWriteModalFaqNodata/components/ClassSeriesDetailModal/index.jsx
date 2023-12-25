import React, {Component} from 'react'
import {
    Button,
    Modal,
    Icon,
    Radio
} from 'semantic-ui-react'
// import AccordionFaq from '../AccordionFaq'
// import Paging from '../Paging'

class ClassSeriesDetailModal extends Component {
    state = {open: true, value : 'radio01'};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w1000 qna-write-modal'>

                    <Modal.Header className='res'>
                        {/*Class Series Detail*/}자주 찾는 질문
                    </Modal.Header>
                    <Modal.Content className="faq-modal-cont-area">

                        <div className="support-list-wrap faq modal-faq-container">
                            <div className="cate-wrap">
                                <div className="radio-wrap">
                                    <Radio
                                        className='base'
                                        label='전체'
                                        name='radioGroup'
                                        value='radio01'
                                        checked={this.state.value === 'radio01'}
                                        onChange={this.handleChange}
                                    />
                                    <Radio
                                        className='base'
                                        label='학습 Rule'
                                        name='radioGroup'
                                        value='radio02'
                                        checked={this.state.value === 'radio02'}
                                        onChange={this.handleChange}
                                    />
                                    <Radio
                                        className='base'
                                        label='Contents'
                                        name='radioGroup'
                                        value='radio03'
                                        checked={this.state.value === 'radio03'}
                                        onChange={this.handleChange}
                                    />
                                    <Radio
                                        className='base'
                                        label='System'
                                        name='radioGroup'
                                        value='radio04'
                                        checked={this.state.value === 'radio04'}
                                        onChange={this.handleChange}
                                    />
                                    <Radio
                                        className='base'
                                        label='College'
                                        name='radioGroup'
                                        value='radio05'
                                        checked={this.state.value === 'radio05'}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="list-top">
                                <div className="list-top-left">
                                    총 <strong>0개</strong>의 리스트가 있습니다.
                                </div>
                                <div className="list-top-right">
                                    <div className="ui input s-search h38">
                                        <input type="text" placeholder="검색어를 입력하세요." value="ㄱㄴㄷ"/>
                                        <Icon className="search-32"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="scrolling-60vh faq-list-wrap">
                            <div className="no-cont-wrap">
                                <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                                <div className="text">검색 결과가 없습니다.</div>
                                <Button icon className='rigth btn-blue2'>
                                    <a href="#recommend">전체 목록으로 이동하기</a>
                                    <Icon className='morelink'/>
                                </Button>
                            </div>

                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions">
                        <Button className='w190 pop d' onClick={this.close}>Cancel</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default ClassSeriesDetailModal;
