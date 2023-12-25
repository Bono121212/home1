import React, {Component} from 'react'
import { Icon, Button, Form, Checkbox } from 'semantic-ui-react'
import classNames from "classnames";
import LearningTypeRadio from '../LearningTypeRadio';
import LearningTimeRadio from '../LearningTimeRadio';

class ContentsArea extends Component {
    state = {focus: false, write: '', isCheck : false};
    handleChange = () => {this.setState({isCheck : !this.state.isCheck, focus : !this.state.isCheck})}
    
    render() {
        //const {focus, write, isCheck} = this.state;
        return (
            <Form>
                <div className="type-check-wrap">
                    <div className="type-check-box type">
                        <h3 className="title-filter">학습유형</h3>
                        <LearningTypeRadio/>
                    </div>
                    <div className="type-check-box location">
                        <h3 className="title-filter">온라인 학습 중 선호하는 유형은 무엇인가요?</h3>
                        <div className="check-area">
                            <Checkbox label='Video' className='base'/>
                            <Checkbox label='팟캐스트(Audio)' className='base'/>
                            <Checkbox label='문서' className='base'/>
                            <Checkbox label='Live(실시간 생중계)' className='base'/>
                        </div>
                    </div>
                    <div className="type-check-box time">
                        <h3 className="title-filter">오프라인 학습 선호 시간대</h3>
                        <LearningTimeRadio/>
                    </div>
                    <div className="type-check-box purpose">
                        <h3 className="title-filter">어떤 목적으로 교육을 수강하고 싶은가요? <span>(중복 3개 선택 가능)</span></h3>
                        <div className="check-area">
                            <Checkbox label='새로운 지식과 트렌드를 배우기 위해' className='base'/>
                            <Checkbox label='현재 직무의 역량 강화를 위해' className='base'/>
                            <Checkbox label='직무 전환을 위한 역량 습득을 위해' className='base'/>
                            <Checkbox label='리더로 성장하기 위한 체계적 준비를 위해' className='base'/>
                            <div className="etc-wrap">
                                <Checkbox label='기타' className='base' onChange={this.handleChange} />
                                <div className={classNames("ui h48 input", {focus : this.state.focus, write: this.state.write, disabled : !this.state.isCheck})}>
                                    <input type="text" placeholder="Optional…"
                                           value={this.state.write}
                                           onClick={() => this.setState({focus: true})}
                                           onBlur={() => this.setState({focus: false})}
                                           onChange={(e) => this.setState({write: e.target.value})}
                                    />
                                    <Icon className="clear link" onClick={() => this.setState({write: ''})}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="select-error">
                    <Icon className='error16'/><span className="blind">error</span>
                    <span>학습형태 항목별 문의 사항에 대해 선택해주세요.</span>
                </div>
                <div className="button-area">
                    <Button className="fix bg">다음</Button>
                </div>
            </Form>
        )
    }
}

export default ContentsArea
