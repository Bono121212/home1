import React, {Component} from 'react'
import BadgeHeaderCase01 from "../BadgeHeaderCase01";
import BadgeHeaderCase02 from "../BadgeHeaderCase02";
import BadgeHeaderCase03 from "../BadgeHeaderCase03";
import BadgeHeaderCase04 from "../BadgeHeaderCase04";
import BadgeHeaderCase05 from "../BadgeHeaderCase05";
import BadgeHeaderCase06 from "../BadgeHeaderCase06";

class ContentsArea extends Component {
    render() {
        return (
            <>
                <h2 className='tt'>도전 전</h2>
                <BadgeHeaderCase01/>

                <h2 className='tt'>도전 진행중</h2>
                <BadgeHeaderCase02/>

                <h2 className='tt'>도전 진행중 - 도전 완료된 case</h2>
                <BadgeHeaderCase03/>

                <h2 className='tt'>발급 요청 취소</h2>
                <BadgeHeaderCase06/>

                <h2 className='tt'>발급 요청 중</h2>
                <BadgeHeaderCase04/>

                <h2 className='tt'>획득 완료</h2>
                <BadgeHeaderCase05/>
            </>
        )
    }
}


export default ContentsArea
