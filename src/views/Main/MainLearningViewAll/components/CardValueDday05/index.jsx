import React, {Component} from 'react'
import { Icon, Button, Label, Card, Rating } from 'semantic-ui-react'

class CardValueDday01 extends Component {
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
                <div className="card-day01-wrap">
                    <Label className='day'>D-<span>8</span></Label>
                </div>
                <div className="card-inner">
                    {/* 썸네일 */}
                    <div className="thumbnail"/>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='yellow'>행복</Label>
                        <div className="header">행복학개론 :행복의 오해와 진실</div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='classroom'/><span>Classroom</span>
                            </Label>
                            <span className='g-text size12'>유료과정&수강신청</span>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>1h 30m</span>
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
                            <Rating defaultRating={4} maxRating={5} size='small' disabled className='rating-num' />
                        </div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="title-area">
                        <Label color='yellow'>행복</Label>
                        <div className="header">행복학개론 :행복의 오해와 진실</div>
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


export default CardValueDday01
