import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import {Image, Icon, Button} from 'semantic-ui-react';
import profileImg from '../../../../images/all/profile-38-px.svg';
import classNames from 'classnames';
import './style.css';

export default function PlayListDetailHeader ({type}) {
    const [setProfileOpen] = useState(false);
    const [MenuOpen, setMenuOpen] = useState(false);
    const [on, setOn] = useState(false);
    const popupRef = useRef();

    //편집하기 popup
    useEffect(()=>{
        if(type ==='My') {
            const handleClickOutside = event => {
                if(!popupRef.current.contains(event.target)){
                    setMenuOpen(false)
                }
            }
            window.addEventListener('mousedown', handleClickOutside);
            return () => window.removeEventListener('mousedown', handleClickOutside);
        }

    },[type])

    /* type
        byOthers 타인 리스트
        My 내가 만든
        Save 내가 담음
        Recommended 추천받은 */
    return(
        <>
            <div className="playlist-detail-info-inner">
                <div className="playlist-tit">[MIT Tech. Review] 진짜 같은 AI의 목소리, 음성합성 기술</div>
                <div className="playlist-subtxt">트렌디한 기술을 알아봅니다.</div>
                <div className="playlist-sub-infobox">
                    <div className="f-left">
                        <div className="maker-thumb" onClick={() => setProfileOpen(true)}>
                            <Image src={profileImg} alt="만든사람 프로필이미지"/>
                        </div>
                        <div className="maker-user" onClick={() => setProfileOpen(true)}>김써니</div>
                        { type==='byOthers' && <div className="maker-date">2022.02.16</div> }
                        { type==='My' && <div className="maker-date">2022.02.16 생성</div> }
                        { type==='Save' && <div className="maker-date">2022.02.16 담음</div> }
                        { type==='Recommended' && <div className="maker-date">2022.02.16 추천 받음</div> }
                    </div>
                    <div className="f-right">
                        <Button icon className='bigRight like' onClick={()=>setOn(!on)}>
                            <Icon className={classNames(on ? 'likeOnBig' : 'likeOffBig')}/>
                            <span>4,288</span>
                        </Button>
                        <Button icon className='bigRight share'>
                            <Icon className='shareBig'/>
                            <span>공유하기</span>
                        </Button>

                        {/* 타인의 리스트 */}
                        {
                            type === 'byOthers' &&
                                <Button icon className='bigRight putin'>
                                    <Icon className="putinOffBig"/>
                                    <span>리스트 담기</span>
                                </Button>
                        }
                        {/* 내가 만든 리스트 */}
                        {
                            type === 'My' &&
                            <>
                                <Button icon className='bigRight thumb'>
                                    <Icon className='tumbUpBig'/>
                                    <span>추천하기</span>
                                </Button>
                                <div className='edit-btn-area' ref={popupRef}>
                                    <Button icon className={classNames('bigRight edit',{'on' : MenuOpen})} onClick={()=> setMenuOpen(!MenuOpen)}>
                                        <Icon className={classNames(MenuOpen ? 'editBigOn' : 'editBigOff')}/>
                                        <span>편집하기</span>
                                    </Button>
                                    {/* 편집하기 클릭시 뜨는 popup */}
                                    <div className={classNames('ed-popup',{'on' : MenuOpen})}>
                                        <div className='inner'>
                                            <ul>
                                                <li>
                                                    <Button icon className='ed-edit'>
                                                        <Icon className='edit16'/> Edit
                                                    </Button>
                                                </li>
                                                <li>
                                                    <Button icon className='ed-delete'>
                                                        <Icon className='delete16'/> Delete
                                                    </Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        {/* 내가 담은 리스트 */}
                        {
                            type === 'Save' &&
                                <Button icon className='bigRight delete'>
                                    <Icon className='deleteBig'/>
                                    <span>삭제하기</span>
                                </Button>
                        }
                        {/* 추천받은 리스트 */}
                        {
                            type === 'Recommended' &&
                                <Button icon className='bigRight delete'>
                                    <Icon className='deleteBig'/>
                                    <span>삭제하기</span>
                                </Button>
                        }

                    </div>
                </div>
            </div>
            {/* 추천받은 리스트의 경우 추천의 말 노출 */}
            {
                type ==='Recommended' &&
                <div className='playlist-recommend-message'>
                    <span className='playlist-message-tit'>마스터 오브 캠핑님의 추천 메시지</span>
                    <span>AI/DT가 인간중심에 잘 맞게 적용되어 업무에 도움이 되었으면 좋겠습니다.</span>
                </div>
            }
        </>
    )
}
