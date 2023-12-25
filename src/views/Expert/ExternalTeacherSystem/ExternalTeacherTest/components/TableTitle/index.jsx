import React, { Component } from "react";
import {Radio, Button} from "semantic-ui-react";
// const selectOptions02 = [
//     {key: 'val01', value: 'val01', text: '최신 등록 순'},
//     {key: 'val02', value: 'val02', text: '좋아요순'},
//     {key: 'val02', value: 'val02', text: '댓글순'}
// ];

class TopGuideTitle extends Component {
    render() {
        return (
            <div className="table-board-title">
                <div className="list-number">
                    총 <strong>59</strong>개의 리스트가 있습니다.
                </div>
                <div className="right-wrap board-down-title-right">
                    <div className="view-all">
                        <Radio
                            label="전체"
                            className="base"
                            name="radioGroup"
                            defaultChecked
                        />
                        <Radio
                            label="완료"
                            className="base"
                            name="radioGroup"
                        />
                        <Radio
                            label="대기"
                            className="base"
                            name="radioGroup"
                        />

                        <Button type="button"
                            onClick={this.handlePopup}
                            className="show"
                        >
                            문제보기
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopGuideTitle;
