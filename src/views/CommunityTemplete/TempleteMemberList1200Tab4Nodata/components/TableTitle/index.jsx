import React, {Component} from 'react'
import ClearInputBoxSearch from '../ClearInputBoxSearch';


class BorderTitle extends Component {
    render() {
        // const { isOnFilter, onClickFilter } = this.props;

        return (
            <div className="table-board-title">
                <div className="list-number">총 <strong>0</strong>개의 그룹</div>
                <div className="right-wrap member-search">
                    <ClearInputBoxSearch />
                </div>
            </div>
        )
    }
}

export default BorderTitle
