import React, {Component, createRef} from 'react'
import {
    Icon, Label, Card,
} from 'semantic-ui-react'

class CardValueStamp extends Component {

    render() {
        return (
            <Card>
                <div className="card-inner">
                    <div className="card-ribbon-wrap">
                        <Label className='ribbon2'>Stamp</Label>
                    </div>
                    {/* 썸네일 */}
                    <div className="thumbnail"/>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='teal'>Management</Label>
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
                        <div className="stamp">Stamp<strong>x2</strong></div>
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


export default CardValueStamp
