import React, {Component, createRef} from 'react';
import { Sticky, Menu, Segment, Dropdown, Icon, Radio, Checkbox, Button, Image } from "semantic-ui-react";
import {Link, NavLink} from "react-router-dom";
import foundationSkillImg from "../../../../../images/all/foundationSkill-info.png" //https://image.mysuni.sk.com/suni-asset/public/images/all/foundationSkill-info.png

const levelOptions = [
    { key: '0', value: 'all', text: '전체 Level'},
    { key: '1', value: 'level1', text: 'Level1'},
    { key: '2', value: 'level2', text: 'Level2'},
    { key: '3', value: 'level3', text: 'Level3'},
]

class NoContents extends Component {

    state = {
        activeItem: 'AllBadgeList',
        val : 'all',
        isChecked : true,
        visible : false
    }
    buttonRef = createRef();
    handleItemClick = (e, {name}) => this.setState({activeItem: name});
    handleItemChange = (e, {value}) => this.setState({val : value})
    handleCheck = (e,{check}) => this.setState({isChecked : check})
   /*  onVisible = () => this.setState({visible : true})
    // popup
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = (event) =>{
        if(!this.buttonRef.current.contains(event.target)){
            this.setState({visible : false})
        }
    }  */

    render() {

        const { activeItem, val, isChecked } = this.state; //visible

        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku2'>
                            <Menu.Item
                                name='AllBadgeList'
                                active={activeItem === 'AllBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/AllBadgeListSlideV2"
                            >
                                Badge List
                                <span class="count">+22</span>
                            </Menu.Item>
                            <Menu.Item
                                name='ChallengingBadgeList'
                                active={activeItem === 'ChallengingBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/ChallengingBadgeListV2"
                            >
                                도전중 Badge
                                <span class="count">+24</span>
                            </Menu.Item>
                            <Menu.Item
                                name='EarnedBadgeList'
                                active={activeItem === 'EarnedBadgeList'}
                                onClick={this.handleItemClick}
                                as={Link} to="/certification/EarnedBadgeListV2"
                            >
                                My Badge
                                <span class="count">+33</span>
                            </Menu.Item>
                            <NavLink
                                to="/">
                                <div className="item-button round">인증제도 소개</div>
                            </NavLink>
                        </Menu>
                    </div>
                </Sticky>

                <Segment className='full badge-list-page'>
                    {/* 카테고리 slide로 변경 됨 https://mysuni.sk.com/suni-main/community/main/open-communities 카테고리 슬라이드와 동일*/}
                    <div className="badge-category-list badge-cate-slide">
                        <div className="left badge-cate-slide-wrap">
                            <Button className="cate-slide-prev">
                                {/* <Icon className="prev-on" /> */}
                                <Icon className="prev-off" />
                            </Button>

                            <div className='cate-slide-content'>
                                <div
                                    className='item-wrap'
                                    //style={{"transform": "translateX(-200px)"}} 200px씩 이동
                                >
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='all'
                                        label='전체'
                                        onChange={this.handleItemChange}
                                        checked={val === 'all'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='FoundationSkill'
                                        label='Foundation Skill'
                                        onChange={this.handleItemChange}
                                        checked={val === 'FoundationSkill'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='HotSkill'
                                        label='Hot Skill'
                                        onChange={this.handleItemChange}
                                        checked={val === 'HotSkill'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='AIDT'
                                        label='AI/DT'
                                        onChange={this.handleItemChange}
                                        checked={val === 'AIDT'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='FutureBiz'
                                        label='미래 Biz'
                                        onChange={this.handleItemChange}
                                        checked={val === 'FutureBiz'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='Common'
                                        label='공통직무'
                                        onChange={this.handleItemChange}
                                        checked={val === 'Common'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='Happy'
                                        label='행복경영'
                                        onChange={this.handleItemChange}
                                        checked={val === 'Happy'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='BMDesign'
                                        label='BM Design'
                                        onChange={this.handleItemChange}
                                        checked={val === 'BMDesign'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='value01'
                                        label='admin에서 추가'
                                        onChange={this.handleItemChange}
                                        checked={val === 'value01'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='value02'
                                        label='admin에서 추가2'
                                        onChange={this.handleItemChange}
                                        checked={val === 'value02'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='value03'
                                        label='admin에서 추가3'
                                        onChange={this.handleItemChange}
                                        checked={val === 'value03'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='value04'
                                        label='admin에서 추가4'
                                        onChange={this.handleItemChange}
                                        checked={val === 'value04'}
                                    />
                                    <Radio
                                        name='CateGroup'
                                        className='round3'
                                        value='value05'
                                        label='admin에서 추가5'
                                        onChange={this.handleItemChange}
                                        checked={val === 'value05'}
                                    />
                                </div>
                            </div>

                            <Button className="cate-slide-next">
                                <Icon className="next-on" />
                                {/* <Icon className="next-off" /> */}
                            </Button>
                        </div>
                    </div>

                    {/* FoundationSkill인경우 보여주는 설명 그림은 추후 교체예정 */}
                    {val === 'FoundationSkill' &&
                    <div className='cate-info-area'>
                        <span className='img-wrap'>
                            <Image src={foundationSkillImg} alt="FundationSkill 구성" />
                        </span>
                    </div>
                    }
                    {/* counting & radio button */}
                    <div className='top-guide-title'>
                        <div className='list-number'>총 <strong>0개</strong>의 획득할 수 있는 Badge가 있습니다.</div>
                        <div className='right-wrap'>
                            <Checkbox
                                className='again_chk'
                                label='Badge Plus'
                                checked={isChecked}
                                onClick={this.handleCheck}
                            />
                            <Dropdown
                                className='small-border s160'
                                placeholder='전체 Level'
                                selection
                                options={levelOptions}
                                defaultValue={levelOptions[0].value}
                            />
                        </div>
                    </div>

                    {/* Badge nodata */}
                    <div className="badge-list-v2">
                        <div className='no-cont-wrap'>
                            <Icon className='no-contents80'/>
                            <div className='text'>
                                조회된 Badge가 없습니다.
                            </div>
                        </div>
                    </div>

                </Segment>
            </div>
        )
    }
}

export default NoContents