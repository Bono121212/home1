import React, {Component} from 'react'
import {
    Button,
    Modal,
} from 'semantic-ui-react'

class CompletedAddPersonalLearningModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w700'>
                    <Modal.Header className='res'>
                        Completed Add Personal Learning
                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="content-wrap1">
                                <div className="table-css type1">
                                    <div className="row">
                                        <div className="cell th"><span className="dot">강좌명</span></div>
                                        <div className="cell"><span className="text1">Mobile App UI UX GUI Design Tutorials (모바일 앱 UX UI GUI 디자인 실무)</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="cell"><span className="dot">학습유형</span></div>
                                        <div className="cell"><span className="text1">Classroom</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="cell"><span className="dot">카테고리</span></div>
                                        <div className="cell">
                                            <div><span className="text1">대분류</span><span className="dash"/><span
                                                className="text1">Leadership</span></div>
                                            <div className="text4"><span className="text1">중분류</span><span
                                                className="dash"/><span className="text1">Leading My Self</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="cell"><span className="dot">기간</span></div>
                                        <div className="cell"><span className="text2">2020. 01. 31 ~ 2020. 02. 02</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="cell"><span className="dot">소요시간</span></div>
                                        <div className="cell"><span className="text2">00h 00m</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="cell"><span className="dot">승인자</span></div>
                                        <div className="cell"><span className="text1">박민철</span><span className="text3">( SK telecom / 플래폼사업 1팀 / 팀장 )</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="cell"><span className="dot">강좌설명</span></div>
                                        <div className="cell"><span className="text1">앱 디자인 및 설계에 필요한 UX UI론, 모바일 앱 구분, 모바일 앱 해상도, 나인패치, 앱 컬러, 아이콘 등 실제 앱 디자인에 필요한기술 위주의 내용으로 앱 디자인에 필요한 다양한 기술적인 접근방식으로 앱 디자인 실무에 필요한 스킬위주의 강좌입니다.</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="cell"><span className="dot">URL</span></div>
                                        <div className="cell"><span className="text1">
                                            <a href={()=>false} target="_blank" rel="noopener noreferrer">https://SKuniversity.com/front/courseinfo/campus.action</a></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="cell"><span className="dot">첨부파일</span></div>
                                        <div className="cell"><span className="text1"><a href={()=>false}>filename.zip</a></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions2">
                        <Button className='pop2 p' onClick={this.close}>OK</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default CompletedAddPersonalLearningModal;
