import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky, Icon, Button, Menu, Label, Card,
} from 'semantic-ui-react'
import {Link} from "react-router-dom";

class CardValueElearning extends Component {

    render() {
        return (
            <Card>
                <div className="card-inner">
                    {/* 썸네일 */}
                    <div className="thumbnail completed">
                        <Link to={'#'}><span className="blind">상세보기</span></Link>
                    </div>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='blue'>Leadership</Label>
                        <div className="header">
                            <Link to={'#'}>
                                Machine learning Complete Guide for Calculus - Deep ning Complning Machine learning Complete Guide for Calculus - Deep ning Complning CCompl
                            </Link>
                        </div>
                        <div className="icon-area">
                            <Label className='onlytext'>
                                <Icon className='date'/><span>학습완료일 : 2019.01.31</span>
                            </Label>
                        </div>
                    </div>
                    <div className="btn-area">
                        <Button icon className='fix line'>
                            <span>{/* View Details */} 상세보기</span>
                        </Button>
                    </div>
                    <div className="time-area">
                        <div className="location">
                            <Label className='onlytext bold'>
                                <Icon className='e-learning'/><span>e-learning</span>
                            </Label>
                        </div>
                        <div className="time">
                            <strong>50</strong><span>h</span><strong className="ml9">27</strong><span>m</span>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueElearning
