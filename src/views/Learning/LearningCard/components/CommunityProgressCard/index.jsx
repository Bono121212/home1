import React, {Component} from 'react'
import { Image, Label, Icon, Card, Button } from 'semantic-ui-react'

class CommunityProgressCard extends Component {
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
            <>
                {/* hover 시 on class 추가 */}
                <Card className={`card-h ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                      onMouseLeave={() => this.handleHover(false)}>
                    <div className="card-inner">
                        {/*썸네일*/}
                        <div className="thumbnail">
                            <Image
                                alt='임시이미지'
                                size='small'
                                src='http://placehold.it/60x60'
                            />
                        </div>
                        <div className="title-area">
                            <Label color='blue'>Leadership</Label>
                            <div className="header">Machine learning Complete Guide for Calculus - Deep 말줄임 말줄임 말줄임
                                말줄임
                            </div>
                        </div>
                        <div className="icon-area">
                            <div className="li">
                                <Label className='bold onlytext'>
                                    <Icon className='community'/><span>Community</span>
                                </Label>
                            </div>
                            <div className="li">
                                <Label className='bold onlytext'>
                                    <Icon className='time2'/><span>1h 30m</span>
                                </Label>
                            </div>
                            <div className="li">
                                <Label className='onlytext'>
                                    <Icon className='complete'/><span>이수 3,300명</span>
                                </Label>
                            </div>
                        </div>
                        <div className="foot-area">
                            <Label className='bold onlytext'>
                                <Icon className='state'/><span>{/*In progress*/}학습중</span>
                            </Label>
                            <div className="study-date">2019.10.10 학습 시작</div>
                        </div>
                    </div>
                    <div className="hover-content">
                        <div className="title-area">
                            <Label color='blue'>Leadership</Label>
                            <div className="header">Machine learning Complete Guide for Calculus - Deep</div>
                        </div>
                        <p className="text-area">
                            This is a template for a simple marketing or informational website. It includes a large
                            callout called a jumbo Tron and three
                        </p>
                        <div className="btn-area">
                            <Button icon className='icon-line'><Icon className='add-list'/></Button>
                            <Button className='fix bg'>{/* View Details */} 상세보기</Button>
                        </div>
                    </div>
                </Card>
            </>
        )
    }
}

export default CommunityProgressCard
