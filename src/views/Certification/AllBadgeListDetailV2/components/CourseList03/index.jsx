import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";
import classNames from 'classnames';

class CourseList03 extends Component {

    state = {
        active: false
    }

    onClickToggle = () => this.setState({active: !this.state.active})

    render() {
        const { active } = this.state;

        return (
            <div className={classNames('course-box', 'type2', {'open': active})}>
                <div className='bar'>
                    <div className='tit'>
                        <span className='ellipsis'>3. 포노사피엔스 혁신의 파워</span>
                    </div>
                    <div className='num'>
                        <span>04개 강의 구성</span>
                        <span className="completed">학습완료</span>
                    </div>
                    {/*<div className='toggle-btn'>*/}
                        {/*<Button icon className='img-icon fn-more-toggle' onClick={this.onClickToggle}>*/}
                            {/*<Icon className={ active ? 'arrow-up s24' : 'arrow-down s24'}/>*/}
                            {/*<span className='blind'>{ active ? 'close' : 'open' }</span>*/}
                        {/*</Button>*/}
                    {/*</div>*/}
                </div>
                <div className='detail'>
                    <ul className='step1'>
                        <li>
                            <div className='tit'>
                                <span className='ellipsis'>3.1 Digital Transformation이 불러온 인류의 진화</span>
                            </div>
                            <div className='right'>
                                <span>Video</span>
                                <span>2h 50m</span>
                                <a href={()=>false} className='btn-play black'>
                                    <span className='text'>학습하기</span>
                                    <Icon className='play-black24'/>
                                </a>
                            </div>
                        </li>
                        <li className='step2'>
                            <div className='tit trs'>
                                <Icon className='icon-report24'/>
                                <span>Report</span>
                            </div>
                            <div className='right'>
                                <a href={()=>false} className='btn-play black'>
                                    <span className='text'>과제제출</span>
                                    <Icon className='play-black24'/>
                                </a>
                            </div>
                        </li>
                        <li className='step2'>
                            <div className='tit trs'>
                                <Icon className='icon-survey24'/>
                                <span>Survey</span>
                            </div>
                            <div className='right'>
                                <a href={()=>false} className='btn-play black'>
                                    <span className='text'>설문하기</span>
                                    <Icon className='play-black24'/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CourseList03;