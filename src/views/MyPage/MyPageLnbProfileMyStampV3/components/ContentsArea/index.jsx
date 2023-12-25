import React, {Component} from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import StampList from '../StampList';
// import {Filter} from '../../../../../components';
// import classNames from 'classnames';
import ContentsMoreView from '../ContentsMoreView';

class ContentsArea extends Component {
    state = {
        isOnFilter: false,
    }
    onClickFilter = () => this.setState((prevState) => ({isOnFilter: !prevState.isOnFilter}));

    render() {
        // const {isOnFilter} = this.state
        return (
            <div className="mypage_contents my-stamp-list">
                <strong className="mypage_title">My Stamp</strong>
                <div className="top-line">
                    <div className="left-line">
                        <Button icon className="post excel-down">
                            <Icon className="excel-down"/>
                            엑셀 다운로드
                        </Button>
                        <span>총 <strong>15개</strong>의 리스트가 있습니다.</span>
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
                        <StampList />
                        <ContentsMoreView />
                    </div>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
