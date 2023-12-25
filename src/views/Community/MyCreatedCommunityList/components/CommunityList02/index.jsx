import React, {Component} from 'react'
import { Icon, Label } from 'semantic-ui-react'
import {Link} from "react-router-dom";

class CommunityList01 extends Component {
    render() {
        return (
            <div className="community-item">
                <div className="title">
                    <div className="commu-list-item">
                        <div className="thumbnail">
                            <div>
                                <Icon className='thumb60-2'/>
                            </div>
                        </div>
                        <div className="title-area">
                            <Label color='green'>Global</Label>
                            <div className="header ellipsis">
                                <Link to={'/community/learning-community-main-community'}>
                                    HR - Agile HR Fundamentals 회사의 비전달성을 위한 HR전략 방향HR - Agile
                                    HR Fundamentals 회사의 비전달성을 위한 HR전략 방향
                                </Link>
                            </div>
                            <div className="deatil">
                                <span className="red">승인 됨</span>
                                <span>등록 신청 날짜 : 2020.01.19</span>
                                <span>커뮤니티 시작 날짜 : 2020.01.19</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CommunityList01
