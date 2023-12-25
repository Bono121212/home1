import React, { Component } from 'react';
import { Accordion,Button, Icon, Image } from 'semantic-ui-react';
import profileImg36px from '../../../../../../images/all/profile-38-px.svg'
import profileImg36px2 from '../../../../../../images/all/profile-02.svg'
import profileImg36px3 from '../../../../../../images/all/profile-10.svg'
import { Link } from 'react-router-dom';

class PlayListAccordion extends Component {
    state = { activeIndex: -1 }

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
                                        <div className="ui profile">
                                            <div className="pic s36">
                                                <Image src={profileImg36px} alt="프로필사진 임시이미지"/>
                                            </div>
                                            <div className='prf-info'>
                                                <span className='prf-name'>김써니</span>
                                                <div className='prf-date'>
                                                    <span className='date'>2022.01.22</span>
                                                    <span className='stat'>생성</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='acc-cnt'>
                                        <Button className='add-black'><Icon className='add-black16'/>Playlist 담기</Button>
                                        <Button className='acc-updown' index={0} onClick={this.handleClick}>총 <strong className='cnt'>6개</strong> 학습카드<Icon className='drop24-down'/></Button>
                                    </div>
                                </div>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
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
                        <div className='mylist-acc-item'>
                            <Accordion.Title active={activeIndex === 1}>
                                <div className='acc-top'>
                                    <div className='acc-tit'><strong>전통기업의 DT Practice</strong></div>
                                    <div className='acc-meta'>
                                        <div className="ui profile">
                                            <div className="pic s36">
                                                <Image src={profileImg36px2} alt="프로필사진 임시이미지"/>
                                            </div>
                                            <div className='prf-info'>
                                                <span className='prf-name'>Benedict Cumberbarch</span>
                                                <div className='prf-date'>
                                                    <span className='date'>2022.01.22</span>
                                                    <span className='stat'>추천</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='acc-cnt'>
                                        <Button className='add-black'><Icon className='add-black16'/>Playlist 담기</Button>
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
                                        <div className="ui profile">
                                            <div className="pic s36">
                                                <Image src={profileImg36px} alt="프로필사진 임시이미지"/>
                                            </div>
                                            <div className='prf-info'>
                                                <span className='prf-name'>닉네임사오육칠팔구십일이삼사오육칠팔구십</span>
                                                <div className='prf-date'>
                                                    <span className='stat'>Recommended on</span>
                                                    <span className='date'>2021.12.22</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='acc-cnt'>
                                        <Button className='add-black'><Icon className='add-black16'/>Add to playlist</Button>
                                        <Button className='acc-updown' index={2} onClick={this.handleClick}>
                                            <div><strong className="cnt">3</strong> learning cards</div><Icon className='drop24-down'/></Button>
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
                        <div className='mylist-acc-item'>
                            <Accordion.Title active={activeIndex === 3}>
                                <div className='acc-top'>
                                    <div className='acc-tit'><strong>[마케팅 인사이트 Boost-up ④] B2B 마케팅 신조류</strong></div>
                                    <div className='acc-meta'>
                                        <div className="ui profile">
                                            <div className="pic s36">
                                                <Image src={profileImg36px3} alt="프로필사진 임시이미지"/>
                                            </div>
                                            <div className='prf-info'>
                                                <span className='prf-name'>Benedict Cumberbarch</span>
                                                <div className='prf-date'>
                                                    <span className='date'>2022.01.22</span>
                                                    <span className='stat'>담음</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='acc-cnt'>
                                        <Button className='add-black'><Icon className='add-black16'/>Playlist 담기</Button>
                                        <Button className='acc-updown' index={3} onClick={this.handleClick}>총 <strong className='cnt'>6개</strong> 학습카드<Icon className='drop24-down'/></Button>
                                    </div>
                                </div>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 3}>
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
                        <div className='mylist-acc-item'>
                            <Accordion.Title active={activeIndex === 4}>
                                <div className='acc-top'>
                                    <div className='acc-tit'><strong>[모두 그렇게 리더가 된다] 생물학자 최재천 이야기</strong></div>
                                    <div className='acc-meta'>
                                        <div className="ui profile">
                                            <div className="pic s36">
                                                <Image src={profileImg36px} alt="프로필사진 임시이미지"/>
                                            </div>
                                            <div className='prf-info'>
                                                <span className='prf-name'>김써니</span>
                                                <div className='prf-date'>
                                                    <span className='date'>2022.01.22</span>
                                                    <span className='stat'>생성</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='acc-cnt'>
                                        <Button className='add-black'><Icon className='add-black16'/>Playlist 담기</Button>
                                        <Button className='acc-updown' index={4} onClick={this.handleClick}>총 <strong className='cnt'>6개</strong> 학습카드<Icon className='drop24-down'/></Button>
                                    </div>
                                </div>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 4}>
                                <div className='list-wrap'>
                                    <ul className='acc-card-list'>
                                        <li className='item'>
                                            <Link to="#" className="inner">
                                                <div className='ellipsis tit'>[모두 그렇게 리더가 된다] 생물학자 최재천 이야기</div>
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