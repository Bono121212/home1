import React, {Component, createRef} from 'react'
import {
    Sticky, Icon, Button, Menu, Label, Card,
} from 'semantic-ui-react'

class CardValueStamp extends Component {
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
            <Card className={`card-h ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                  onMouseLeave={() => this.handleHover(false)}>
                <div className="card-ribbon-wrap">
                    <Label className='ribbon2'>Stamp</Label>
                </div>

                <div className="card-inner">
                    {/* 썸네일 */}
                    <div className="thumbnail"/>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='green'>Global</Label>
                        <div className="header">Mobile App UI/UX GUI Design Tutorials (모바일 앱 UX UI GUI
                            어쩌구저쩌구저쩌구어어쩌구)
                        </div>
                    </div>
                    <div className="icon-area">
                        <Label className='onlytext bold'>
                            <Icon className='video2'/><span>Video</span>
                        </Label>
                        <Label className='onlytext bold'>
                            <Icon className='time2'/><span>1h 30m</span>
                        </Label>
                        <Label className='onlytext'>
                            <Icon className='complete'/><span>이수 3,300명</span>
                        </Label>
                    </div>
                    <div className="foot-area">
                        <Label className='onlytext bold'>
                            <Icon className='state'/><span>Enrolled</span>
                        </Label>
                        <div className="study-date">2019.10.10 부터 학습 시작</div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="title-area">
                        <Label color='green'>Global</Label>
                        <div className="header">Machine learning Complete Guide for Calculus - Deep
                        </div>
                    </div>
                    <p className="text-area">
                        This is a template for a simple marketing or informational website. It includes
                        a large callout called a jumbo Tron and three
                    </p>
                    <div className="btn-area">
                        <Button icon className='icon-line'><Icon className='add-list'/></Button>
                        <Button className='fix bg'>{/* View Details */} 상세보기</Button>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueStamp
