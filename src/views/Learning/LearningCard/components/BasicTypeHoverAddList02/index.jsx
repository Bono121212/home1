import React, {Component} from 'react'
import { Label, Icon, Rating, Card, Button } from 'semantic-ui-react'

class BasicTypeHoverAddList02 extends Component {
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
                {/*Basic Card3*/}
                {/* hover 시 on class 추가 */}
                <Card className={`card-h ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                      onMouseLeave={() => this.handleHover(false)}>
                    <div className="card-inner">
                        {/*썸네일*/}
                        <div className="thumbnail"/>

                        <div className="title-area">
                            <Label color='pink-sub'>BM Design &#38; Storytelling</Label>
                            <div className="header">(제휴종료) 한국경제 주요 이슈 2</div>
                        </div>
                        <div className="icon-area">
                            <div className="li">
                                <Label className='bold onlytext'>
                                    <Icon className='course'/><span>Course</span>
                                </Label>
                            </div>
                            <div className="li">
                                <Label className='bold onlytext'>
                                    <Icon className='time2'/><span>1h 30m</span>
                                </Label>
                                <Label className='bold onlytext card-stamp'>
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
                                <Rating defaultRating={4} maxRating={5} size='small' disabled className='rating-num'/>
                            </div>
                        </div>
                    </div>
                    {/*hover 시 컨텐츠*/}
                    <div className="hover-content">
                        <div className="title-area">
                            <Label color='purple'>AI</Label>
                            <div className="header">Basic Card &gt; Stamp /Go to my learning 버튼</div>
                        </div>
                        <p className="text-area">
                            This is a template for a simple marketing or informational website. It includes a large
                            callout called a jumbo Tron and three
                        </p>
                        <div className="btn-area">
                            <Button icon className='icon-line'>
                                <Icon className='add-list'/><span className="blind">Go to my learning</span>
                            </Button>
                            <Button className='fix bg'>{/* View Details */} 상세보기</Button>
                        </div>
                    </div>
                </Card>
            </>
        )
    }
}

export default BasicTypeHoverAddList02
