import React, {Component} from 'react';
import { Icon, Label } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class TitleArea extends Component {

    render() {
        return (
            <div className="contents-header">
                <div className="title-area">
                    <Label color="mpurple">Leadership</Label>
                    <div className="header">
                        Coaching Leadership - 리더에게는 선택이 아닌 필수
                    </div>
                    <div className="header-detail">
                        <div className="item">
                            <Label className="bold onlytext">
                                <Icon className="inter" />
                                <span>Intermediate</span>
                            </Label>
                            <Label className="bold onlytext">
                                <Icon className="time2" />
                                <span>1h 36m</span>
                            </Label>
                            <Label className="bold onlytext">
                                <span className="header-span-first">강사</span>
                                <span className="tool-tip">고현숙</span>
                            </Label>
                            <Label className="bold onlytext">
                                <span className="header-span-first">교육형태</span>
                                <span className="tool-tip">Video</span>
                            </Label>
                            <Label className="bold onlytext">
                                <span className="header-span-first">이수</span>
                                <span className="tool-tip">3,122명</span>
                            </Label>
                        </div>
                        <div className="link-area">
                            <Link to="/" className="home">강의 홈</Link>
                            <Link to="/" className="list">목록</Link>
                        </div>
                    </div>
                </div>
            </div>    
        );
    };
};

export default TitleArea;