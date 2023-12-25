import React, {Component, createRef} from 'react'
import {
    Icon, Label, Card, Button,
} from 'semantic-ui-react'
import {Link} from "react-router-dom";

class CardValueCourse extends Component {

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
                        <Label color='teal'>Management</Label>
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
                                <Icon className='course'/><span>Course</span>
                            </Label>
                        </div>
                        <div className="stamp">Stamp<strong>x2</strong></div>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueCourse
