import React, {Component} from 'react'
import {Accordion, Icon, Segment, Container} from 'semantic-ui-react'
import Editor from '../../../../Editor'

export default class FAQAccordion extends Component {
    state = {activeIndex: 0}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeIndex} = this.state

        return (
            <Accordion fluid styled>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <Icon className='dropdown'/>
                    파일 다운로드가 되지 않습니다.
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                   <p>dksjksj</p>


                    <Segment attached padded>
                        <Container>
                                <Editor readOnly/>
                        </Container>
                        Ccp
                        <div className="quill ">
                            <div className="ql-container ql-bubble ql-disabled">
                                <div className="ql-editor" data-gramm="false" contentEditable="false"><p>탈퇴를 원하시는
                                    경우,</p><p>홈 &gt; 우측 상단의 전체메뉴 &gt; MY 홈 관리 &gt; 계정관리에서 회원탈퇴 신청이 가능합니다.</p><p><br/></p>
                                    <p><img src="https://www.sktsmarthome.com/resources/img/faq/content/1-9.png" alt=''/></p><p>
                                        <br/></p><p>※단, 탈퇴시 해당 아이디는 영구적으로 사용이 중지되므로 새로운 아이디로만 재가입이 가능합니다.</p></div>
                                <div className="ql-clipboard" contentEditable="true" tabIndex="-1"></div>
                                {/*<div className="ql-tooltip ql-hidden" style="margin-top: 0px;"><span*/}
                                {/*    className="ql-tooltip-arrow"></span>*/}
                                {/*    <div className="ql-tooltip-editor"><input type="text" data-formula="e=mc^2"*/}
                                {/*                                              data-link="https://quilljs.com"*/}
                                {/*                                              data-video="Embed URL"/><a*/}
                                {/*        className="ql-close"></a></div>*/}
                                {/*    <div className="ql-toolbar"><span className="ql-formats"><button type="button"*/}
                                {/*                                                                     className="ql-bold"><svg*/}
                                {/*        viewBox="0 0 18 18"> <path className="ql-stroke"*/}
                                {/*                                   d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path> <path*/}
                                {/*        className="ql-stroke"*/}
                                {/*        d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path> </svg></button><button*/}
                                {/*        type="button" className="ql-italic"><svg viewBox="0 0 18 18"> <line*/}
                                {/*        className="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line> <line*/}
                                {/*        className="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line> <line*/}
                                {/*        className="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line> </svg></button><button*/}
                                {/*        type="button" className="ql-link"><svg viewBox="0 0 18 18"> <line*/}
                                {/*        className="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line> <path*/}
                                {/*        className="ql-even ql-stroke"*/}
                                {/*        d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path> <path*/}
                                {/*        className="ql-even ql-stroke"*/}
                                {/*        d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path> </svg></button></span><span*/}
                                {/*        className="ql-formats"><button type="button" className="ql-header" value="1"><svg*/}
                                {/*        viewBox="0 0 18 18"> <path className="ql-fill"*/}
                                {/*                                   d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"></path> </svg></button><button*/}
                                {/*        type="button" className="ql-header" value="2"><svg viewBox="0 0 18 18"> <path*/}
                                {/*        className="ql-fill"*/}
                                {/*        d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"></path> </svg></button><button*/}
                                {/*        type="button" className="ql-blockquote"><svg viewBox="0 0 18 18"> <rect*/}
                                {/*        className="ql-fill ql-stroke" height="3" width="3" x="4" y="5"></rect> <rect*/}
                                {/*        className="ql-fill ql-stroke" height="3" width="3" x="11" y="5"></rect> <path*/}
                                {/*        className="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"></path> <path*/}
                                {/*        className="ql-even ql-fill ql-stroke"*/}
                                {/*        d="M14,8c0,4.031-3,5-3,5"></path> </svg></button></span></div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                        skjaksjksj<br/>
                    </Segment>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <Icon className='dropdown'/>
                    동영상 재생이 되지 않습니다.

                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>
                        동영상이 이용되지 않는 경우, 아래의 내용을 참고하여 플레이어 삭제, 재설치 후 이용해 보시기 바랍니다. 고객센터 1. 운영시간: 연중무휴 (00:00~00:00) 2.
                        대표번호: 0000-0000 (내선 1-2번)
                    </p>
                </Accordion.Content>
            </Accordion>
        )
    }
}
