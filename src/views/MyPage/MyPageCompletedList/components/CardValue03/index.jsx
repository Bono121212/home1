import React, {Component} from 'react'
import { Icon, Label, Card, Button } from 'semantic-ui-react'
import {Link} from "react-router-dom";

class CardValue03 extends Component {

    render() {
        return (
            <Card>
                <div className="card-inner">
                    <div className="card-ribbon-wrap">
                        <Label className='ribbon2'>{/* Required */}핵인싸과정</Label>
                    </div>
                    {/* 썸네일 */}
                    <div className="thumbnail"/>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='teal'>Management</Label>
                        <div className="header">
                            <Link to={'/community/learning-community-main-community'}>
                                Machine learning Complete Guide for Calculus - Deep 말줄임 말줄임 말줄임 말줄임 ning
                                Complning Compl
                            </Link>
                        </div>
                        <div className="icon-area">
                            <Label className='onlytext'>
                                <Icon className='date'/><span>학습완료일 : 2019.01.31</span>
                            </Label>
                        </div>
                    </div>
                    <div className="btn-area">
                        <Button icon className='icon-big-line'>
                            <Icon className='play2'/><span>{/* View Details */} 상세보기</span>
                        </Button>
                    </div>
                    <div className="time-area">
                        <div className="location">
                            <Label className='onlytext bold'>
                                <Icon className='e-learning'/><span>e-learning</span>
                            </Label>
                            <div className="time">
                                <strong>50</strong><span>h</span><strong className="ml9">27</strong><span>m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValue03
