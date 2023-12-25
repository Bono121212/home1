import React, {Component} from 'react'
import { Image, Label, Icon, Rating, Card, Button } from 'semantic-ui-react'

class BasicTypeHoverAddList extends Component {


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
                {/*Basic Card1*/}
                {/* hover 시 on class 추가 */}
                <Card className={`card-h ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                      onMouseLeave={() => this.handleHover(false)}>
                    <div className="card-inner">

                        <div className="thumbnail">
                            <Image
                                alt='임시이미지'
                                size='small'
                                src='http://placehold.it/60x60'
                            />
                        </div>

                        <div className="title-area">
                            <Label color='purple'>AI</Label>
                            <div className="header">Basic Card &gt; 학습카드 / 코스카드 /add to my list 버튼</div>
                        </div>
                        <div className="icon-area">
                            <div className="li">
                                <Label className='bold onlytext'>
                                    <Icon className='classroom'/><span>Classroom</span>
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
                    {/*hover 시 컨텐츠*/}
                    <div className="hover-content">
                        <div className="title-area">
                            <Label color='purple'>AI</Label>
                            <div className="header">Basic Card &gt; 학습카드 / 코스카드 /add to my list 버튼</div>
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


export default BasicTypeHoverAddList
