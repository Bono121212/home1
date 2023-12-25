import React from 'react';
import {Tab, Icon, Image, Checkbox } from 'semantic-ui-react';
import prf1 from '../../../../../images/all/profile-48-px.svg';
import prf2 from '../../../../../images/all/profile-03-48px.svg';
import prf3 from '../../../../../images/all/profile-10-48px.svg';
import ShLeftOrg from './ShLeftOrg';
import ShLeftOrgDisabled from './ShLeftOrg/disabled';
import SharePlayListPopupTooltip from '../../SharePlayListPopupTooltip';

export function Left (){
    const panes = [
        {
            menuItem : 'SK주식회사 C&C',
            render : () =>(
                <Tab.Pane className='left-inner'>
                    <ShLeftOrg />
                    <div className='sh-left-list'>
                        <div className='sh-left-top'>
                            <div className="ui h38 search input">
                                <input type="text" placeholder="이름 또는 이메일을 검색해주세요." />
                                <Icon className='search link'/>
                            </div>
                        </div>
                        <div className='sh-left-slct-wrap'>
                            {/* Nodata */}                        
                            {/* <div className="no-cont-wrap">
                                <Icon className="no-contents50" />
                                <span className="blind">콘텐츠 없음</span>
                                <div className="text"><strong className='s-word'>박써니</strong>에 대한 검색결과가 없어요! <br/> Playlist를 추천할 다른 학습자를 검색해주세요.</div>
                            </div> */}
                            
                            
                            <div className='sh-left-slct'>
                                <div className='sh-sl-top'>
                                    <Checkbox className='base' label='전체 선택'/>
                                </div>
                                <div className='sh-user-list'>
                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf1} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='홀*동' comp='SK C&amp;C' group='Coporate Support Disital Team Agent Disital Team Agent' />
                                                <span className='prf-email'>abc**@sk.com</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf2} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='윤*슬' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>sys**@sk.com</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf3} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='나*진' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>nanaj**@sk.com</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf1} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='나*진' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>abc**@sk.com</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf2} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='나*진' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>sys**@sk.com</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf3} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='나*진' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>nanaj**@sk.com</span>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> 
                </Tab.Pane> 
                
            )
        },
        {
            menuItem : 'mySUNI 사용자',
            render : () =>(
                <Tab.Pane className='left-inner'>
                    <ShLeftOrgDisabled />
                    <div className='sh-left-list'>
                        <div className='sh-left-top'>
                            <div className="ui h38 search input">
                                <input type="text" placeholder="이름 또는 이메일을 검색해주세요." value={'박써니'} />
                                <Icon className='search link'/>
                            </div>
                        </div>
                        <div className='sh-left-slct-wrap'>
                            {/* 검색전 */}
                            <div className='no-cont-wrap'>
                                <Icon className='search50'/><span className='blind'>검색전</span>
                                <strong className='no-tit'>mySUNI 사용자 검색하기</strong>
                                <div className='text'>{` Playlist를 추천할\nmySUNI 사용자 이름 또는 이메일을 검색해보세요!`}</div>
                            </div> 

                            {/* 검색결과 nodata */}
                            {/* <div className="no-cont-wrap">
                                <Icon className="no-contents50" />
                                <span className="blind">콘텐츠 없음</span>
                                <div className="text"><strong className='s-word'>박써니</strong>에 대한 검색결과가 없어요! <br/> Playlist를 추천할 다른 학습자를 검색해주세요.</div>
                            </div> */}
                            
                        
                            {/* 검색결과 */}
                            {/* <ShLeftSlct /> */}
                            {/* <div className='sh-left-slct'>
                                <div className='sh-sl-top'>
                                    <Checkbox className='base' label='전체 선택'/>
                                </div>
                                <div className='sh-user-list'>
                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf1} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='나*진' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>abc**@sk.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  */}
                        </div>                        
                    </div>
                </Tab.Pane>
            )
        },
        {
            menuItem : '팔로워',
            render : () =>(
                <Tab.Pane className='left-inner'>
                    <ShLeftOrgDisabled />
                    <div className='sh-left-list'>
                        <div className='sh-left-top'>
                            <div className="ui h38 search input">
                                <input type="text" placeholder="이름 또는 이메일을 검색해주세요." />
                                <Icon className='search link'/>
                            </div>
                        </div>
                        <div className='sh-left-slct-wrap'>
                            {/* 팔로워가 있는 경우 */}
                            <div className='sh-left-slct'>
                                <div className='sh-sl-top'>
                                    <Checkbox className='base' label='전체 선택'/>
                                </div>
                                <div className='sh-user-list'>
                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf1} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='홀*동' comp='SK C&amp;C' group='Coporate Support Disital Team Agent' />
                                                <span className='prf-email'>abc**@sk.com</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf2} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='윤*슬' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>sys**@sk.com</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf3} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='나*진' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>nanaj**@sk.com</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf1} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='나*진' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>abc**@sk.com</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf2} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='나*진' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>sys**@sk.com</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf3} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='나*진' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>nanaj**@sk.com</span>
                                            </div>
                                        </div>                                
                                    </div>
                                </div>
                            </div>
                            
                            {/* 팔로우가 없을 때 첫화면 */}
                            {/* <div className='no-cont-wrap'>
                                <Icon className="no-contents50" />
                                <strong className='no-tit'>나를 팔로우한 사용자가 없어요!</strong>
                                <div className="text">mySUNI에서 다양한 활동을 해보세요.</div>
                            </div> */}

                            {/* 검색결과 nodata */}
                            {/* <div className="no-cont-wrap">
                                <Icon className="no-contents50" />
                                <span className="blind">콘텐츠 없음</span>
                                <div className="text"><strong className='s-word'>박써니</strong>에 대한 검색결과가 없어요! <br/> Playlist를 추천할 다른 학습자를 검색해주세요.</div>
                            </div> */}
                            
                            {/* 검색결과 */}
                            {/* <div className='sh-left-slct'>
                                <div className='sh-sl-top'>
                                    <Checkbox className='base' label='전체 선택'/>
                                </div>
                                <div className='sh-user-list'>
                                    <div className='user-prf'>
                                        <div className='user-check'>
                                            <Checkbox className='base'/>
                                        </div>
                                        <div className='ui profile'>
                                            <div className='pic s48'>
                                                <Image src={prf1} alt='프로필사진'/>
                                            </div>
                                            <div className='prf-info'>
                                                <SharePlayListPopupTooltip name='나*진' comp='SK C&amp;C' group='/ CV Digital 그룹' />
                                                <span className='prf-email'>abc**@sk.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>   
                    </div>
                </Tab.Pane>
            )
        }
    ]

    return <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>;
}
