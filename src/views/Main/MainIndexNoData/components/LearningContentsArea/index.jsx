import React, {Component} from 'react';
import {
    Button, Icon, Segment
} from "semantic-ui-react";

class LearningContentsArea extends Component {
    render() {
        return (
            <>
                <div className="scrolling-area area2">
                    <Segment className='full'>

                        {/*권장학습*/}
                        <div className='section-head'>
                            <strong>SK 구성원이라면 꼭 들어야 하는 필수 권장 학습 과정!</strong>
                            <div className='right'>
                                <Button className='right btn-blue'>
                                    <Icon className='morelink'/>
                                </Button>
                            </div>
                        </div>
                        <div className='no-cont-wrap'>
                            <Icon className='no-contents80'/>
                            <div className='text'>권장과정에 해당하는 학습 과정이 없습니다.</div>
                        </div>


                        {/*신규학습*/}
                        <div className='section-head'>
                            <strong>mySUNI 5월 4주 신규 학습 과정</strong>
                            <div className='right'>
                                <Button className='right btn-blue'>
                                    <Icon className='morelink'/>
                                </Button>
                            </div>
                        </div>
                        <div className='no-cont-wrap'>
                            <Icon className='no-contents80'/>
                            <div className='text'>신규로 등록된 학습 과정이 없습니다.</div>
                            <Button icon className='right btn-blue2'>
                                <span className='border'>
                                    <span className='ellipsis'>김유니</span> 님에게 추천하는 학습 과정 보기
                                </span>
                                <Icon className='morelink'/>
                            </Button>
                        </div>


                        {/*인기과정*/}
                        <div className='section-head'>
                            <strong>김유니님을 위한 인기 과정입니다.</strong>
                            <div className='right'>
                                <Button className='right btn-blue'>
                                    <Icon className='morelink'/>
                                </Button>
                            </div>
                        </div>
                        <div className='no-cont-wrap'>
                            <Icon className='no-contents80'/>
                            <div className='text'>신규로 등록된 학습 과정이 없습니다.</div>
                            <Button icon className='right btn-blue2'>
                                <span className='border'>
                                    <span className='ellipsis'>김유니김유니김유니김유니김유니김유니김유니김유니</span> 님에게 추천하는 학습 과정 보기
                                </span>
                                <Icon className='morelink'/>
                            </Button>
                        </div>

                    </Segment>
                </div>
            </>
        )
    }
}

export default LearningContentsArea