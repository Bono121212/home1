import React, {Component} from 'react';
import { Image, Label } from 'semantic-ui-react';
import profileImg from '../../../../../../images/all/profile-56-px.png';

class TitleArea extends Component {
    render() {
        return (
            <div className="main-info-area">
                <div className="external-info-wrap">
                    <div className="cell">
                        <div className="cell-inner">
                            <div className="profile">
                                <div className="pic">
                                    <Image src={profileImg} alt='프로필사진 임시이미지' />
                                </div>
                            </div>
                            <div className="text-info">
                                <div className="part">
                                    <span>안녕하세요!</span>
                                </div>
                                <div className="name">
                                    최선희 님
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="cell-inner">
                            <div className="expert-info1">
                                <Label className='onlytext'>
                                    <span>진행중인 강의</span>
                                </Label>
                                <span className="value2">
                                    <strong>14</strong><span>건</span>
                                </span>
                            </div>
                            <div className="expert-info1">
                                <Label className='onlytext'>
                                    <span>신규학습자</span>
                                </Label>
                                <span className="value2">
                                    <strong>14</strong><span>건</span>
                                </span>
                            </div>
                            <div className="expert-info1">
                                <Label className='onlytext'>
                                    <span>신규 댓글</span>
                                </Label>
                                <span className="value2">
                                    <strong>14</strong><span>건</span>
                                </span>
                            </div>
                            <div className="expert-info1">
                                <Label className='onlytext'>
                                   <span>과제 제출</span>
                                </Label>
                                <span className="value2">
                                    <strong>14</strong><span>건</span>
                                </span>
                            </div>
                            <div className="expert-info1">
                                <Label className='onlytext'>
                                    <span>테스트</span>
                                </Label>
                                <span className="value2">
                                    <strong>14</strong><span>건</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TitleArea
