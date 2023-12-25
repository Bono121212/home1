import React, {Component} from 'react'
import { Label, Icon, Card, Button } from 'semantic-ui-react'

class CompletedLearningCardLearning extends Component {

    render() {
        return (
            <Card>
                <div className="card-inner">
                    {/*썸네일*/}
                    <div className="thumbnail"/>

                    <div className="title-area">
                        <Label color='teal'>Management</Label>
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


export default CompletedLearningCardLearning
