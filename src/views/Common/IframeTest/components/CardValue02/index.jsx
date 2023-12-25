import React, {Component} from 'react'
import { Icon, Button, Label, Card, Rating } from 'semantic-ui-react'

class CardValue02 extends Component {
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
                <div className="card-inner">
                    {/* 썸네일 */}
                    <div className="thumbnail"/>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='purple'>AI</Label>
                        <div className="header">Machine learning Complete Guide for Calculus -
                            Deep
                        </div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='classroom'/><span>Classroom</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>1h 30m</span>
                            </Label>
                            <Label className='onlytext bold card-stamp'>
                                <Icon className='stamp'/><span>Stamp x4</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 3,300명</span>
                            </Label>
                        </div>
                    </div>
                    <div className="foot-area">
                        <div className="fixed-rating">
                            <Rating defaultRating={2} maxRating={5} size='small' disabled
                                    className='rating-num'/>
                        </div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="title-area">
                        <Label color='purple'>AI</Label>
                        <div className="header">Machine learning Complete Guide for Calculus -
                            Deep
                        </div>
                    </div>
                    <p className="text-area">
                        This is a template for a simple marketing or informational website. It
                        includes a large callout called a jumbo Tron and three
                    </p>
                    <div className="btn-area">
                        <Button icon className="icon-line">
                            <Icon className="remove2"/>
                            <span className="blind">Remove form my list</span>
                        </Button>
                        <Button className="fix bg">{/* View Details */} 상세보기</Button>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValue02
