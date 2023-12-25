import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Button, Label, Card } from 'semantic-ui-react'

class CardValueRequired extends Component {
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
                        <Label color='red'>SK㈜_C&C</Label>
                        <div className="header">AccuInsight+ 2.0 Introduction (고객사 대상 설명회 영상)</div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='course'/><span>Course</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>2h</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 3명</span>
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
                    <div className="g-lang-area">
                        <Icon className="i-glb"/>
                        <div className="g-list">
                            <span>KOR</span><span>CHN</span>
                        </div>
                    </div>
                    {/* 변경사항 end: 글로벌 언어표시영역 추가*/}                    
                    <p className="text-area">
                    AccuInsight+ 2.0 및 AccuTuning 의 주요기능, 특장점 및 UseCase 등 기본적인 내용을 시연과 함께 설명합니다.
(고객사 대상 설명회 영상)
                    </p>
                    <div className="btn-area">
                        <Button icon className='icon-line'><Icon className='remove2'/></Button>
                        <Link to='/'>
                            <Button className='fix bg'>{/* View Details */} 상세보기</Button>
                        </Link>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueRequired
