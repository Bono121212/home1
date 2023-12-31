import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky, Icon, Button, Menu, Label, Card, Image,
} from 'semantic-ui-react'

class CardValuePlay extends Component {

    render() {
        return (
            <Card>
                <div className="card-inner">
                    {/* 썸네일 */}
                    <div className="thumbnail">
                        <Image src='http://placehold.it/70x70' alt='임시이미지' size='small'/>
                    </div>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='blue'>Leadership</Label>
                        <div className="header">Machine learning Complete Guide for Calculus - Deep 말줄임 말줄임 말줄임 말줄임 ning
                            Complning Compl
                        </div>
                        <div className="icon-area">
                            <Label className='onlytext'>
                                <Icon className='date'/><span>학습완료일 : 2019.01.31</span>
                            </Label>
                        </div>
                    </div>
                    <div className="btn-area">
                        <Button icon className='icon-big-line'>
                            <Icon className='play2'/><span>Play</span>
                        </Button>
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


export default CardValuePlay
