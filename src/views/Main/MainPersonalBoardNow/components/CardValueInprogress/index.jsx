import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Button, Label, Card } from 'semantic-ui-react'

class CardValueInprogress extends Component {
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
                        <Label color='blue'>Leadership</Label>
                        <div className="header">SKIET 폴란드 파견전 교육</div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='course'/><span>Course</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>16h 45m</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 0명</span>
                            </Label>
                        </div>
                    </div>
                    <div className="foot-area">
                        <Label className="onlytext bold">
                            <Icon className='state'/><span>학습 중</span>
                        </Label>
                        <div className="study-date">2021.02.08 학습 시작</div>
                    </div>
                </div>
                <div className="hover-content">
                    <div className="g-lang-area">
                        <Icon className="i-glb"/>
                        <div className="g-list">
                            <span>KOR</span><span>ENG</span>
                        </div>
                    </div>
                    <p className="text-area">
                    {`본 과정은 2021년 파견 예정인 SKIET 폴란드 파견 대상자를 위한 큐레이션 과정입니다.
사전 안내를 받으신 교육 대상자 분들께서는 본 코스에 포함된 과정을 학습하시면 됩니다.
※ 사전에 본 코스에 포함된 과정의 일부를 학습 완료하신 교육 대상자는 해당 과정을 추가로 학습하지 않으셔도 됩니다.`}
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


export default CardValueInprogress
