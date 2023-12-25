import React, {Component} from 'react'
import { Icon, Button } from 'semantic-ui-react'
import classNames from 'classnames';


class TopGuideTitle extends Component {
    //
    render() {
        //
        const { isOnFilter, onClickFilter } = this.props;

        return (
            <div className="top-guide-title">
                <div className="list-number">총 <strong>4개</strong>의 리스트가 있습니다.</div>
                <div className="right-wrap">
                    <Button icon className={classNames(isOnFilter ? 'on btn-filter-blue' : 'left post')} onClick={onClickFilter}>
                        {!isOnFilter && (<Icon className="filter2"/>)}
                        <span>Filter</span>
                    </Button>
                </div>
            </div>
        )
    }
}

export default TopGuideTitle
