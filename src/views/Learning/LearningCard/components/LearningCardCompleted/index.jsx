import React, {Component} from 'react'
import { Label, Icon, Card, Button } from 'semantic-ui-react'

class LearningCardCompleted extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);

    }

    handleHover(isHovered) {
        this.setState({isHovered});
    }

    render() {
        const activeClass = this.state.isHovered ? 'on' : '';
        return (
            <>
                {/*상태값: Completed*/}
                {/* hover 시 on class 추가 */}
                <Card className={`card-h ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                      onMouseLeave={() => this.handleHover(false)}>
                    <div className="card-inner">
                        {/*썸네일*/}
                        <div className="thumbnail completed"/>

                        <div className="title-area">
                            <Label color='green'>Global</Label>
                            <div className="header">Affiliate Marketing
                            </div>
                        </div>
                        <div className="icon-area">
                            <div className="li">
                                <Label className='bold onlytext'>
                                    <Icon className='video2'/><span>Video</span>
                                </Label>
                            </div>
                            <div className="li">
                                <Label className='bold onlytext'>
                                    <Icon className='time2'/><span>1h 30m</span>
                                </Label>
                                {/*<Label className='bold onlytext card-stamp'>*/}
                                {/*    <Icon className='stamp'/><span>Stamp x4</span>*/}
                                {/*</Label>*/}
                            </div>
                            <div className="li">
                                <Label className='onlytext'>
                                    <Icon className='complete'/><span>이수 3,300명</span>
                                </Label>
                            </div>
                        </div>
                        <div className="foot-area">
                            <Label className='bold onlytext'>
                                <Icon className='state'/><span>{/* Completed */}학습완료</span>
                            </Label>
                            <div className="study-date">2019.10.10 학습 완료</div>
                        </div>
                    </div>
                    <div className="hover-content">
                        <div className="title-area">
                            <Label color='green'>Global</Label>
                            <div className="header">Affiliate Marketing</div>
                        </div>
                        <p className="text-area">
                            This is a template for a simple marketing or informational website. It includes a large
                            callout called a jumbo Tron and three
                        </p>
                        <div className="btn-area">
                            <Button icon className='icon-line'><Icon className='add-list'/></Button>
                            <Button className='fix bg'>{/* View Details */} 상세보기</Button>
                        </div>
                    </div>
                </Card>
            </>
        )
    }
}

export default LearningCardCompleted
