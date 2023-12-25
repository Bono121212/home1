import React, {Component} from 'react'
import { Accordion, Icon, Button, Label } from 'semantic-ui-react'
import {Link} from "react-router-dom";

class CommunityList01 extends Component {
    state = {activeIndex: 0}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeIndex} = this.state
        return (
            <Accordion className='community-item'>
                <Accordion.Title
                    active={activeIndex === 0}
                >
                    <div className="commu-list-item">
                        {/* 썸네일 */}
                        <div className="thumbnail">
                            <div>
                                <Icon className='thumb60-2'/>
                            </div>
                        </div>
                        {/* //썸네일 */}
                        <div className="title-area">
                            <Label color='orange'>SV</Label>
                            <div className="header ellipsis">
                                <Link to={'/community/learning-community-main-community'}>
                                    HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략
                                    방향HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략 방향
                                </Link>
                            </div>
                            <div className="deatil">
                                <span>새로운 글: 5</span>
                                <span>멤버 : 1,427</span>
                            </div>
                        </div>
                        <div className="btn-area">
                            <Link to={'/community/learning-community-main-community'}>
                                <Button className='fix line'>{/* View Details */} 상세보기</Button>
                            </Link>
                        </div>
                        <div className="icon-area">
                            <Icon className='dropdown' index={0} onClick={this.handleClick}/>
                        </div>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <div className="no-item">
                        커뮤니티에 작성된 글이 없습니다.
                    </div>
                </Accordion.Content>
            </Accordion>

        )
    }
}


export default CommunityList01
