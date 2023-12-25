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
                    {/* <div className="view-all"> */}
                        {/*<Checkbox className="base" label="코스만보기" />*/}
                        {/*<Checkbox className="base" label="전체보기" />*/}
                        {/* <Radio
                            label="코스만보기"
                            className="base"
                            name="radioGroup"
                            defaultChecked
                        />
                        <Radio
                            label="전체보기"
                            className="base"
                            name="radioGroup"
                        />
                    </div> */}
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
