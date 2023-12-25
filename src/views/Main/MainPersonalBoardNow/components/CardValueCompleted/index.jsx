import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Button, Label, Card } from 'semantic-ui-react'

class CardValueCompleted extends Component {
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
                    <div className="thumbnail completed"/>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='bluegreen'>Environment</Label>
                        <div className="header">[서브포럼 토론세션(7/22)]  수소에 대한 당신의 생각은? 수소 IT 수다!</div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='video'/><span>Video</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>1h 17m</span>
                            </Label>
                            <Label className='onlytext bold card-stamp'>
                                <Icon className='stamp'/><span>Stamp x1</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 2,160명</span>
                            </Label>
                        </div>
                    </div>
                    <div className="foot-area">
                        <Label className="onlytext bold">
                            <Icon className='state'/><span>학습완료</span>
                        </Label>
                        <div className="study-date">2021.08.23 학습 시작</div>
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
                    당신이 궁금해 했던 수소 에너지에 대한 모든 것! 세상에서 가장 가벼운 원소인 수소 같은 수다로 알아봅니다.
                    </p>
                    <div className="btn-area">
                        <Button icon className='icon-line'><Icon className='remove2'/></Button>
                        <Link to="/">
                            <Button className='fix bg'>{/* View Details */} 상세보기</Button>
                        </Link>                        
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueCompleted
