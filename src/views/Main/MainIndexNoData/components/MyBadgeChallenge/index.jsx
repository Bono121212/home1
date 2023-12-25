import React, {Component} from 'react';
import {
    Button, Icon, Segment
} from "semantic-ui-react";


class MyBadgeChallenge extends Component {
    render() {
        return (
            <>
                <div className="scrolling-area badge-scrolling">
                    <Segment className="full">
                        <div className="section-head">
                            <strong>김유니님의 도전중인 Badge</strong>
                        </div>
                        <div className='no-cont-wrap'>
                            <Icon className='no-contents80'/>
                            <div className='text'>
                                도전중인 Badge가 없습니다.<br/>등록된 Badge 리스트에서 원하는 Badge에 도전해보세요.
                            </div>
                            <Button icon className='right btn-blue2'>
                                <span className='border'>Badge List 바로가기</span>
                                <Icon className='morelink'/>
                            </Button>
                        </div>

                    </Segment>
                </div>
            </>
        )
    }

}

export default MyBadgeChallenge