import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Button, Label, Card, Rating } from 'semantic-ui-react'

class CardValueRecommend extends Component {
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
                        <div className="header">Hadoop 이해와 활용 2 (HDFS, YARN)</div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='course'/><span>Course</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>3h 3m</span>
                            </Label>
                            <Label className='onlytext bold card-stamp'>
                                <Icon className='stamp'/><span>Stamp x1</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 408명</span>
                            </Label>
                        </div>
                    </div>
                    <div className="foot-area">
                        <div className="fixed-rating">
                            <Rating defaultRating={5} maxRating={5} size='small' disabled className='rating-num' />
                        </div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="g-lang-area">
                        <Icon className="i-glb"/>
                        <div className="g-list">
                            <span className="on">KOR</span><span>CHN</span><span>ENG</span>
                        </div>
                    </div>
                    {/* 변경사항 end: 글로벌 언어표시영역 추가*/}
                    <p className="text-area">
                    {`*강의 개요
- Bigdata 분석을 위한 Hadoop의 요소 기술 개념과 현장 활용 방안을 실습을 통해 배우는 과정입니다.
- Big Data 처리를 위해 Hadoop을 처음 접해보는 구성원,
Data Engineering 및 Analytics 유관업무 구성원들에게 추천합니다.
*학습 기대 효과
- Hadoop을 활용한데이터 처리 플랫폼 기본 설치부터 동`}
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


export default CardValueRecommend
