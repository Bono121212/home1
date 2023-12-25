import React, {Component} from 'react'
import ClearInputBoxSearch from '../ClearInputBoxSearch';


class BorderTitle extends Component {
    render() {
        // const { isOnFilter, onClickFilter } = this.props;

        return (
            <div className="table-board-title">
                <div className="list-number">총 <strong>3,009</strong>명</div>
                <div className="right-wrap member-search">
                    <ClearInputBoxSearch />
                </div>
            </div>
        )
    }
}

export default BorderTitle
