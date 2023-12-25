import React, {Component} from 'react';
import { Button, Segment } from "semantic-ui-react";


class BadgeSection extends Component {
    render() {
        return (
            <>
                <Segment className="full learning-section badge-section type4">
                    <div className="section-head">
                        <div className="sec-tit-txt"><strong>도전중인 Badge</strong></div>
                        <div className="badge-listbox">
                            <div className="badge-list-wrap">
                                <div className="badge-no-data"><span>도전중인 Badge가 없습니다.</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="section-body">
                        <div className="badge-banner-wrap no-badge">
                            <div className="badge-txt-box">
                                <div className="badge-txt">
                                    <div className="badge-txt-big"><strong>현재 획득한 뱃지가 없습니다.</strong></div>
                                    <div className="badge-txt-sub">학습을 통해 뱃지를 획득하고 <br/>지식과 Skill을 인증 받으세요!</div>
                                </div>
                                <Button className="btn-badge-go">뱃지 도전하기!</Button>
                            </div>
                        </div>
                    </div>
                </Segment>
            </>
        )
    }

}

export default BadgeSection