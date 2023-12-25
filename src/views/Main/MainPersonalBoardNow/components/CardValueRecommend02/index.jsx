import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Button, Label, Card, Rating } from 'semantic-ui-react'

class CardValueRecommend02 extends Component {
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
                    {/* <Label className='ribbon2'>핵인싸과정</Label> */}
                </div>
                <div className="card-inner">
                    {/* 썸네일 */}
                    <div className="thumbnail"/>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='yellow'>행복</Label>
                        <div className="header">나의 행복실천 Design: Self</div> 
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='video'/><span>Video</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>50m</span>
                            </Label>
                            <Label className='onlytext bold card-stamp'>
                                <Icon className='stamp'/><span>Stamp x1</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 335명</span>
                            </Label>
                        </div>
                    </div>
                    <div className="foot-area">
                        <div className="fixed-rating">
                            <Rating defaultRating={3} maxRating={5} size='small' disabled className='rating-num' />
                        </div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="g-lang-area">
                        <Icon className="i-glb"/>
                        <div className="g-list">
                            <span>KOR</span><span>ENG</span>
                        </div>
                    </div>
                    {/* 변경사항 end: 글로벌 언어표시영역 추가*/}
                    <p className="text-area">
                    {`Self, People, Work 중 Self 영역을 보완하고 싶으신가요?
정밀진단을 통해 Self 영역에서 내가 개선해야 할 구체적인 원인을 찾아보세요.
원인을 찾은 다음 Action Plan을 수립하고
Self-coaching 방법을 활용해 나의 행복실천 수준을 높여보세요.`}
                    </p>
                    <div className="btn-area">
                        <Button icon className='icon-line'><Icon className='add-list'/></Button>
                        <Link to='/'><Button className='fix bg'>{/* View Details */} 상세보기</Button></Link>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueRecommend02
