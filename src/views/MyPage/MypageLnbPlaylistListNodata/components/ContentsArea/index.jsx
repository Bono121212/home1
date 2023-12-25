import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Segment, Select, Button, Icon} from 'semantic-ui-react';
// import BadgeCardGroup from '../BadgeCardGroup';

const selectOptions = [    
    { key: "all", value: "all", text: "전체" },
    { key: "1", value: "list1", text: "내가 만든 플레이리스트" },
    { key: "2", value: "list2", text: "추천받은 플레이리스트" },
]
  

class ContentsArea extends Component {

    render() {
        
        return (
            <div className="mypage_contents profile-playlist-contents">
                <div className='mypage_title_wrap'>
                    <strong className="mypage_title">Playlist</strong>
                    <Link to='/playlist/playlist-list-all' className='mypage_btn'>전체 둘러보기</Link>
                </div>
                <div className="top-line">
                    <span>총 <strong>32 개</strong>의 Playlist가 있습니다.</span>
                    <div className='select-wrap'>
                        <Select
                            placeholder="선택"
                            className="ui small-border dropdown m0"
                            defaultValue={selectOptions[0].value}
                            options={selectOptions}
                        />
                        <Button className="btn-playlist">+ Playlist 만들기</Button>
                    </div>
                </div>
                <Segment className="full">
                    <div className="group-wrapper">
                        <div className='playlist-list list-wrapper'>
                            <div className="no-cont-wrap">
                                <Icon className="no-contents80" />
                                <span className="blind">콘텐츠 없음</span>
                                <div className="text">추천받거나 생성된 Playlist가 없습니다.<br />구성원들과 함께 학습할 Playlist를 만들어보세요!</div>
                                <Button className="btn-playlist big"><Icon className='create16'/>Playlist 만들기</Button>
                            </div>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}
export default ContentsArea;