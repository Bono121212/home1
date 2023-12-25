import React, {Component} from 'react'
import { Segment, Button, Icon } from 'semantic-ui-react'


class MyLearningInProgress extends Component {
    render() {
        return (
            <>
                <div className="scrolling-area area1">
                    <Segment className="full">
                        <div className="section-head">
                            <strong>김유니님이 학습중인 과정입니다</strong>
                        </div>
                        <div className='no-cont-wrap'>
                            <Icon className='no-contents80'/>
                            <div className='text'>진행중인 학습 과정이 없습니다.</div>
                            <Button icon className='right btn-blue2'>
                                <span className='border'>
                                    <span className='ellipsis'>김유니</span> 님에게 추천하는 학습 과정 보기
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


export default MyLearningInProgress
