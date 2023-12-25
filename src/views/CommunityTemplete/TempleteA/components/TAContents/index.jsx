import React, { Component } from "react";

import CTI2A from '../CTI2A';
import CTI2B from '../CTI2B';
import CTI3A from '../CTI3A';
import CTI3B from '../CTI3B';
import CTI3C from '../CTI3C';
import CTI4A from '../CTI4A';
import CTI4B from '../CTI4B';
import CTI4C from '../CTI4C';
import CTI4D from '../CTI4D';
//import CTILeft from '../CTILeft';
//import CTIRight from '../CTIRight';
import TitleLink from '../TitleLink';
import TabMenu from '../TabMenu';
import CardBelt from '../CardBelt';

class TAContents extends Component {

    render() {
        return (
            <div className="ta_contents">

                {/* opacity/noOpacity 클래스에 edit클래스가 추가되면 편집선이 나타납니다. */}
                
                <div className="noOpacity">
                    {/* 탭영역 */}
                    <div className="tab_area_templete">

                        {/* 탭 타이틀 */}
                        <TabMenu />

                        {/* 탭 컨텐츠 */}
                        <div className="ta_tab_content">
                            {/* 2 정렬 */}
                            <div className="card_area">
                                <div className="opacity">
                                    <div className="flex mg14">
                                        <CTI2A/>
                                        <CTI2B/>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="card_area">
                                <div className="opacity">    
                                    <TitleLink />  
                                    <div className="flex mg14">
                                        <CTI3A/>
                                        <CTI3B/>
                                        <CTI3C/>
                                        <CTI3B/>
                                        <CTI3C/>
                                        <CTI3A/>
                                    </div>
                                </div>
                            </div>                            
                        </div>

                        {/* 학습카드 */}
                        <div className="card_area">
                            <div className="opacity">
                                <TitleLink />  
                                <div className="flex">
                                    <CardBelt/>
                                </div>
                            </div>
                        </div>


                        <div className="card_area">
                            <div className="opacity">    
                                <TitleLink />  
                                <div className="flex mg14">
                                    <CTI4A/>
                                    <CTI4B/>
                                    <CTI4C/>
                                    <CTI4D/>
                                    <CTI4B/>
                                    <CTI4C/>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}

export default TAContents;
