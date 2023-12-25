import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Button, Label, Card } from 'semantic-ui-react'

class CardValueInprogress01 extends Component {
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
                        <Label color='violet'>DT</Label>
                        <div className="header">Cloud Technical Essentials (Feat. Azure) 3: Azure VNET 생성, 부하분산 서비스 이해,  Azure DevOps 환경 </div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='video2'/><span>Classroom</span>
                            </Label>                            
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>2h 30m</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 949명</span>
                            </Label>
                        </div>
                    </div>
                    <div className="foot-area">
                        <Label className="onlytext bold">
                            <Icon className='state'/><span>학습 중</span>
                        </Label>
                        <div className="study-date">2021.08.31 학습 시작</div>
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
                    {`*강의 개요
- Azure Cloud의 기본 개념, 요소기술, 다양한 Cloud 서비스를 실습을 통해 배우는 과정입니다.
- 총 4편의 시리즈 강의로 구성되어 있으며, 본 편에서는 Azure VNET 생성, 부하분산 서비스 이해, Azure DevOps 환경, 데이터 플랫폼을 활용하는 방법을 소개합니다.
- Azure Cloud에 대한 기본적인 개념 이해가`}
                    </p>
                    <div className="btn-area">
                        <Button icon className='icon-line'><Icon className='add-list'/></Button>
                        <Link to="/">
                            <Button className='fix bg'>{/* View Details */} 상세보기</Button>
                        </Link>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueInprogress01
