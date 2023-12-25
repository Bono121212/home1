import React, {Component} from 'react';
import { Accordion, Icon, Checkbox, Radio, Button } from 'semantic-ui-react';

//import SidePopular from '../SidePopular';
import Calendar from '../Calendar';

class ResultSide extends Component {
    state = { activeIndex: 0 }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }

    handleChange = (e, { value }) => this.setState({ value });
    
    render() {
        const { activeIndex } = this.state
        return (
            <div className="result_category">
                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                        >
                        Category
                        <Icon name='angle down' />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0} className="sty2">
                        <Button className="deselect" ><Icon className="close-grey"/>선택 해제</Button>
                        <ul>
                            <li><Checkbox label='AI'/><span>(20)</span></li>
                            <li><Checkbox label='DT'/><span>(13)</span></li>
                            <li><Checkbox label='행복'/><span>(14)</span></li>
                            <li><Checkbox label='SV·ESG'/><span>(13)</span></li>
                            <li><Checkbox label='혁신디자인'/><span>(16)</span></li>
                        </ul>
                        <Button className="btn_more">더보기<Icon color="grey" name="angle down"/></Button>
                    </Accordion.Content>
                </Accordion>

                <Accordion>    
                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={this.handleClick}
                        >
                        Badge
                        <Icon name='angle down' />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <ul>
                            <li>
                                <Radio 
                                    name="badgeOptions" 
                                    label="포함"
                                    value="badgeInclude"
                                    checked={this.state.value === 'badgeInclude'}
                                    onChange={this.handleChange}
                                />
                            </li>
                            {/* <li>
                                <Radio 
                                    name="badgeOptions" 
                                    label="미포함"
                                    value="badgeNotInclude"
                                    checked={this.state.value === 'badgeNotInclude'}
                                    onChange={this.handleChange}
                                />
                            </li> */}
                        </ul>
                    </Accordion.Content>
                </Accordion>

                <Accordion>    
                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={this.handleClick}
                        >
                        교육일정
                        <Icon name='angle down' />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <ul>
                            <li>
                                <Radio 
                                    name="periodOptions" 
                                    label="수강신청 가능"
                                    value="periodTypeA"
                                    checked={this.state.value === 'periodTypeA'}
                                    onChange={this.handleChange}
                                />
                            </li>
                            <li>
                                <Radio 
                                    name="periodOptions" 
                                    label="직접입력"
                                    value="periodTypeB"
                                    checked={this.state.value === 'periodTypeB'}
                                    onChange={this.handleChange}
                                />
                                <Calendar />

                            </li>
                        </ul>
                    </Accordion.Content>
                </Accordion>

                <Accordion>    
                    <Accordion.Title
                        active={activeIndex === 3}
                        index={3}
                        onClick={this.handleClick}
                        >
                        난이도
                        <Icon name='angle down' />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3} className="sty2">
                        <Button className="deselect" ><Icon className="close-grey"/>선택 해제</Button>
                        <ul>    
                            <li><Checkbox label='Basic'/><span></span></li>
                            <li><Checkbox label='Intermediate'/><span></span></li>
                            <li><Checkbox label='Advanced'/><span></span></li>
                            <li><Checkbox label='Expert'/><span></span></li>
                        </ul>
                    </Accordion.Content>
                </Accordion>

                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 4}
                        index={4}
                        onClick={this.handleClick}
                        >
                        교육유형
                        <Icon name='angle down' />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4} className="sty2">
                        <Button className="deselect" ><Icon className="close-grey"/>선택 해제</Button>
                        <ul>
                            <li><Checkbox label='Course'/></li>
                            <li><Checkbox label='Video'/></li>
                            <li><Checkbox label='Audio'/></li>
                            <li><Checkbox label='Documents'/></li>
                            <li><Checkbox label='Discussion'/></li>
                        </ul>
                        <Button className="btn_more">더보기<Icon color="grey" name="angle down"/></Button>
                    </Accordion.Content>
                </Accordion>

                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 5}
                        index={5}
                        onClick={this.handleClick}
                        >
                        학습시간
                        <Icon name='angle down' />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5} className="sty2">
                        <Button className="deselect" ><Icon className="close-grey"/>선택 해제</Button>
                        <ul>
                            <li><Checkbox label='~ 30분'/></li>
                            <li><Checkbox label='30분 ~ 1시간'/></li>
                            <li><Checkbox label='1시간 ~ 4시간'/></li>
                            <li><Checkbox label='4시간 ~ 12시간'/></li>
                            <li><Checkbox label='12시간 ~'/></li>
                        </ul>
                    </Accordion.Content>
                </Accordion>
                <Accordion>    
                    <Accordion.Title
                        active={activeIndex === 6}
                        index={6}
                        onClick={this.handleClick}
                        >
                        지원언어
                        <Icon name='angle down' />
                    </Accordion.Title>

                    <Accordion.Content active={activeIndex === 6} className="sty2" >
                        <Button className="deselect" ><Icon className="close-grey"/>선택 해제</Button>
                        <ul>
                            <li>
                                <Radio 
                                    name="LanguageOptions" 
                                    label="한국어"
                                    value="kor"
                                    checked={this.state.value === 'kor'}
                                    onChange={this.handleChange}
                                />
                            </li>
                            <li>
                                <Radio 
                                    name="LanguageOptions" 
                                    label="중국어"
                                    value="chn"
                                    checked={this.state.value === 'chn'}
                                    onChange={this.handleChange}
                                />
                            </li>
                            <li>
                                <Radio 
                                    name="LanguageOptions" 
                                    label="영어"
                                    value="eng"
                                    checked={this.state.value === 'eng'}
                                    onChange={this.handleChange}
                                />
                            </li>
                        </ul>
                    </Accordion.Content>
                </Accordion>

                <Button className="btn_reset"><Icon name="undo"/>옵션 초기화</Button>
            </div>                
        )
    }
}


export default ResultSide
