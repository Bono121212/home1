import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Button, Label, Card } from 'semantic-ui-react'

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
                    <Label className='day'>오늘 마감</Label>
                </div>
                <div className="card-inner">
                    {/* 썸네일 */}
                    <div className="thumbnail"/>
                    {/* //썸네일 */}
                    <div className="title-area">
                        <Label color='green'>Global</Label>
                        <div className="header">[유튜브 Live 사전신청] 꼬리에 꼬리를 무는 아프가니스탄 이야기: 탈레반이 던진 질문, 세계는 안녕하십니까?</div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='classroom'/><span>Classroom</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>2h</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수0명</span>
                            </Label>
                        </div>
                    </div>
                    <div className="foot-area">
                        <Label className='onlytext bold'>
                            <Icon className='state'/><span>학습중</span>
                        </Label>
                        <div className="study-date">2021.08.27 학습 시작</div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="g-lang-area">
                        <Icon className="i-glb"/>
                        <div className="g-list">
                            <span>KOR</span>
                        </div>
                    </div>
                    {/* 변경사항 end: 글로벌 언어표시영역 추가*/}
                    <p className="text-area">
                        {`<꼬리에 꼬리를 무는 아프가니스탄 이야기: 탈레반이 던진 질문, 세계는 안녕하십니까?>는 유튜브 라이브로 진행되며, 사전 수강신청 하신 분들께 링크 발송 및 학습시간 (2시간) 을 인정해드립니다. `}
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


export default CardValueDday01
