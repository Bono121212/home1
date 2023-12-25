import React, {Component} from 'react';
import { Segment, Select , Image} from 'semantic-ui-react';
import BadgeCardGroup from '../BadgeCardGroup';
import LogoImg from '../../../../../images/all/logo-gnb.svg';
import CollegeImg from '../../../../../resources/images/all/icon-chanel-64-px.png';
import badgeStyle from '../../../../../images/all/bg-badge-red.png';
import BdMybadge from '../../../../../images/all/bg-certificate-01.png';
import BadgeCard from '../BadgeCard';

const selectOptions = [
    { key: "all", value: "all", text: "전체" },
    { key: "1", value: "level1", text: "Level1" },
    { key: "2", value: "level2", text: "Level2" },
    { key: "3", value: "level3", text: "Level3" },
  ]


class ContentsArea extends Component {
    state = {
        open: true,
        typeChecked: 'mySUNI'
    };
    close = () => this.setState({open: false});

    render() {
        const { size, learningLevel, isCombine, linkable, badgeName } = this.props;

        return (
            <div className="mypage_contents profile-badge-contents">
                <strong className="mypage_title">My Badge</strong>
                    <div className="top-line">
                        <span>총 <strong>4 개</strong>의 Badge를 획득하였습니다.</span>
                        <Select
                            placeholder="선택"
                            className="ui small-border dropdown m0"
                            defaultValue={selectOptions[0].value}
                            options={selectOptions}
                        />
                    </div>
                <Segment className="full">
                    <div className="group-wrapper">
                        <BadgeCardGroup />
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
