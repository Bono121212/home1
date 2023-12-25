import React, {Component} from 'react'
import { Accordion, Icon, Button, Label, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class CommunityList01 extends Component {
    state = {activeIndex: 0}

    handleClick = (e, titleProps) => {
        const {index} = titleProps;
        const {activeIndex} = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeIndex} = this.state;
        console.log(activeIndex);
        return (
            <Accordion className='community-item'>
                <Accordion.Title
                    active={activeIndex === 0}
                >
                    <div className="commu-list-item">
                        {/* 썸네일 */}
                        <div className="thumbnail">
                            <div>
                                <Image src='/images/wireframe/image.png' alt='아이콘이미지' size='small'/>
                                <Image src='/images/all/thumb-card-60-px.jpg' alt='아이콘이미지' size='small'/>
                            </div>
                        </div>
                        {/* //썸네일 */}
                        <div className="title-area">
                            <Label color='blue'>Leadership</Label>
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
                        <div className="icon-area" >
                            <Icon className='dropdown' index={0} onClick={this.handleClick}/>
                        </div>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <div className="new-item">
                        <a href={()=>false} className="title-area">
                            <span className="ellipsis">강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지</span>
                            <span className="rep-num">[<strong>3</strong>]</span>
                        </a>
                        <div className="date">2020.01.15</div>
                    </div>
                    <div className="new-item">
                        <a href={()=>false} className="title-area">
                            <span className="ellipsis">강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지</span>
                        </a>
                        <div className="date">2020.01.15</div>
                    </div>
                    <div className="new-item">
                        <a href={()=>false} className="title-area">
                            <span className="ellipsis">강의 사이트 디자인 해보았습니다. 어떤 가요?  평가 부탁드립니다. 잘 만들었는지</span>
                        </a>
                        <div className="date">2020.01.15</div>
                    </div>
                </Accordion.Content>
            </Accordion>

        )
    }
}


export default CommunityList01
