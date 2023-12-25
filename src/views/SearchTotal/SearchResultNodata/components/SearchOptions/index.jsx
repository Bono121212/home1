import React, {Component} from 'react';
import { Accordion, Icon, Image, Button } from 'semantic-ui-react';

import Calendar from '../Calendar';


import DroupDownOff from '../../../../../images/all/dropdown-off.png';
import DroupDownOn from '../../../../../images/all/dropdown-on.png';
import btnDelete from '../../../../../images/all/btn-history-delete-blue.png';
import btnReset from '../../../../../images/all/icon-reset-28.png';



class SearchOptions extends Component {
    state = { activeIndex: 1 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }

    render () {
        const { activeIndex } = this.state

        return (
            <>
                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                    >
                       <div className="inner">
                           <div className="btn">
                                <Image src={DroupDownOff} className="btn_options_off" alt="검색옵션버튼Off"/>
                                <Image src={DroupDownOn} className="btn_options_on" alt="검색옵션버튼On"/>
                                <span className="options_cnt">(99)</span>
                           </div>
                       </div>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <div className="s_options_area">
                            <div className="inner">
                                <dl>
                                    <dt><span>교육일정</span></dt>
                                    <dd>
                                        <ul className="s_options_list">
                                            <li><Button type="button">수강신청가능</Button></li>
                                            <li>
                                                <Button type="button" className="on">직접입력</Button>
                                                <Calendar />
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><span>Category</span></dt>
                                    <dd>
                                        <ul className="s_options_list">
                                            <li><Button type="button">AI(20)</Button></li>
                                            <li><Button type="button">DT(20)</Button></li>
                                            <li><Button type="button">행복(20)</Button></li>
                                            <li><Button type="button">SV·ESG(20)</Button></li>
                                            <li><Button type="button" className="on">혁신디자인(20)</Button></li>
                                            <li><Button type="button">Global(20)</Button></li>
                                            <li><Button type="button">Leadership(20)</Button></li>
                                            <li><Button type="button">Management(20)</Button></li>
                                            <li><Button type="button">미래반도체(20)</Button></li>
                                            <li><Button type="button">Green(20)</Button></li>
                                            <li><Button type="button">BM Design &amp; Storytelling(20)</Button></li>
                                            <li><Button type="button">SK경영(20)</Button></li>
                                            <li><Button type="button">SK아카데미(20)</Button></li>
                                            <li><Button type="button">Life Style(20)</Button></li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><span>난이도</span></dt>
                                    <dd>
                                        <ul className="s_options_list">
                                            <li><Button type="button">Basic</Button></li>
                                            <li><Button type="button">Intermediate</Button></li>
                                            <li><Button type="button" className="on">Advanced</Button></li>
                                            <li><Button type="button">Expert</Button></li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><span>교육유형</span></dt>
                                    <dd>
                                        <ul className="s_options_list">
                                            <li><Button type="button">Course</Button></li>
                                            <li><Button type="button">Video</Button></li>
                                            <li><Button type="button">Audio</Button></li>
                                            <li><Button type="button">Documents</Button></li>
                                            <li><Button type="button">Discussion</Button></li>
                                            <li><Button type="button">Web page</Button></li>
                                            <li><Button type="button">E-Learning</Button></li>
                                            <li><Button type="button" className="on">Classroom</Button></li>
                                            <li><Button type="button">Task</Button></li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><span>학습시간</span></dt>
                                    <dd>
                                        <ul className="s_options_list">
                                            <li><Button type="button">~30분</Button></li>
                                            <li><Button type="button">30분~1시간</Button></li>
                                            <li><Button type="button"  className="on">1시간~4시간</Button></li>
                                            <li><Button type="button">4시간~12시간</Button></li>
                                            <li><Button type="button">12시간~</Button></li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl className="w50">
                                    <dt><span>핵인싸</span></dt>
                                    <dd>
                                        <ul className="s_options_list">
                                            <li><Button type="button">포함</Button></li>
                                            <li><Button type="button" className="on">미포함</Button></li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl className="w50">
                                    <dt><span>Badge</span></dt>
                                    <dd>
                                        <ul className="s_options_list">
                                            <li><Button type="button" className="on">포함</Button></li>
                                            <li><Button type="button">미포함</Button></li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl className="reset_box">
                                    <dt><Image src={btnReset} alt="옵션초기화"/><span>옵션초기화</span></dt>
                                    <dd>
                                        <ul className="s_options_list slt">
                                            <li><span className="slt_word">혁신디자인<Button type="button"><Image src={btnDelete} alt="닫기"/></Button></span></li>
                                            <li><span className="slt_word">Advanced<Button type="button"><Image src={btnDelete} alt="닫기"/></Button></span></li>
                                            <li><span className="slt_word">Classroom<Button type="button"><Image src={btnDelete} alt="닫기"/></Button></span></li>
                                            <li><span className="slt_word">1시간~4시간<Button type="button"><Image src={btnDelete} alt="닫기"/></Button></span></li>
                                            <li><span className="slt_word">핵인싸 미포함<Button type="button"><Image src={btnDelete} alt="닫기"/></Button></span></li>
                                            <li><span className="slt_word">Badge 포함<Button type="button"><Image src={btnDelete} alt="닫기"/></Button></span></li> 
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </Accordion.Content>
                </Accordion>
                
            </>
        )
    }
}

export default SearchOptions;