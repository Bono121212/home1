import React, {Component} from 'react'
import { Icon, Button, Label, Card, Rating } from 'semantic-ui-react'

class CardValue04 extends Component {
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
                    <Label className='ribbon2'>{/* Required */}핵인싸과정</Label>
                </div>
                <div className="card-inner">
                    {/* 썸네일 */}
                    <div className="thumbnail"/>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='purple'>AI</Label>
                        <div className="header">Affiliate Marketing Masterclass: Newbie to
                            Advanced Bootcamp
                        </div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='classroom'/><span>Classroom</span>
                            </Label>
                            <span className="g-text">수강신청</span>
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
                        <Label className='onlytext bold'>
                            <Icon className='state'/><span>{/* Required */}권장과정</span>
                        </Label>
                        <div className="study-date">2019.10.10 필수 학습 등록</div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="title-area">
                        <Label color='purple'>AI</Label>
                        <div className="header">Affiliate Marketing Masterclass: Newbie to
                            Advanced Bootcamp
                        </div>
                    </div>
                    <p className="text-area">
                        This is a template for a simple marketing or informational website. It
                        includes a large callout called a jumbo Tron and three
                    </p>
                    <div className="btn-area">
                        <Button icon className="icon-line">
                            <Icon className="add-list"/>
                            <span className="blind">Add to my list</span>
                        </Button>
                        <Button className="fix bg">{/* View Details */} 상세보기</Button>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValue04
