import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Button, Label, Card, Rating } from 'semantic-ui-react'

class CardValueRecommend01 extends Component {
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
                        <Label color='teal'>Management</Label>
                        <div className="header">한국인이 많이 하는 이메일 영어 실수(上)</div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='e-learning'/><span>e-learning</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>3h 28m</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 539명</span>
                            </Label>
                        </div>
                    </div>
                    <div className="foot-area">
                        <div className="fixed-rating">
                            <Rating defaultRating={0} maxRating={5} size='small' disabled className='rating-num' />
                        </div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="g-lang-area">
                        <Icon className="i-glb"/>
                        <div className="g-list">
                            <span>KOR</span><span>CHN</span>
                        </div>
                    </div>
                    {/* 변경사항 end: 글로벌 언어표시영역 추가*/}
                    <p className="text-area">
                    {`한국인이 빈번하게 저지르는 이메일 영어 실수를 유형 별로 파악하고 교정하는 법을 익혀 영문 E-Mail 작성 실력을 향상합니다.
01. 본인도 모르게 자주 틀리는 이메일 영어 표현을 교정하고 격식에 맞는 표현을 익혀 완성도 높은 이메일을 작성할 수 있다.
02. 주제별로 비즈니스 이메일 모델 표현을 응용·확장하여 상황에 맞는 정확하고 간결한 이메일을 작성할`}
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


export default CardValueRecommend01
