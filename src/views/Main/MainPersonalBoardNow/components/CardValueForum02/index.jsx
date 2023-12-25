import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { Icon, Button, Label, Card, Rating } from 'semantic-ui-react'

class CardValueForum02 extends Component {
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
                        <div className="header">[서브포럼 토론세션(7/29)] "제도와 공정" : (요약본) 제도를 통한 공정 구현, 보다 공정한 조직을 위한 시스템/문화적 변화 방향은?</div>
                    </div>
                    <div className="icon-area">
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='video2'/><span>Video</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext bold'>
                                <Icon className='time2'/><span>1h32m</span>
                            </Label>
                            <Label className='onlytext bold card-stamp'>
                                <Icon className='stamp'/><span>Stamp x1</span>
                            </Label>
                        </div>
                        <div className="li">
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 2,542명</span>
                            </Label>
                        </div>
                    </div>
                    <div className="foot-area">
                        <div className="fixed-rating">
                            <Rating defaultRating={4} maxRating={5} size='small' disabled className='rating-num' />
                        </div>
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
                        '제도와 공정' 관련 쟁점들에 대한 내/외부 패널의 토론을 통해 구성원의 오해를 해소하고 공감대를 형성하고자 합니다.   
                    </p>
                    <div className="btn-area">
                        <Button icon className='icon-line'><Icon className='add-list'/></Button>
                        <Link to="/">
                            <Button className="fix bg">상세보기</Button>
                        </Link>
                    </div>
                </div>
            </Card>
        )
    }
}


export default CardValueForum02
