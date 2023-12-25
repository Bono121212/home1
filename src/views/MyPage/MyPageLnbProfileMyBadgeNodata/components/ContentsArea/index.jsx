import React, {Component} from 'react';
import { Segment, Select, Icon, Image, Button } from 'semantic-ui-react';
import Nodata from "../../../../../images/all/no-contents-80-px.svg";

const selectOptions = [    
    { key: "all", value: "all", text: "전체" },
    { key: "1", value: "level1", text: "Level1" },
    { key: "2", value: "level2", text: "Level2" },
    { key: "3", value: "level3", text: "Level3" },
  ]
  

class ContentsArea extends Component {
    render() {
        return (
            <div className="mypage_contents profile-badge-contents">
                <strong className="mypage_title">My Badge</strong>
                    <div className="top-line">
                        <span>총 <strong>0개</strong>의 Badge를 획득하였습니다.</span>
                        <Select
                            placeholder="선택"
                            className="ui small-border dropdown m0"
                            defaultValue={selectOptions[0].value}
                            options={selectOptions}
                        />
                    </div>
                <Segment className="full">
                    <div className="group-wrapper">
                        <div className="community_nodata">
                            <Icon>
                                <Image src={Nodata}/>
                            </Icon>
                            <p>
                                {`획득한 Badge가 없습니다.\n등록된 Badge 리스트에서 원하는 Badge에 도전해보세요.`}
                            </p>
                            <Button icon className='right btn-blue2'>
                                <span className='border'>Badge List 바로가기</span>
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
