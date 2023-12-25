import classNames from "classnames";
import React from "react";
import { useState } from "react";
import { Image } from "semantic-ui-react";

export function ViewKo () {
    const [TabBadge, setTabBadge] = useState(0);
    return (
        <div className="certification-system-wrap">
            <div className="inner">
                <div className="introd-sec certi_introd">
                    <div className="inner">
                        {/* 통이미지 */}
                        <Image src={'https://image.mysuni.sk.com/suni-asset/public/images/all/certification/New_IN_03_01_01.png'} />
                    </div>
                </div>
                <div className="introd-sec certi_system">
                    <div className="inner">
                        {/* 통이미지 */}
                        <Image src={'https://image.mysuni.sk.com/suni-asset/public/images/all/certification/New_IN_03_01_02.png'} />
                    </div>
                </div>
                <div className="introd-sec badge_introd">
                    <div className="inner">
                        <div className="sec_tab">
                            <h3 className="sec_title"><strong>구체적으로 어떤 영역의 어떤 Badge들을 획득할 수 있나요?</strong></h3>
                            <ul>
                                <li><div className={classNames("badge_tab tab_ai", {"on" : TabBadge === 0})} onClick={()=>setTabBadge(0)}><span className="blind">AI/DT</span></div></li>
                                <li><div className={classNames("badge_tab tab_com", {"on" : TabBadge === 1})} onClick={()=>setTabBadge(1)}><span className="blind">공통직무</span></div></li>
                                <li><div className={classNames("badge_tab tab_biz", {"on" : TabBadge === 2})} onClick={()=>setTabBadge(2)}><span className="blind">미래 Biz</span></div></li>
                                <li><div className={classNames("badge_tab tab_happy", {"on" : TabBadge === 3})} onClick={()=>setTabBadge(3)}><span className="blind">행복경영</span></div></li>
                                <li><div className={classNames("badge_tab tab_bm", {"on" : TabBadge === 4})} onClick={()=>setTabBadge(4)}><span className="blind">BM Design</span></div></li>
                                <li><div className={classNames("badge_tab tab_fs", {"on" : TabBadge === 5})} onClick={()=>setTabBadge(5)}><span className="blind">Foundation Skill</span></div></li>
                            </ul>
                        </div>
                        <div className="sec_body">
                            {
                                TabBadge === 0 && (
                                    <div className="inner">
                                        {/* AI/DT 내용 */}
                                        <Image src={'https://image.mysuni.sk.com/suni-asset/public/images/all/certification/img_Conttents_01_AIDT.png'} />
                                    </div>
                                )
                            }
                            {
                                TabBadge === 1 && (
                                    <div className="inner">
                                        {/* 공통직무 내용 */}
                                        <Image src={'https://image.mysuni.sk.com/suni-asset/public/images/all/certification/img_Conttents_02_Comm.png'} />
                                    </div>
                                )
                            }
                            {
                                TabBadge === 2 && (
                                    <div className="inner">
                                        {/* 미래 Biz 내용 */}
                                        <Image src={'https://image.mysuni.sk.com/suni-asset/public/images/all/certification/img_Conttents_03_Biz.png'} />
                                    </div>
                                )
                            }
                            {
                                TabBadge === 3 && (
                                    <div className="inner">
                                        {/* 행복 내용 */}
                                        <Image src={'https://image.mysuni.sk.com/suni-asset/public/images/all/certification/img_Conttents_04_Happy.png'} />
                                    </div>
                                )
                            }
                            {
                                TabBadge === 4 && (
                                    <div className="inner">
                                        {/* BM Design 내용 */}
                                        <Image src={'https://image.mysuni.sk.com/suni-asset/public/images/all/certification/img_Conttents_05_BMD.png'} />
                                    </div>
                                )
                            }
                            {
                                TabBadge === 5 && (
                                    <div className="inner">
                                        {/* BM Design 내용 */}
                                        <Image src={'https://image.mysuni.sk.com/suni-asset/public/images/all/certification/img_Conttents_06_FSkill.png'} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="introd-sec bottom_introd">
                    <div className="inner">
                        {/* 통이미지 */}
                        <Image src={'https://image.mysuni.sk.com/suni-asset/public/images/all/certification/New_IN_03_01_03.png'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ViewZh () {
    /* 기존동일 */
}

export function ViewEn () {
    /* 기존동일 */
}