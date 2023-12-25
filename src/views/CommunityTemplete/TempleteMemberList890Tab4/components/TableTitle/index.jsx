import React, {Component} from 'react'
import RightSideButtons from '../RightSideButtons';


class BorderTitle extends Component {
    render() {
        // const { isOnFilter, onClickFilter } = this.props;

        return (
            <div className="table-board-title">
                <div className="list-number">총 <strong>12 명</strong> 가입대기</div>
                <div className="right-wrap">
                    <RightSideButtons/>
                </div>
            </div>
        )
    }
}

export default BorderTitle
