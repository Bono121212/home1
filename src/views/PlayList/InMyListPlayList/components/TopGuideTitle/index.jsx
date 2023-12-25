import React, {Component} from 'react'
import {Button, Icon} from 'semantic-ui-react';
import classNames from 'classnames';
import TopButtonGroup from '../TopButtonGroup';


class TopGuideTitle extends Component {
    //
    render() {
        //
        const {isOnFilter, onClickFilter} = this.props;

        return (
            <div className="top-guide-title">

                <TopButtonGroup/>

                <div className="right-wrap">
                    <Button className={classNames(isOnFilter ? 'on btn-filter-blue' : 'icon left post')} onClick={onClickFilter}>

                        {!isOnFilter && (<Icon className="filter2"/>)}
                        <span>Filter</span>
                    </Button>
                </div>
            </div>
        )
    }
}

export default TopGuideTitle
