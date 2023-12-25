import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Button, Label, Card } from 'semantic-ui-react'

class CardValueEnrolled extends Component {
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
                        <Label color='pink-sub'>BM Design & Storytelling</Label>
                        <div className="header">Financial Story 이해</div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='course'/><span>Course</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>53m</span>
                            </Label>
                            <Label className='bold onlytext card-stamp'>
                                <Icon className='stamp'/><span>Stamp x1</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 2,711명</span>
                            </Label>
                        </div>
                    </div>
                    <div className="foot-area">
                        <Label className="onlytext bold">
                            <Icon className='state'/><span>학습중</span>
                        </Label>
                        <div className="study-date">2021.04.26 학습 시작</div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="g-lang-area">
                        <Icon className="i-glb"/>
                        <div className="g-list">
                            <span>KOR</span><span>CHN</span><span>ENG</span>
                        </div>
                    </div>
                    {/* 변경사항 end: 글로벌 언어표시영역 추가*/}
                    <p className="text-area">
                    변화된 Identity로 우리의 가치를 재정의 하고, 매력적인 Story로 팬들 모으고, ESG로 지속가능성을 더 하여, 변화를 만들어가는 Financial Story.
Financial Story의 개념과 사례에 대해 알아보고 스토리가 기업의 가치에 어떻게 영향을 주는지를 배워봅니다. [내러티브 앤 넘버스 저자 다모다란 교수의 스토리텔링과 기업가치 강의의
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


export default CardValueEnrolled
