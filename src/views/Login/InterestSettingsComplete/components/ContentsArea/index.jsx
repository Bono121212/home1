import React, {Component, createRef} from 'react'
import {
    Icon, Button, Form, Checkbox, Radio
} from 'semantic-ui-react'

class ContentsArea extends Component {
    state = {}
    handleChange = (e, {value}) => this.setState({value})

    render() {
        return (
            <Form>
                <div className="type-check-wrap">
                    <div className="type-check-box type">
                        <h3 className="title-filter">학습유형</h3>
                        <div className="check-area">
                            <Radio label='오프라인' className='base' defaultChecked/>
                            <Radio label='온라인' className='base'/>
                            <Radio label='상관없음' className='base'/>
                        </div>
                    </div>
                    <div className="type-check-box location">
                        <h3 className="title-filter">오프라인 학습 수강 가능 장소 <span>(중복 선택 가능)</span></h3>
                        <div className="check-area">
                            <Checkbox label='서울 - 강북' className='base' defaultChecked/>
                            <Checkbox label='서울 - 강남' className='base'/>
                            <Checkbox label='성남 - 분당' className='base'/>
                            <Checkbox label='이천' className='base'/>
                            <Checkbox label='대전' className='base'/>
                            <Checkbox label='울산' className='base'/>
                            <Checkbox label='부산' className='base'/>
                            <Checkbox label='광주' className='base'/>
                            <Checkbox label='대구' className='base'/>
                            <Checkbox label='상관없음' className='base'/>
                        </div>
                    </div>
                    <div className="type-check-box time">
                        <h3 className="title-filter">오프라인 학습 선호 시간대</h3>
                        <div className="check-area">
                            <Radio label='오전' className='base' defaultChecked/>
                            <Radio label='오후' className='base'/>
                            <Radio label='상관없음' className='base'/>
                        </div>
                    </div>
                    <div className="type-check-box purpose">
                        <h3 className="title-filter">어떤 목적으로 교육을 수강하고 싶은가요? <span>(중복 3개 선택 가능)</span></h3>
                        <div className="check-area">
                            <Checkbox label='새로운 지식과 트렌드를 배우기 위해' className='base' defaultChecked/>
                            <Checkbox label='현재 직무의 역량 강화를 위해' className='base'/>
                            <Checkbox label='직무 전환을 위한 역량 습득을 위해' className='base'/>
                            <Checkbox label='리더로 성장하기 위한 체계적 준비를 위해' className='base'/>
                            <div className="etc-input">
                                <label>기타</label>
                                <div className="ui h48 input">
                                    <input type="text" placeholder="Optional…"/>
                                    <Icon className='clear link'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="select-error">
                    <Icon className='error16'/><span className="blind">error</span>
                    <span>학습 유형을 선택해주세요.</span>
                </div>
                <div className="button-area">
                    <Button className="fix line">Previous</Button>
                    <Button className="fix bg">Submit</Button>
                </div>
            </Form>
        )
    }
}

export default ContentsArea
