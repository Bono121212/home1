import React, {Component, createRef} from 'react'
import {
    Segment,
    Image, Label, Icon, Rating, Card, Button
} from 'semantic-ui-react'

class LabelStampState extends Component {
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
                {/*Stamp 상태카드*/}
                {/* hover 시 on class 추가 */}
                <Card className={`card-h ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                      onMouseLeave={() => this.handleHover(false)}>
                    <div className="card-ribbon-wrap">
                        <Label className='ribbon2'>Stamp</Label>
                    </div>
                    <div className="card-inner">
                        {/*썸네일*/}
                        <div className="thumbnail"/>

                        <div className="title-area">
                            <Label color='purple'>AI</Label>
                            <div className="header">Machine learning Complete Guide for Calculus - Deep</div>
                        </div>
                        <div className="icon-area">
                            <Label className='bold onlytext'>
                                <Icon className='video2'/><span>Course</span>
                            </Label>
                            <Label className='bold onlytext'>
                                <Icon className='time2'/><span>1h 30m</span>
                            </Label>
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 3,300명</span>
                            </Label>
                        </div>
                        <div className="foot-area">
                            <div className="fixed-rating">
                                <Rating defaultRating={4} maxRating={5} size='small' disabled className='rating-num'/>
                            </div>
                        </div>
                    </div>
                    <div className="hover-content">
                        <div className="title-area">
                            <Label color='purple'>AI</Label>
                            <div className="header">Machine learning Complete Guide for Calculus - Deep</div>
                        </div>
                        <p className="text-area">
                            This is a template for a simple marketing or informational website. It includes a large
                            callout called a jumbo Tron and three
                        </p>
                        <div className="btn-area">
                            <Button icon className='icon-line'><Icon className='remove2'/></Button>
                            <Button icon className='fix bg'>Go to this activity</Button>
                        </div>
                    </div>
                </Card>
            </>
        )
    }
}

export default LabelStampState
