import React, {Component} from 'react'
import { Image, Label, Icon, Card, Button } from 'semantic-ui-react'

class CompletedLearningCardPlay extends Component {
    render() {
        return (
            <Card>
                <div className="card-inner">
                    {/*썸네일*/}
                    <div className="thumbnail">
                        <Image
                            alt='임시이미지'
                            size='small'
                            src='http://placehold.it/60x60'
                        />
                    </div>

                    <div className="title-area">
                        <Label color='blue'>Leadership</Label>
                        <div className="header">
                            <a href={()=>false}>
                                Machine learning Complete Guide for Calculus - Deep 말줄임 말줄임 말줄임 말줄임 ning Complning Compl
                            </a>
                        </div>
                        <div className="icon-area">
                            <Label className='onlytext'>
                                <Icon className='date'/><span>학습완료 : 2019.01.31</span>
                            </Label>
                        </div>
                    </div>
                    <div className="btn-area">
                        <Button className='icon-big-line'>
                            <Icon className='play2'/><span>{/* View Details */} 상세보기</span>
                        </Button>
                    </div>
                    <div className="time-area">
                        <div className="location">
                            <Label className='bold onlytext'>
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

export default CompletedLearningCardPlay
