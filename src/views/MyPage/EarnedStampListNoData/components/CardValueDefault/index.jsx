import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky, Icon, Button, Menu, Label, Card,
} from 'semantic-ui-react'

class CardValueDefault extends Component {

    render() {
        return (
            <Card>
                <div className="card-inner">
                    {/* 썸네일 */}
                    <div className="thumbnail"/>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='yellow'>행복</Label>
                        <div className="header">Machine learning Complete Guide for Calculus - Deep 말줄임 말줄임 말줄임 말줄임 ning
                            Complning Compl
                        </div>
                        <div className="icon-area">
                            <Label className='onlytext'>
                                <Icon className='date'/><span>학습완료일 : 2019.01.31</span>
                            </Label>
                        </div>
                    </div>
                    <div className="time-area">
                        <div className="time">
                            <strong>50</strong><span>h</span><strong className="ml9">27</strong><span>m</span>
                        </div>
                        <div className="location">
                            <span className="location-name">Learning Card</span>
                            <Label className='onlytext bold'>
                                <Icon className='video2'/><span>e-learning</span>
                            </Label>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueDefault
