import React, { Component } from 'react';
import { Icon, Modal, Button } from 'semantic-ui-react';

class FoundationSkillApply2nd extends Component {
    state = {isOpen :true}
    close = () =>{this.setState({isOpen : false})}
    render(){
        const {isOpen} = this.state;

        return(
            <Modal
                open={isOpen}
                close={this.close}
                className='base w1000 modal-skill-apply'
                >
                    <Modal.Header className="res xfl">
                        Foundation Skill 신청하기
                        <Button className='close24' onClick={this.close} ><Icon className='close24'/></Button>
                    </Modal.Header>
                    <Modal.Content>
                        <div className='skill-apply-wrap'>
                            <div className="skill-apply-sec">
                                <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v1/img-event-pc-01-2nd.png" alt="" className='bg' />
                            </div>
                            <div className="skill-apply-sec">
                                <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v1/img-event-pc-02-2nd.png" alt="" className='bg' />
                                <div className="skill-apply-form">
                                    <div className='skill-download'>
                                        <button type='button' className='btn-down'>
                                            <img src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v1/btn-event-download.png" alt="과정별 개요 다운로드" />
                                        </button>
                                    </div>
                                    <div className='skill-cont'>
                                        <ul className='form-items'>
                                            <li className='item'>
                                                <div className='ui checkbox check-skill'>
                                                    <input class="hidden" name="skillCheck" id="skillCheck1" readonly="" tabindex="0" type="checkbox" value="Biz 가치를 창출하는 고객경험디자인 Skill"  checked disabled />
                                                    <label htmlFor="skillCheck1">
                                                        Biz 가치를 창출하는 고객경험디자인 Skill<Icon className='skill-new'><span className="blind">NEW</span></Icon>
                                                        <small>#Customer Experience Design</small>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className='item'>
                                                <div className='ui checkbox check-skill'>
                                                    <input class="hidden" name="skillCheck" id="skillCheck2" readonly="" tabindex="0" type="checkbox" value="환경변화에 대응하는 나의 업무 : 전략적으로 생각하기" disabled />
                                                    <label htmlFor="skillCheck2">
                                                        환경변화에 대응하는 나의 업무 : 전략적으로 생각하기<Icon className='skill-new'><span className="blind">NEW</span></Icon>
                                                        <small>#Future Biz. Perspective</small>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className='item'>
                                                <div className='ui checkbox check-skill'>
                                                    <input class="hidden" name="skillCheck" id="skillCheck3" readonly="" tabindex="0" type="checkbox" value="혁신가의 창의적 문제해결 Skill" />
                                                    <label htmlFor="skillCheck3">
                                                        혁신가의 창의적 문제해결 Skill
                                                        <small>#Business Model &amp; Storytelling</small>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className='item'>
                                                <div className='ui checkbox check-skill'>
                                                    <input class="hidden" name="skillCheck" id="skillCheck4" readonly="" tabindex="0" type="checkbox" value="컨설턴트의 논리적 문제해결 Skill" checked />
                                                    <label htmlFor="skillCheck4">
                                                        컨설턴트의 논리적 문제해결 Skill
                                                        <small>#Logical Problem Solving</small>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className='item'>
                                                <div className='ui checkbox check-skill'>
                                                    <input class="hidden" name="skillCheck" id="skillCheck4" readonly="" tabindex="0" type="checkbox" value="도전! 가치창출을 위한 새로운 비즈니스 모델 만들기" checked />
                                                    <label htmlFor="skillCheck4">
                                                        도전! 가치창출을 위한 새로운 비즈니스 모델 만들기
                                                        <small>#Business Model &amp; Storytelling</small>
                                                    </label>
                                                </div>
                                            </li>
                                            <li className='item'>
                                                <div className='ui checkbox check-skill'>
                                                    <input class="hidden" name="skillCheck" id="skillCheck4" readonly="" tabindex="0" type="checkbox" value="디지털 리터러시 : Digital 시대를 살아가기 위한 기초 체력" checked />
                                                    <label htmlFor="skillCheck4">
                                                        디지털 리터러시 : Digital 시대를 살아가기 위한 기초 체력
                                                        <small>#Digital Literacy</small>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className='form-items-write'>
                                            <p className='blind'>선발대에 참여하고 싶은 이유와 포부 등을 써주세요.</p>
                                            <div className='item-input'>
                                                <textarea name="skillTextarea" id="skillTextarea2" placeholder="" cols="30" rows="3">역량을 증대시키고 싶습니다.</textarea>
                                            </div>
                                        </div>

                                        <div className='form-action'>
                                            <Button className='btn-submit'>신청하기</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // skill-apply-check */}
                        </div>
                    </Modal.Content>
            </Modal>
        )
    }
}

export default FoundationSkillApply2nd