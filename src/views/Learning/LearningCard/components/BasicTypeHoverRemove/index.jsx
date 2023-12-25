import React, {Component} from 'react'
import { Label, Icon, Rating, Card, Button } from 'semantic-ui-react'

class BasicTypeHoverRemove extends Component {
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
                {/*Basic Card2*/}
                {/*가격표시 없는 경우*/}
                {/* hover 시 on class 추가 */}
                <Card className={`card-h ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                      onMouseLeave={() => this.handleHover(false)}>
                    <div className="card-ribbon-wrap">
                        <Label className='ribbon2'>
                        {/* Required */} 핵인싸과정
                    </Label>
                    </div>
                    <div className="card-inner">
                        {/*썸네일*/}
                        <div className="thumbnail"/>

                        <div className="title-area">
                            <Label color='green'>Global</Label>
                            <div className="header">Basic Card &gt; Required 상태카드 /Remove form My list 버튼</div>
                        </div>
                        <div className="icon-area">
                            <div className="li">
                                <Label className='bold onlytext'>
                                    <Icon className='e-learning'/><span>e-learning</span>
                                </Label>
                                <span className="g-text">수강신청</span>
                            </div>
                            <div className="li">
                                <Label className='bold onlytext'>
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
                                <Rating defaultRating={4} maxRating={5} size='small' disabled className='rating-num'/>
                            </div>
                        </div>
                    </div>
                    <div className="hover-content">
                        <div className="title-area">
                            <Label color='green'>Global</Label>
                            <div className="header">Basic Card &gt; Required 상태카드 /Remove form My list 버튼</div>
                        </div>
                        <p className="text-area">
                            This is a template for a simple marketing or informational website. It includes a large
                            callout called a jumbo Tron and three
                        </p>
                        <div className="btn-area">
                            <Button icon className='icon-line'><Icon className='remove2'/></Button>
                            <Button className='fix bg'>{/* View Details */} 상세보기</Button>
                        </div>
                    </div>
                </Card>
            </>
        )
    }
}


export default BasicTypeHoverRemove
