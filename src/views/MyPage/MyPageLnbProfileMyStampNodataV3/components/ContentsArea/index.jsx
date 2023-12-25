import React, {Component} from 'react';
import { Segment, Button, Icon, Image } from 'semantic-ui-react';
import Nodata from "../../../../../images/all/no-contents-80-px.svg";

class ContentsArea extends Component {
    render() {
        return (
            <div className="mypage_contents profile-edit-contents my-stamp-list">
                <strong className="mypage_title">My Stamp</strong>
                <div className="top-line">
                    <div className="left-line">
                        <Button icon className="post excel-down">
                            <Icon className="excel-down"/>
                            엑셀 다운로드
                        </Button>
                        <span>총 <strong>0개</strong>의 리스트가 있습니다.</span>
                    </div>
                    <div className="right-line">    
                        <Button icon className="post filter2">
                            <Icon className="filter2"/>
                            <span>Filter</span>
                        </Button>
                    </div>
                </div>

                <Segment className="full">
                    <div className="table-wrapper">
                        <div className="community_nodata">
                            <Icon>
                                <Image src={Nodata}/>
                            </Icon>
                            <p>
                                {`획득한 Stamp가 없습니다.\nStamp가 있는 학습 과정을 찾아보세요.`}
                            </p>
                            <Button icon className='right btn-blue2'>
                                <span className='border'>Learning 학습중 바로가기</span>
                                <Icon className='morelink'/>
                            </Button>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
