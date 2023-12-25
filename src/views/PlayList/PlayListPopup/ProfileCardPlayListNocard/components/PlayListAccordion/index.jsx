import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion,Button, Icon } from 'semantic-ui-react';

class PlayListAccordion extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        console.log(titleProps);
        console.log(e)

      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index

      this.setState({ activeIndex: newIndex })
    }

    render(){
        const {activeIndex} = this.state;
        return(
            <>
                <div className='list-top'>
                    총 <strong>32개</strong>의 Playlist가 있습니다.
                </div>
                <div className='pl-mylist'>
                    <Accordion className='pl-mylist-acc'>
                        <div className='mylist-acc-item'>
                            <Accordion.Title active={activeIndex === 0}>
                                <div className='acc-top'>
                                    <div className='acc-tit'><strong>[CEO특강_SK에너지] "행복에 이르는 다섯 계단"</strong></div>
                                    <div className='acc-meta'>
                                        <Button className='like'><Icon className='heart16 active'/>4,288</Button>
                                        <Button className='add-black'><Icon className='add-black16'/>Playlist 담기</Button>
                                    </div>
                                    <div className='acc-cnt'>
                                        <Button className='acc-updown' index={0} onClick={this.handleClick}>{/* 총 <strong className='cnt'>6개</strong> 학습카드 <Icon className='drop24-down'/> */}
                                            총 <strong>0개</strong> 학습카드
                                        </Button>
                                    </div>
                                </div>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                {/* <div className='list-wrap'>
                                    <ul className='acc-card-list'>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>AI/DT 시대의 고객 경험 디자인</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>12개</span>
                                                    <span className='time'>11h 30m</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}

                            </Accordion.Content>
                        </div>
                        <div className='mylist-acc-item'>
                            <Accordion.Title active={activeIndex === 1}>
                                <div className='acc-top'>
                                    <div className='acc-tit'><strong>전통기업의 DT Practice</strong></div>
                                    <div className='acc-meta'>
                                        <Button className='like'><Icon className='heart16'/>288</Button>
                                        <Button className='add-black'><Icon className='add-black16'/>Playlist 담기</Button>
                                    </div>
                                    <div className='acc-cnt'>
                                        <Button className='acc-updown' index={1} onClick={this.handleClick}>총 <strong className='cnt'>6개</strong> 학습카드<Icon className='drop24-down'/></Button>
                                    </div>
                                </div>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <div className='list-wrap'>
                                    <ul className='acc-card-list'>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>전통기업의 DT Practice</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>12개</span>
                                                    <span className='time'>11h 30m</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>디지털로 구현하는 고객공감 전략 학습카드의 제목이 긴 경우 이렇게 말줄임으로 표시됨을 알려드립니다. </div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>8개</span>
                                                    <span className='time'>8h 10m</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>AI UX 기초 Essentials</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>6개</span>
                                                    <span className='time'>7h 16m</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>데이터 혁신이 답이다</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>21개</span>
                                                    <span className='time'>16h 20m</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>자동차의 핵심은 인공지능</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>17개</span>
                                                    <span className='time'>9h 30m</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>Strategy 101: Welcome, Are You New to Strategies?</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>10개</span>
                                                    <span className='time'>2h 16m</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Accordion.Content>
                        </div>
                        <div className='mylist-acc-item'>
                            <Accordion.Title active={activeIndex === 2}>
                                <div className='acc-top'>
                                    <div className='acc-tit'><strong>세렌디피티 코드</strong></div>
                                    <div className='acc-meta'>
                                        <Button className='like'><Icon className='heart16 active'/>4,288</Button>
                                        <Button className='add-black'><Icon className='add-black16'/>Playlist 담기</Button>
                                    </div>
                                    <div className='acc-cnt'>
                                        <Button className='acc-updown' index={2} onClick={this.handleClick}>총 <strong className='cnt'>6개</strong> 학습카드<Icon className='drop24-down'/></Button>
                                    </div>
                                </div>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <div className='list-wrap'>
                                    <ul className='acc-card-list'>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>AI/DT 시대의 고객 경험 디자인</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>12개</span>
                                                    <span className='time'>11h 30m</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>디지털로 구현하는 고객공감 전략 학습카드의 제목이 긴 경우 이렇게 말줄임으로 표시됨을 알려드립니다. </div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>8개</span>
                                                    <span className='time'>8h 10m</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>AI UX 기초 Essentials</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>6개</span>
                                                    <span className='time'>7h 16m</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>데이터 혁신이 답이다</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>21개</span>
                                                    <span className='time'>16h 20m</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>자동차의 핵심은 인공지능</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>17개</span>
                                                    <span className='time'>9h 30m</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>Strategy 101: Welcome, Are You New to Strategies?</div>
                                                <div className='item-dt'>
                                                    <span className='cnt'>10개</span>
                                                    <span className='time'>2h 16m</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Accordion.Content>
                        </div>
                    </Accordion>
                </div>
            </>
        )
    }
}

export default PlayListAccordion;