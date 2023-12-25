import React, {Component} from 'react';
import { Button, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import TabMenu from '../TabMenu';


import '../../UserLayoutTemplete/UserLayoutTemplete.css';


class PopCommunityInfo extends Component {

    render () {

        return (
            <>
                <div className="community_info">
                    <div className="info_header">
                        <div className="inner">
                            <strong>커뮤니티 정보</strong>
                            <Button className="btn_close"><Icon /></Button>
                        </div>
                    </div>
                    <div className="info_contents">
                        <div className="inner">
                            <div className="info1">
                                <span className="label aidt">AI/DT</span>
                                <span className="date">개설일 2021.01.01</span>
                                <Button className="btn_copy"><Icon/></Button>
                                <Link to="/" className="go_setting"><Icon/></Link>
                            </div>

                            <div className="info2">
                                {/* 210615 추가작업 - 즐겨찾기 버튼 추가(b_like) */}
                                {/* b_like에 on 클래스가 추가되면 아이콘이 바뀝니다. */}
                                <Button className="b_like on"><Icon/></Button>
                                <strong>에너지 거래의 현재와 미래 혹은 어제와 오늘</strong>
                                <p>많은 업무와 바쁜 일상으로 가득한 오늘, 우리는 성장하고 있나요? 학습과 성장을 통한 경쟁력 확보는 필요합니다.</p>
                            </div>

                            {/* 210615 수정작업 */}
                            <div className="info3">
                                <Button className="user">캠핑마스터</Button>
                                <Link to="/" className="member"><Icon />멤버 260명</Link>
                                <Button className="out">탈퇴하기</Button>
                            </div>

                            <div className="info4">
                                <TabMenu />
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }


}

export default PopCommunityInfo;